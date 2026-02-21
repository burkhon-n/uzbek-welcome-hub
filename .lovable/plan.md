

## Plan: URL-Based Language Switching + Build Fix

### Build Fix (Manual Step Required)
You need to manually add `"build:dev": "vite build --mode development"` to the `scripts` section in `package.json`. Open `package.json`, find the `"scripts"` block, and add this line.

### URL-Based Language Routing

**Current behavior:** Language is stored in React state/localStorage. URL is always `/`.

**New behavior:** `/ru` shows Russian, `/uz` shows Uzbek, `/` redirects to `/ru`.

### Changes

**1. `src/App.tsx`** -- Update routes to use `/:lang` parameter:
- Add route `/:lang` pointing to `Index`
- Add route `/` that redirects to `/ru`
- Remove the old `/` route for Index

**2. `src/contexts/LanguageContext.tsx`** -- Sync language with URL:
- Use `useParams()` to read the `:lang` param from the URL
- Use `useNavigate()` to update the URL when `setLanguage` is called (e.g., navigating from `/ru` to `/uz`)
- Remove localStorage-based persistence (URL is now the source of truth)
- Wrap `LanguageProvider` to require being inside a `<BrowserRouter>`

**3. `src/components/landing/Header.tsx`** -- Update language switcher and nav links:
- Language buttons call `setLanguage()` which now navigates to the new URL
- Update anchor links (e.g., `#about`) to stay relative to the current language route

### Technical Details

```text
URL Structure:
  /        --> redirect to /ru
  /ru      --> Russian version
  /uz      --> Uzbek version
  /ru#faq  --> Russian version, scrolled to FAQ
```

The `LanguageProvider` will be moved inside `BrowserRouter` (or receive the lang param as a prop) so it can access router context. The `setLanguage` function will call `navigate('/{newLang}')` to switch URLs while preserving hash fragments.
