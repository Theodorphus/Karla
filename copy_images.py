#!/usr/bin/env python3
"""
Kopiera och döpa om genererade bilder till rätt plats
"""

import os
import shutil
from pathlib import Path

# Källmapp (OneDrive)
SOURCE_DIR = r"C:\Users\leond_lovhs05\OneDrive\Pictures\Karla images"

# Målmapp (public)
TARGET_DIR = r"c:\Users\leond_lovhs05\.vscode\.Net\.VSCODE\karlacleaningcrew\public\images\generated"

# Bildmappning: {SourceFileName} -> {TargetFileName}
IMAGE_MAPPING = {
    "1. Hero‑bild.png": "startsida_hero.png",

    # Services - 6 tjänster
    "Dammsugning.png": "hemstadning_hero.png",
    "Dammtorkning.png": "flyttstad_hero.png",
    "Handtag & strömbrytare.png": "fonsterputs_hero.png",
    "Professionellt intryck.png": "byggstad_hero.png",
    "Köksrengöring.png": "kontorsstadning_hero.png",
    "Badrumsrengöring.png": "lokalvard_hero.png",

    # Benefits - 2 bilder
    "Miljövänlig städning.png": "startsida_kvalitet.png",
    "Miljövänliga produkter.png": "startsida_hemstadning.png",

    # FAQ
    "FAQ‑bild.png": "faq_bg.png",

    # Extra bilder (för framtida bruk)
    "Bäddning av säng.png": "extra_bedding.png",
    "Hälsa & välbefinnande.png": "extra_health.png",
    "RUT‑avdrag.png": "extra_rut.png",
    "Skräphantering.png": "extra_trash.png",
    "Sparad tid & pengar.png": "extra_savings.png",
    "Handtag & strömbrytare.png": "extra_handles.png",
}

# Skapa målmapp om den inte finns
Path(TARGET_DIR).mkdir(parents=True, exist_ok=True)

print("\n" + "="*60)
print("🖼️  Kopierar och döper om bilder...")
print("="*60 + "\n")

success_count = 0
failed_count = 0

for source_name, target_name in IMAGE_MAPPING.items():
    source_path = os.path.join(SOURCE_DIR, source_name)
    target_path = os.path.join(TARGET_DIR, target_name)

    try:
        if os.path.exists(source_path):
            shutil.copy2(source_path, target_path)
            print(f"✅ {source_name}")
            print(f"   → {target_name}\n")
            success_count += 1
        else:
            print(f"⚠️  SAKNAS: {source_name}\n")
            failed_count += 1
    except Exception as e:
        print(f"❌ FEL: {source_name}")
        print(f"   {str(e)}\n")
        failed_count += 1

print("="*60)
print(f"✅ Lyckades: {success_count}")
print(f"❌ Misslyckades/Saknas: {failed_count}")
print(f"📁 Målmapp: {TARGET_DIR}")
print("="*60 + "\n")
