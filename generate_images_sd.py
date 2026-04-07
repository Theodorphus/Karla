#!/usr/bin/env python3
"""
Stable Diffusion WebUI Image Generator för Karla Cleaning Crew
Genererar alla 20 bilder från images_prompts.json
"""

import json
import requests
import time
import os
import base64
import io
from pathlib import Path
from PIL import Image

# ====== KONFIGURATION ======
SD_URL = "http://127.0.0.1:7860"  # Stable Diffusion WebUI port
PROMPTS_FILE = "images_prompts.json"
OUTPUT_DIR = "output/generated_images"
TIMEOUT = 300  # 5 minuter per bild

def load_prompts():
    """Ladda prompts från JSON-fil"""
    try:
        with open(PROMPTS_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"✅ Laddat {len(data['images'])} bilder från {PROMPTS_FILE}")
        return data['images']
    except FileNotFoundError:
        print(f"❌ FEL: Kan inte hitta {PROMPTS_FILE}")
        exit(1)
    except json.JSONDecodeError:
        print(f"❌ FEL: {PROMPTS_FILE} är inte en giltig JSON-fil")
        exit(1)

def check_sd():
    """Kontrollera att Stable Diffusion WebUI kör"""
    try:
        response = requests.get(f"{SD_URL}/api/sd-models", timeout=5)
        if response.status_code == 200:
            print(f"✅ Stable Diffusion WebUI ansluten på {SD_URL}")
            return True
    except requests.ConnectionError:
        print(f"❌ ANSLUTNINGSFEL: Kan inte ansluta till Stable Diffusion på {SD_URL}")
        print("   Lösning: Starta webui-user.bat och vänta tills 'Running on...' visas")
        exit(1)
    except Exception as e:
        print(f"❌ FEL: {e}")
        exit(1)

def parse_resolution(res_str):
    """Konvertera "1920x1080" till (1920, 1080), använd mindre storlek för snabbhet"""
    try:
        width, height = map(int, res_str.split('x'))
        # Stabil diffusion fungerar bäst med 512 eller 768
        # Skalad ner för snabbhet
        scale = 0.4  # 768x432 från 1920x1080
        w = int(width * scale)
        h = int(height * scale)
        # Avrunda till närmaste 64 (Stable Diffusion-krav)
        w = (w // 64) * 64
        h = (h // 64) * 64
        return max(w, 512), max(h, 512)
    except:
        return 512, 512

def generate_image(prompt_data):
    """Generera en bild via Stable Diffusion WebUI API"""
    try:
        width, height = parse_resolution(prompt_data.get('resolution', '1920x1080'))

        print(f"   Genererar: {prompt_data['name']}...", end=" ", flush=True)

        # Stabil Diffusion WebUI API payload
        payload = {
            "prompt": prompt_data['prompt'],
            "negative_prompt": prompt_data['negative_prompt'],
            "steps": 25,
            "cfg_scale": 7.0,
            "width": width,
            "height": height,
            "sampler_name": "Euler",
            "sampler_index": "Euler",
            "seed": -1,  # Random seed
            "batch_size": 1,
            "n_iter": 1,
            "restore_faces": False,
            "tiling": False,
        }

        # Skicka request
        response = requests.post(
            f"{SD_URL}/api/txt2img",
            json=payload,
            timeout=TIMEOUT
        )

        if response.status_code == 200:
            result = response.json()

            # Spara bilden
            if "images" in result and len(result["images"]) > 0:
                image_data = result["images"][0]

                # Decode base64
                image_bytes = base64.b64decode(image_data)
                image = Image.open(io.BytesIO(image_bytes))

                # Spara fil
                output_file = f"{OUTPUT_DIR}/{prompt_data['name']}.png"
                image.save(output_file)

                print("✅")
                return True
            else:
                print("❌ Ingen bild i response")
                return False
        else:
            print(f"❌ HTTP {response.status_code}")
            return False

    except requests.Timeout:
        print("⏱️ TIMEOUT")
        return False
    except Exception as e:
        print(f"❌ FEL: {str(e)[:50]}")
        return False

def main():
    """Huvudprogram"""
    print("\n" + "="*60)
    print("🎨 Karla Cleaning Crew - Stable Diffusion Generator")
    print("="*60 + "\n")

    # 1. Kontrollera Stable Diffusion
    print("📡 Kontrollerar Stable Diffusion WebUI...")
    check_sd()

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

        # Kort paus mellan bilder
        if i < len(prompts):
            time.sleep(1)

    # 5. Sammanfattning
    print("\n" + "="*60)
    print("✅ KLAR!")
    print(f"   Lyckades: {successful}")
    print(f"   Misslyckades: {failed}")
    print(f"   Output-mapp: {os.path.abspath(OUTPUT_DIR)}")
    print("="*60 + "\n")

if __name__ == "__main__":
    main()
