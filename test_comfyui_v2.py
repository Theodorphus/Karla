#!/usr/bin/env python3
"""Debug ComfyUI API - Test rätt format"""

import requests
import json

COMFYUI_URL = "http://127.0.0.1:8000"

print("🔍 Testing ComfyUI API v2...\n")

# Test 1: Hämta modeller med rätt format
print("1️⃣  Hämta modeller...")
try:
    response = requests.get(f"{COMFYUI_URL}/api/models", timeout=5)
    data = response.json()
    print(f"   Response keys: {list(data.keys())}")

    # Prova hitta checkpoints
    for key in data.keys():
        if isinstance(data[key], list) and len(data[key]) > 0:
            print(f"   ✅ {key}: {data[key][:2]}")  # Visa första 2
except Exception as e:
    print(f"   ❌ Error: {e}")

# Test 2: Testa rätt workflow format
print("\n2️⃣  Testa rätt workflow format (med 'prompt' wrapper)...")
try:
    # Detta är rätt format för ComfyUI
    workflow = {
        "1": {
            "inputs": {
                "ckpt_name": "sd_xl_base_1.0.safetensors"
            },
            "class_type": "CheckpointLoaderSimple"
        },
        "2": {
            "inputs": {
                "text": "a simple test",
                "clip": ["1", 1]
            },
            "class_type": "CLIPTextEncode"
        }
    }

    response = requests.post(
        f"{COMFYUI_URL}/prompt",
        json={"prompt": workflow},  # ← Wichtig: Wrap i "prompt"
        timeout=10
    )

    print(f"   Status: {response.status_code}")
    result = response.json()

    if "error" in result:
        print(f"   ❌ Error: {result['error']}")
    elif "prompt_id" in result:
        print(f"   ✅ Success! Prompt ID: {result['prompt_id']}")
    else:
        print(f"   Response: {json.dumps(result, indent=2)[:300]}")

except Exception as e:
    print(f"   ❌ Error: {e}")

# Test 3: Testa enkel bildgenerering
print("\n3️⃣  Testa minimal bildgenerering...")
try:
    workflow = {
        "1": {
            "inputs": {
                "ckpt_name": "sd_xl_base_1.0.safetensors"
            },
            "class_type": "CheckpointLoaderSimple"
        },
        "2": {
            "inputs": {
                "text": "a beautiful Scandinavian kitchen, bright and clean",
                "clip": ["1", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "3": {
            "inputs": {
                "text": "blurry, dark, messy",
                "clip": ["1", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "4": {
            "inputs": {
                "width": 512,
                "height": 512,
                "batch_size": 1
            },
            "class_type": "EmptyLatentImage"
        },
        "5": {
            "inputs": {
                "seed": 42,
                "steps": 20,
                "cfg": 7.0,
                "sampler_name": "euler",
                "scheduler": "normal",
                "denoise": 1.0,
                "model": ["1", 0],
                "positive": ["2", 0],
                "negative": ["3", 0],
                "latent_image": ["4", 0]
            },
            "class_type": "KSampler"
        },
        "6": {
            "inputs": {
                "samples": ["5", 0],
                "vae": ["1", 2]
            },
            "class_type": "VAEDecode"
        },
        "7": {
            "inputs": {
                "filename_prefix": "test_image",
                "images": ["6", 0]
            },
            "class_type": "SaveImage"
        }
    }

    response = requests.post(
        f"{COMFYUI_URL}/prompt",
        json={"prompt": workflow},
        timeout=10
    )

    print(f"   Status: {response.status_code}")
    result = response.json()

    if "error" in result:
        print(f"   ❌ Error: {result['error']}")
    elif "prompt_id" in result:
        prompt_id = result['prompt_id']
        print(f"   ✅ Workflow submitted! ID: {prompt_id}")
        print(f"   Billden sparas till: ComfyUI/output/ eller output/test_image_*")
    else:
        print(f"   Response: {result}")

except Exception as e:
    print(f"   ❌ Error: {e}")

print("\n✅ Test klart!")
