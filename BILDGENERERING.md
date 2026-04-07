# 🎨 Bildgenerering för Karla Cleaning Crew

Denna guide förklarar hur du genererar alla 20 bilder automatiskt.

---

## 📋 Vad du behöver

✅ ComfyUI Desktop (redan installerat)
✅ Python 3.7+ (antas redan finnas)
✅ `images_prompts.json` (redan skapat)
✅ `generate_images.py` (redan skapat)

---

## 🚀 STARTA BILDGENERERING

### **STEG 1: Öppna ComfyUI Desktop**
- Starta ComfyUI Desktop-appen
- **Låt den köra i bakgrunden** (viktigt!)
- Du behöver inte göra något i webUI

### **STEG 2: Öppna Terminal/CMD**

#### **Windows (CMD):**
```bash
# Navigera till projektmappen
cd C:\Users\leond_lovhs05\.vscode\.Net\.VSCODE\karlacleaningcrew

# Kör scriptet
python generate_images.py
```

#### **Mac/Linux:**
```bash
cd /path/to/karlacleaningcrew
python3 generate_images.py
```

### **STEG 3: Vänta på bilderna**

Du ser något like:
```
============================================================
🎨 Karla Cleaning Crew - Image Generator
============================================================

📡 Kontrollerar ComfyUI-anslutning...
✅ ComfyUI ansluten på http://127.0.0.1:8188

📂 Laddar prompts...
✅ Laddat 20 bilder från images_prompts.json

📁 Output-mapp: C:\...\output\generated_images

🚀 Genererar 20 bilder...

[1/20] Genererar: startsida_hero... ✅
[2/20] Genererar: startsida_trygghet... ✅
[3/20] Genererar: startsida_kvalitet... ✅
...
```

**Varje bild tar ~2-5 minuter** (beroende på din GPU)

---

## ⚙️ INSTÄLLNINGAR

### Om du vill ändra något:

**Öppna `generate_images.py` och ändra:**

```python
# Ändra ComfyUI URL (om du använder annan port)
COMFYUI_URL = "http://127.0.0.1:8188"

# Ändra output-mapp
OUTPUT_DIR = "output/generated_images"

# Ändra AI-modell (i build_workflow-funktionen)
"ckpt_name": "sd_xl_base_1.0.safetensors"  # Byt till annan .safetensors modell
```

---

## 🐛 FELSÖKNING

### **FEL 1: "Can not connect to ComfyUI"**
```
❌ ANSLUTNINGSFEL: Kan inte ansluta till ComfyUI på http://127.0.0.1:8188
```

**Lösning:**
1. ✅ Starta ComfyUI Desktop
2. ✅ Vänta tills den är fullt igång
3. ✅ Försök igen

---

### **FEL 2: "FileNotFoundError: images_prompts.json"**
```
❌ FEL: Kan inte hitta images_prompts.json
```

**Lösning:**
- Kontrollera att `images_prompts.json` finns i samma mapp som `generate_images.py`
- Kör scriptet **FRÅN samma mapp** där JSON-filen ligger

---

### **FEL 3: "Permission denied" (Mac/Linux)**
```
bash: ./generate_images.py: Permission denied
```

**Lösning:**
```bash
# Gör scriptet körbart
chmod +x generate_images.py

# Kör sedan
python3 generate_images.py
```

---

### **FEL 4: Bilden tar för lång tid / "TIMEOUT"**

**Lösning:**
- Öka TIMEOUT i scriptet (rad ~17):
```python
TIMEOUT = 600  # 10 minuter istället för 5
```

---

## 📁 VAR SPARAS BILDERNA?

Alla färdiga bilder sparas här:
```
karlacleaningcrew/output/generated_images/
```

**Filnamn exempel:**
```
startsida_hero_00001_.png
startsida_trygghet_00001_.png
hemstadning_hero_00001_.png
... (alla 20 bilder)
```

---

## 🎯 NÄSTA STEG

1. **Kör scriptet** och generera bilderna
2. **Kontrollera bilderna** i `output/generated_images/`
3. **Om du är nöjd:** Kopiera bilderna till `/public/images/services/`
4. **Om du är inte nöjd:** Ändra prompts i `images_prompts.json` och kör igen

---

## 💡 TIPS

- **Första körningen:** Kan ta 1-2 timmar för alla 20 bilder
- **Senare körningar:** Snabbare pga caching
- **GPU:** Använder din dator GPU om den finns, annars CPU
- **Flera körningar:** Du kan köra scriptet flera gånger och välja de bästa bilderna

---

## 📞 BEHÖVER DU HJÄLP?

Om något går fel:
1. Läs **FELSÖKNING** ovan
2. Kontrollera att ComfyUI Desktop kör
3. Försök igen

**Eller:** Ge mig exakt felmeddelande så kan jag fixa det!

---

## 🔄 OM DU VILL ÄNDRA PROMPTS

1. Öppna `images_prompts.json`
2. Ändra "prompt"-fältet för vilken bild du vill
3. Spara
4. Kör scriptet igen

**Exempel:**
```json
{
  "name": "startsida_hero",
  "prompt": "Din nya prompt här...",
  "negative_prompt": "blurry, dark, messy...",
  "resolution": "1920x1080"
}
```

---

**Lycka till!** 🚀

