#!/usr/bin/env python3
"""
ComfyUI Image Generator för Karla Cleaning Crew
Genererar alla 20 bilder från images_prompts.json
"""

import json
import requests
import time
import os
import uuid
from pathlib import Path

# ====== KONFIGURATION ======
COMFYUI_URL = "http://127.0.0.1:8000"
PROMPTS_FILE = "images_prompts.json"
OUTPUT_DIR = "output/generated_images"

# ====== KONSTANTER ======
TIMEOUT = 300  # 5 minuter timeout per bild

def load_prompts():
    """Ladda prompts från JSON-fil"""
    try:
        with open(PROMPTS_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"✅ Laddat {len(data['images'])} bilder från {PROMPTS_FILE}")
        return data['images']
    except FileNotFoundError:
        print(f"❌ FEL: Kan inte hitta {PROMPTS_FILE}")
        print(f"   Plats: {os.path.abspath(PROMPTS_FILE)}")
        exit(1)
    except json.JSONDecodeError:
        print(f"❌ FEL: {PROMPTS_FILE} är inte en giltig JSON-fil")
        exit(1)

def check_comfyui():
    """Kontrollera att ComfyUI kör"""
    try:
        response = requests.get(f"{COMFYUI_URL}/system_stats", timeout=5)
        if response.status_code == 200:
            print(f"✅ ComfyUI ansluten på {COMFYUI_URL}")
            return True
    except requests.ConnectionError:
        print(f"❌ ANSLUTNINGSFEL: Kan inte ansluta till ComfyUI på {COMFYUI_URL}")
        print("   Lösning: Starta ComfyUI Desktop först och försök igen")
        exit(1)
    except Exception as e:
        print(f"❌ FEL: {e}")
        exit(1)

def parse_resolution(res_str):
    """Konvertera "1920x1080" till (1920, 1080)"""
    try:
        width, height = map(int, res_str.split('x'))
        return width, height
    except:
        return 1920, 1080

def build_workflow(prompt_data):
    """Bygga ComfyUI workflow från prompt"""
    width, height = parse_resolution(prompt_data.get('resolution', '1920x1080'))

    workflow = {
        "1": {
            "inputs": {
                "ckpt_name": "sd_xl_base_1.0.safetensors"  # Standard modell
            },
            "class_type": "CheckpointLoaderSimple",
            "_meta": {
                "title": "Load Checkpoint"
            }
        },
        "2": {
            "inputs": {
                "clip": ["1", 1],
                "text": prompt_data['prompt']
            },
            "class_type": "CLIPTextEncode",
            "_meta": {
                "title": "CLIP Text Encode (Positive)"
            }
        },
        "3": {
            "inputs": {
                "clip": ["1", 1],
                "text": prompt_data['negative_prompt']
            },
            "class_type": "CLIPTextEncode",
            "_meta": {
                "title": "CLIP Text Encode (Negative)"
            }
        },
        "4": {
            "inputs": {
                "width": width,
                "height": height,
                "batch_size": 1
            },
            "class_type": "EmptyLatentImage",
            "_meta": {
                "title": "Empty Latent Image"
            }
        },
        "5": {
            "inputs": {
                "seed": 42,
                "steps": 30,
                "cfg": 7.5,
                "sampler_name": "euler",
                "scheduler": "normal",
                "denoise": 1,
                "model": ["1", 0],
                "positive": ["2", 0],
                "negative": ["3", 0],
                "latent_image": ["4", 0]
            },
            "class_type": "KSampler",
            "_meta": {
                "title": "KSampler"
            }
        },
        "6": {
            "inputs": {
                "samples": ["5", 0],
                "vae": ["1", 2]
            },
            "class_type": "VAEDecode",
            "_meta": {
                "title": "VAE Decode"
            }
        },
        "7": {
            "inputs": {
                "filename_prefix": prompt_data['name'],
                "images": ["6", 0]
            },
            "class_type": "SaveImage",
            "_meta": {
                "title": "Save Image"
            }
        }
    }

    return workflow

def generate_image(prompt_data):
    """Generera en bild via ComfyUI API"""
    try:
        # Bygga workflow
        workflow = build_workflow(prompt_data)

        # Skicka till ComfyUI
        print(f"   Genererar: {prompt_data['name']}...", end=" ", flush=True)

        response = requests.post(
            f"{COMFYUI_URL}/prompt",
            json=workflow,
            timeout=TIMEOUT
        )

        if response.status_code == 200:
            result = response.json()
            prompt_id = result.get('prompt_id')

            if prompt_id:
                # Vänta på resultat
                start_time = time.time()
                while time.time() - start_time < TIMEOUT:
                    history_response = requests.get(
                        f"{COMFYUI_URL}/history/{prompt_id}",
                        timeout=10
                    )

                    if history_response.status_code == 200:
                        history = history_response.json()
                        if prompt_id in history:
                            print("✅")
                            return True

                    time.sleep(2)

                print("⏱️ TIMEOUT")
                return False
            else:
                print("❌ Ingen prompt_id returnerad")
                return False
        else:
            print(f"❌ HTTP {response.status_code}")
            return False

    except Exception as e:
        print(f"❌ FEL: {e}")
        return False

def main():
    """Huvudprogram"""
    print("\n" + "="*60)
    print("🎨 Karla Cleaning Crew - Image Generator")
    print("="*60 + "\n")

    # 1. Kontrollera ComfyUI
    print("📡 Kontrollerar ComfyUI-anslutning...")
    check_comfyui()

    # 2. Ladda prompts
    print("\n📂 Laddar prompts...")
    prompts = load_prompts()

    # 3. Skapa output-mapp
    Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)
    print(f"📁 Output-mapp: {os.path.abspath(OUTPUT_DIR)}")

    # 4. Generera bilder
    print(f"\n🚀 Genererar {len(prompts)} bilder...\n")

    successful = 0
    failed = 0

    for i, prompt_data in enumerate(prompts, 1):
        print(f"[{i}/{len(prompts)}]", end=" ")

        if generate_image(prompt_data):
            successful += 1
        else:
            failed += 1

        # Kort paus mellan bilder för att undvika överbelastning
        if i < len(prompts):
            time.sleep(2)

    # 5. Sammanfattning
    print("\n" + "="*60)
    print("✅ KLAR!")
    print(f"   Lyckades: {successful}")
    print(f"   Misslyckades: {failed}")
    print(f"   Output-mapp: {os.path.abspath(OUTPUT_DIR)}")
    print("="*60 + "\n")

if __name__ == "__main__":
    main()
