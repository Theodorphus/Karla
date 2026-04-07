#!/usr/bin/env python3
"""Debug ComfyUI - Visa faktisk struktur"""

import requests
import json

COMFYUI_URL = "http://127.0.0.1:8000"

print("🔍 ComfyUI Debug\n")

# Test 1: Visa /api response
print("1️⃣  Vad returnerar /api?")
try:
    response = requests.get(f"{COMFYUI_URL}/api", timeout=5)
    print(f"   Status: {response.status_code}")
    print(f"   Content: {response.text[:500]}")
except Exception as e:
    print(f"   Error: {e}")

# Test 2: Visa /api/models respons
print("\n2️⃣  Vad returnerar /api/models?")
try:
    response = requests.get(f"{COMFYUI_URL}/api/models", timeout=5)
    data = response.json()
    print(f"   Type: {type(data)}")
    print(f"   Length: {len(data) if isinstance(data, list) else 'N/A'}")
    if isinstance(data, list):
        print(f"   Första 3 items: {data[:3]}")
    else:
        print(f"   Keys: {list(data.keys())[:5]}")
except Exception as e:
    print(f"   Error: {e}")

# Test 3: Testa enkel SaveImage-workflow (minimalt)
print("\n3️⃣  Testa minimal SaveImage workflow...")
try:
    # Bara SaveImage - ingen generering
    workflow = {
        "1": {
            "inputs": {
                "filename_prefix": "test",
                "images": []
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
        print(f"   Error: {result['error']}")
    else:
        print(f"   Success: {result.get('prompt_id', 'NO ID')}")

except Exception as e:
    print(f"   Error: {e}")

# Test 4: Visa default modeller i ComfyUI
print("\n4️⃣  Lista files i models-mapp...")
try:
    response = requests.get(f"{COMFYUI_URL}/api", timeout=5)
    # Försök hämta info från ComfyUI-instansen
    print("   (ComfyUI Desktop använder ofta embedded modeller)")
    print("   Prova ladda en image istället för att generera en")
except Exception as e:
    print(f"   Error: {e}")

# Test 5: Testa LoadImage istället
print("\n5️⃣  Testa LoadImage workflow...")
try:
    workflow = {
        "1": {
            "inputs": {
                "image": "example.png"  # Kräver fil
            },
            "class_type": "LoadImage"
        },
        "2": {
            "inputs": {
                "images": ["1", 0]
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
        error = result['error']
        print(f"   Error type: {error.get('type')}")
        print(f"   Message: {error.get('message')}")
    else:
        print(f"   ID: {result.get('prompt_id')}")

except Exception as e:
    print(f"   Error: {e}")

print("\n" + "="*60)
print("📝 Sammanfattning:")
print("   ComfyUI Desktop kräver ofta:")
print("   - Installerade modeller (SD, SDXL, etc)")
print("   - Rätt node-konfiguration")
print("   - Outputs-validering")
print("="*60)
