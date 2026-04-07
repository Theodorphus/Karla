#!/usr/bin/env python3
"""Test ComfyUI API och visa vad som finns tillgängligt"""

import requests
import json

COMFYUI_URL = "http://127.0.0.1:8000"

print("🔍 Testing ComfyUI API...\n")

# Test 1: Grundläggande anslutning
print("1️⃣  Testa grundläggande anslutning...")
try:
    response = requests.get(f"{COMFYUI_URL}/api", timeout=5)
    print(f"   ✅ Status: {response.status_code}")
except Exception as e:
    print(f"   ❌ Error: {e}")

# Test 2: System stats
print("\n2️⃣  Hämta system stats...")
try:
    response = requests.get(f"{COMFYUI_URL}/system_stats", timeout=5)
    if response.status_code == 200:
        data = response.json()
        print(f"   ✅ GPU Memory: {data.get('system', {}).get('ram', 'N/A')}")
    else:
        print(f"   ❌ Status: {response.status_code}")
except Exception as e:
    print(f"   ❌ Error: {e}")

# Test 3: Lista modeller
print("\n3️⃣  Lista tillgängliga modeller...")
try:
    response = requests.get(f"{COMFYUI_URL}/api/models", timeout=5)
    if response.status_code == 200:
        data = response.json()
        print(f"   ✅ Tillgängliga checkpoint-modeller:")
        if 'checkpoints' in data:
            for model in data['checkpoints'][:3]:  # Visa första 3
                print(f"      - {model}")
        else:
            print(f"   Response keys: {list(data.keys())}")
    else:
        print(f"   ❌ Status: {response.status_code}")
except Exception as e:
    print(f"   ❌ Error: {e}")

# Test 4: Lista samplers
print("\n4️⃣  Lista tillgängliga samplers...")
try:
    response = requests.get(f"{COMFYUI_URL}/api/samplers", timeout=5)
    if response.status_code == 200:
        data = response.json()
        print(f"   ✅ Samplers: {data}")
    else:
        print(f"   Status: {response.status_code}")
except Exception as e:
    print(f"   ℹ️  Info: {type(e).__name__}")

# Test 5: Test workflow submission
print("\n5️⃣  Testa enkel workflow-submission...")
try:
    # Minimal workflow
    test_workflow = {
        "1": {
            "inputs": {
                "ckpt_name": "sd_xl_base_1.0.safetensors"
            },
            "class_type": "CheckpointLoaderSimple"
        }
    }

    response = requests.post(
        f"{COMFYUI_URL}/prompt",
        json=test_workflow,
        timeout=10
    )

    print(f"   Status: {response.status_code}")
    print(f"   Response: {response.text[:200]}")

except Exception as e:
    print(f"   ❌ Error: {e}")

print("\n✅ Test klart!")
