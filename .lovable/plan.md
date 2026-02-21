

## Plan: Fix Build, Restore FAQ to 5 Questions, and Update Content from Packaging

### 1. Fix Build Error
Add the missing `build:dev` script to `package.json`:
```json
"build:dev": "vite build --mode development"
```

### 2. Restore FAQ to 5 Questions
Reduce FAQ from 9 items back to 5 in both `FAQSection.tsx` and `LanguageContext.tsx`. Keep the most useful 5:
- What is Ferfer?
- How to take it?
- What are contraindications?
- Can pregnant women take it?
- Is Ferfer a medicine?

Remove questions 6-9 (package count, side effects, storage, manufacturer -- this info is already covered in About section and the instructions modal).

### 3. Update Translations with Accurate Packaging Data
Based on the uploaded packaging photos, I extracted the following verified details to ensure all content is accurate and non-repetitive:

**From Russian insert (IMG_1072):**
- Composition: Iron 14mg, Vitamin C 80mg, Vitamin B12 2.5mcg per 1.5g sachet
- Iron properties: energy metabolism, oxygen transport, hemoglobin formation, cell division, pregnancy planning, immune system
- Vitamin C: supports immune function, protects from oxidative stress, helps iron absorption
- Vitamin B12: red blood cell formation, reduces fatigue, nerve/immune system, cell division, energy metabolism
- Contraindications: sensitivity to iron salts, ascorbic acid, B12; hemosiderosis, hemochromatosis, non-iron-deficiency anemia; hyperoxaluria
- Side effects: GI tract issues (nausea, constipation, diarrhea, epigastric pain, cramping) -- reduced due to liposomal form
- Special instructions: not a medicine; pregnant/nursing consult doctor; children under 6 -- severe poisoning risk from iron supplements; keep out of reach of children; in case of overdose contact doctor
- Shelf life: 2 years
- Packaging: 30 sachets, 1.5g each
- Manufacturer: PharmEvo (Pvt.) Ltd., Nutraceutical Division, Plot No. A-29, North Western Industrial Zone, Port Qasim, Karachi-75020, Pakistan. www.pharmevo.biz
- Halal certified
- Orange flavor
- Dosage: adults 14+ years, 1-2 sachets/day, take powder without mixing in water

**From Uzbek insert (IMG_1073):**
- Same data in Uzbek language, confirmed consistent

**From box (IMG_1074-1078):**
- "Tez ta'sir qiluvchi temir" (Fast-acting iron)
- "Innovatsion mikrokapsulala texnologiyasi" 
- "Og'izda tez eriydi" (Quickly dissolves in mouth)
- "BFQ dori vositasi hisoblanmaydi" (Food supplement, not a medicine)
- "Apelsin ta'mli" (Orange flavor)
- "Ferfer PharmEvo savdo belgisi ostida ro'yxatdan o'tgan" (registered trademark)

### Technical Changes

**File: `package.json`** -- Add `build:dev` script

**File: `src/contexts/LanguageContext.tsx`** -- Minor content refinements to remove any remaining repetition between sections. Ensure About focuses on composition/form, Benefits on liposomal technology advantages, and FAQ on practical user questions only.

**File: `src/components/landing/FAQSection.tsx`** -- Reduce `faqs` array from 9 items to 5 items.

