
# Scroll-Responsive Header with Dynamic Logo

## Overview

Create a header that transforms based on scroll position:
- **At top (page just opened)**: Header blends into hero section with a 2x larger logo, no background/border
- **After scrolling**: Header shrinks to current compact form with solid background

## Technical Approach

### Scroll Detection
Add a scroll event listener that tracks the scroll position and updates state when crossing a threshold (e.g., 50px).

### Dynamic Styling
Apply conditional classes based on scroll state:
- **At top**: Transparent background, no border, larger height, 2x logo size
- **Scrolled**: Current styling with background blur, border, compact height

## Implementation Details

### File: `src/components/landing/Header.tsx`

**Add scroll state tracking:**
```text
- Add useState for isScrolled (boolean)
- Add useEffect with scroll event listener
- Set isScrolled = true when scrollY > 50
- Clean up listener on unmount
```

**Dynamic header container classes:**

| State | Background | Border | Height |
|-------|-----------|--------|--------|
| At top | `bg-transparent` | None | `h-24 md:h-28` |
| Scrolled | `bg-background/95 backdrop-blur-md` | `border-b border-border/30` | `h-16 md:h-20` |

**Dynamic logo sizing:**

| State | Logo Height |
|-------|-------------|
| At top | `h-40` (2x current h-20) |
| Scrolled | `h-20` (current) |

**Smooth transitions:**
Add `transition-all duration-300` to header and logo for smooth animation between states.

### Code Structure

```text
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Header classes
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled 
    ? 'bg-background/95 backdrop-blur-md border-b border-border/30' 
    : 'bg-transparent'
}`}

// Container height
className={`flex items-center justify-between transition-all duration-300 ${
  isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-28'
}`}

// Logo size
className={`transition-all duration-300 ${
  isScrolled ? 'h-20' : 'h-40'
} w-auto`}
```

## Visual Behavior

```text
Page Load (scroll = 0)
+--------------------------------------------------+
|  [LARGE LOGO]           Nav Links      UZ | RU   |
|                                                  |
|     (transparent, no border, tall header)        |
+--------------------------------------------------+
|                                                  |
|              HERO CONTENT                        |
|                                                  |

After Scroll (scroll > 50px)
+--------------------------------------------------+
| [logo]    Nav Links                    UZ | RU   |  <- compact, blurred bg
+--------------------------------------------------+
|                                                  |
|              PAGE CONTENT                        |
```

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/landing/Header.tsx` | Add scroll listener, dynamic classes for header container, height, and logo size |
