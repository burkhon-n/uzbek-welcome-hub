

# Rewrite Instructions Based on Official Documents

## Analysis Summary

I analyzed both uploaded official instruction documents and compared them with the current website content. Here are the key differences found:

### Current vs Official Content Comparison

| Section | Current Website | Official Document | Status |
|---------|----------------|-------------------|--------|
| Composition | Iron 14mg, Vit C 80mg, B12 2.5mcg | Same values | Correct |
| Auxiliary substances | Not shown | Maltodextrin, mannitol, anhydrous dextrose, orange flavor durarom, sucralose | Missing |
| Properties section | Not shown | Detailed iron, Vitamin C, B12 benefits | Missing |
| Indications | Simplified text | Detailed liposomal technology explanation | Needs update |
| Dosage | "Adults 14+" | "Adults 1-2 sachets/day" (no age restriction) | Needs update |
| Contraindications | General text | Specific: iron salts sensitivity, hemosiderosis, hemochromatosis, hyperoxaluria | Needs update |
| Side effects | Not shown | Detailed list with note about reduced frequency | Missing |
| Special instructions | Not shown | BAD warning, pregnancy planning, children warning, overdose | Missing |
| Storage | "25C" | "30C" (official) | Needs update |
| Manufacturer | Not shown | PharmEvo (Pvt). Ltd., Pakistan | Missing |

### Note on Uzbek Document
The Uzbek document shows Iron as 40mg (likely a typo) vs 14mg in Russian. I will use the Russian document values as the authoritative source.

---

## Implementation Plan

### Step 1: Update Translation Keys in LanguageContext

Add new sections and update existing content based on official documents:

**New keys to add:**
- `hero.instructions.auxiliarySubstances` - Auxiliary ingredients
- `hero.instructions.auxiliarySubstancesText` - Maltodextrin, mannitol, etc.
- `hero.instructions.properties` - Properties section header
- `hero.instructions.ironProperties` - Iron benefits (6 bullet points)
- `hero.instructions.vitaminCProperties` - Vitamin C benefits (3 points)
- `hero.instructions.vitaminB12Properties` - B12 benefits (5 points)
- `hero.instructions.sideEffects` - Side effects section
- `hero.instructions.sideEffectsText` - Detailed side effects info
- `hero.instructions.specialInstructions` - Special instructions
- `hero.instructions.specialInstructionsText` - BAD warning, usage guidelines
- `hero.instructions.manufacturer` - Manufacturer section
- `hero.instructions.manufacturerText` - PharmEvo details

**Keys to update with official content:**
- `hero.instructions.compositionText` - Keep current (correct)
- `hero.instructions.indicationText` - Update with liposomal technology details
- `hero.instructions.dosageText` - "1-2 sachets/day or as directed by doctor, without water"
- `hero.instructions.contraindicationsText` - Add specific medical conditions
- `hero.instructions.storageText` - Change to 30C, add light/heat/moisture protection

### Step 2: Update HeroSection Modal Layout

Reorganize the instructions modal to include all new sections:

```text
Modal Structure:
1. Title: Instructions for Use
2. Composition (current)
3. Auxiliary Substances (new)
4. Properties (new - collapsible or bullet points)
   - Iron properties
   - Vitamin C properties  
   - Vitamin B12 properties
5. Indications (updated)
6. Dosage (updated)
7. Contraindications (updated)
8. Side Effects (new)
9. Special Instructions (new)
10. Storage (updated)
11. Shelf Life | Package (current layout)
12. Manufacturer (new)
```

---

## Technical Details

### Files to Modify

| File | Changes |
|------|---------|
| `src/contexts/LanguageContext.tsx` | Add 12+ new translation keys, update 5 existing keys for both RU and UZ |
| `src/components/landing/HeroSection.tsx` | Expand modal with new sections, improve layout for more content |

### Translation Content (Russian - from official document)

**Состав:**
- Железо (в виде пирофосфат железа) — 14 мг
- Витамин С — 80 мг  
- Витамин В12 — 2,5 мкг

**Вспомогательные вещества:**
Мальтодекстрин, маннит, декстроза безводная, дюраром со вкусом апельсина и сукралоза.

**Свойства Железа:**
- поддерживает стабильный энергетический метаболизм
- способствует нормальному транспорту кислорода в организме
- способствует образованию гемоглобина
- принимает участие в функции деления клеток
- при планировании беременности
- поддерживает оптимальное функционирование иммунной системы

**Противопоказания (official):**
Повышенная чувствительность к солям железа, аскорбиновой кислоте (витамин С) или любой форме витамина В12. Гемосидероз, гемохроматоз или анемии, отличные от железодефицитной анемии. Гипероксалурия.

**Способ применения:**
Дозировка для взрослых 1-2 саше в день или по назначению врача. Принимать без воды. Откройте 1 пакетик и положите в рот, не растворяя его в воде.

**Условия хранения:**
Храните в недоступном для детей месте. Защищайте от света, тепла и влаги. Хранить при температуре ниже 30°C.

**Особые указания:**
Биологически активная добавка, не являющаяся лекарственным средством. Используйте в соответствии с рекомендациями врача. Не превышайте рекомендуемую суточную дозу. Храните в недоступном для детей месте. Беременные и кормящие женщины должны проконсультироваться с врачом перед применением.

**Производитель:**
PharmEvo (Pvt). Ltd. (Nutraceutical Division), Pakistan

---

## Summary

This update will align the website instructions exactly with the official product documentation, adding:
- Complete auxiliary ingredients list
- Detailed properties for each active ingredient
- Accurate medical contraindications
- Side effects information with liposomal advantage note
- Special usage instructions and warnings
- Correct storage temperature (30C)
- Manufacturer information

