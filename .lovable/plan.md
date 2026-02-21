

## Plan: Add Trade Name as Title in Instructions Modal + Fix Build

### Changes

**1. `package.json`** -- Add missing build script:
```json
"build:dev": "vite build --mode development"
```

**2. `src/components/landing/HeroSection.tsx`** -- Replace the current DialogTitle with the trade name "Ferfer® (Ферфер)" displayed prominently as the modal title, and move the current generic title (e.g. "Инструкция по применению") to a subtitle below it:

```tsx
<DialogHeader>
  <DialogTitle className="text-xl font-bold text-primary">
    Ferfer® (Ферфер)
  </DialogTitle>
  <p className="text-sm text-muted-foreground">
    {t('hero.instructions.title')}
  </p>
</DialogHeader>
```

**3. `src/contexts/LanguageContext.tsx`** -- No changes needed since `hero.instructions.title` already exists and will now serve as the subtitle. The trade name "Ferfer® (Ферфер)" is universal across both languages so it can be hardcoded directly.

