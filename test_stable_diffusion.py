#!/usr/bin/env python3
"""Test Stable Diffusion WebUI anslutning"""

import requests
import json

SD_URL = "http://127.0.0.1:7860"

print("🔍 Testing Stable Diffusion WebUI API...\n")

# Test 1: Grundläggande anslutning
print("1️⃣  Kontrollera anslutning...")
try:
    response = requests.get(f"{SD_URL}/api/sd-models", timeout=5)
    if response.status_code == 200:
        print(f"   ✅ Ansluten!")
    else:
        print(f"   ❌ Status: {response.status_code}")
except Exception as e:
    print(f"   ❌ Error: {e}")
    print(f"   💡 Tipp: Är Stable Diffusion WebUI igång? Kör webui-user.bat")

# Test 2: Lista modeller
print("\n2️⃣  Lista tillgängliga modeller...")
try:
    response = requests.get(f"{SD_URL}/api/sd-models", timeout=5)
    if response.status_code == 200:
        models = response.json()
        if isinstance(models, list) and len(models) > 0:
            print(f"   ✅ Modeller tillgängliga:")
            for model in models[:3]:
                title = model.get('title', model.get('model_name', 'Unknown'))
                print(f"      - {title}")
        else:
            print(f"   ⚠️ Inga modeller hittades")
except Exception as e:
    print(f"   ❌ Error: {e}")

# Test 3: Test enkel bildgenerering
print("\n3️⃣  Testa enkel bildgenerering...")
try:
    payload = {
        "prompt": "a beautiful Scandinavian kitchen, bright and clean, daylight",
        "negative_prompt": "blurry, dark, messy",
        "steps": 10,  # Låga steg för test
        "cfg_scale": 7.0,
        "width": 512,
        "height": 512,
        "sampler_name": "Euler",
    }

    response = requests.post(
        f"{SD_URL}/api/txt2img",
        json=payload,
        timeout=60
    )

    if response.status_code == 200:
        result = response.json()
        if "images" in result and len(result["images"]) > 0:
            print(f"   ✅ Bildgenerering fungerar!")
            print(f"   📸 Bildstorlek: {len(result['images'][0])} bytes")
        else:
            print(f"   ❌ Ingen bild i response")
    else:
        print(f"   ❌ HTTP {response.status_code}: {response.text[:200]}")

except requests.Timeout:
    print(f"   ⏱️ TIMEOUT - Bildgenereringen tar för lång tid")
except Exception as e:
    print(f"   ❌ Error: {e}")

# Test 4: Systeminfo
print("\n4️⃣  Systeminfo...")
try:
    response = requests.get(f"{SD_URL}/api/progress", timeout=5)
    if response.status_code == 200:
        data = response.json()
        print(f"   ✅ Progress API svarar")
        print(f"   Status: {data}")
except Exception as e:
    print(f"   ℹ️  (Optional) {e}")

print("\n" + "="*60)
print("✅ Test klart!")
print("="*60)
