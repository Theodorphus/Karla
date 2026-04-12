#!/usr/bin/env python3
"""
Optimerad bildmappning - Matchar bilder till rätt sektion
"""

import os
import shutil
from pathlib import Path

SOURCE_DIR = r"C:\Users\leond_lovhs05\OneDrive\Pictures\Karla images"
TARGET_DIR = r"c:\Users\leond_lovhs05\.vscode\.Net\.VSCODE\karlacleaningcrew\public\images\generated"

# OPTIMERAD MAPPNING baserat på bildinnehål
IMAGE_MAPPING = {
    # ===== HERO =====
    "1. Hero‑bild.png": "startsida_hero.png",

    # ===== SERVICES (6 tjänster) =====
    # Hemstädning - klassisk hemstädning med dammsugning
    "Dammsugning.png": "hemstadning_hero.png",

    # Flyttstad - badrumsrengöring är ofta fokus vid flyttstad
    "Badrumsrengöring.png": "flyttstad_hero.png",

    # Fönsterputs - Handtag & strömbrytare (detaljer/polis, men närmast)
    # VARNING: Inte ideal! Bör generera ny bild för fönsterputs
    "Handtag & strömbrytare.png": "fonsterputs_hero.png",

    # Byggstad - Dammtorkning (passar bra för byggstäd-damm)
    "Dammtorkning.png": "byggstad_hero.png",

    # Kontorsstädning - Professionellt intryck (passar kontorsmiljö)
    "Professionellt intryck.png": "kontorsstadning_hero.png",

    # Lokalvård - Köksrengöring (kan vara gemensam/offentlig miljö)
    "Köksrengöring.png": "lokalvard_hero.png",

    # ===== BENEFITS / FÖRDELAR (2-kolumns sektion) =====
    "Miljövänlig städning.png": "startsida_kvalitet.png",
    "Miljövänliga produkter.png": "startsida_hemstadning.png",

    # ===== FAQ =====
    "FAQ‑bild.png": "faq_bg.png",

    # ===== EXTRA / FUTURE USE =====
    "Bäddning av säng.png": "extra_bedding.png",
    "Hälsa & välbefinnande.png": "extra_health.png",
    "RUT‑avdrag.png": "extra_rut.png",
    "Skräphantering.png": "extra_trash.png",
    "Sparad tid & pengar.png": "extra_savings.png",
}

Path(TARGET_DIR).mkdir(parents=True, exist_ok=True)

print("\n" + "="*70)
print("🖼️  OPTIMERAD BILDMAPPNING")
print("="*70 + "\n")

sections = {
    "HERO": ["startsida_hero.png"],
    "SERVICES": ["hemstadning_hero.png", "flyttstad_hero.png", "fonsterputs_hero.png",
                 "byggstad_hero.png", "kontorsstadning_hero.png", "lokalvard_hero.png"],
    "BENEFITS": ["startsida_kvalitet.png", "startsida_hemstadning.png"],
    "FAQ": ["faq_bg.png"],
    "EXTRA": ["extra_bedding.png", "extra_health.png", "extra_rut.png", "extra_trash.png", "extra_savings.png"]
}

success_count = 0
failed_count = 0
warnings = []

for source_name, target_name in IMAGE_MAPPING.items():
    source_path = os.path.join(SOURCE_DIR, source_name)
    target_path = os.path.join(TARGET_DIR, target_name)

    try:
        if os.path.exists(source_path):
            shutil.copy2(source_path, target_path)

            # Hitta vilken sektion denna bild tillhör
            section = "UNKNOWN"
            for sec, targets in sections.items():
                if target_name in targets:
                    section = sec
                    break

            print(f"✅ [{section:10}] {source_name}")
            print(f"             → {target_name}\n")
            success_count += 1

            # Speciella varningar
            if target_name == "fonsterputs_hero.png":
                warnings.append("⚠️  VARNING: Fönsterputs-bild är inte ideal (Handtag & strömbrytare använd som fallback)")

        else:
            print(f"⚠️  SAKNAS: {source_name}\n")
            failed_count += 1
    except Exception as e:
        print(f"❌ FEL: {source_name}\n   {str(e)}\n")
        failed_count += 1

print("="*70)
print(f"✅ Lyckades: {success_count}")
print(f"⚠️  Problem: {failed_count}")
print("="*70)

if warnings:
    print("\n⚠️  VARNINGAR:\n")
    for warning in warnings:
        print(f"  {warning}\n")

print("\n" + "="*70)
print("📋 BILDÖVERSIKT:\n")
print("✅ HEMSTÄDNING: Dammsugning")
print("✅ FLYTTSTAD: Badrumsrengöring")
print("⚠️  FÖNSTERPUTS: Handtag & strömbrytare (INTE IDEAL - BÖR GENERERAS)")
print("✅ BYGGSTAD: Dammtorkning")
print("✅ KONTORSSTÄDNING: Professionellt intryck")
print("✅ LOKALVÅRD: Köksrengöring")
print("✅ FÖRDELAR: Miljövänlig städning + Miljövänliga produkter")
print("="*70 + "\n")
