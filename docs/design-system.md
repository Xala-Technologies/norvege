# NORVEGE MINERALS AS - Design System

## Color System

### Strategic Design System (60-30-10 Rule)

Professional, industrial, and trustworthy color palette based on the 60-30-10 rule:

- **60% Neutral (White/Light Grey)**: For space and readability
- **30% Primary Brand (Deep Navy)**: For structure, headers, and heavy visual weight
- **10% Accent (Mustard Gold)**: For Call-to-Actions (CTAs), highlights, and data points

### Primary Colors

```css
:root {
  /* Primary Brand - Deep Navy (30% of UI) */
  --color-navy-deep: #183058;
  --color-navy-900: #183058;
  --color-navy-800: #1a3a6a;
  --color-navy-700: #1d4a7c;

  /* Action / Accent - Mustard Gold (10% of UI) */
  --color-gold-mustard: #dfa044;
  --color-gold-500: #dfa044;
  --color-gold-600: #c8903a;
  --color-gold-400: #e8b05a;

  /* Text - Black */
  --color-text-dark: #0d0e10;
  --color-text-black: #0d0e10;

  /* Background - Pure White (60% of UI) */
  --color-white: #ffffff;
  --color-bg-white: #ffffff;

  /* Surface - Ice Blue Grey */
  --color-surface-ice: #f0f4f8;
  --color-surface-50: #f0f4f8;

  /* Neutral Grays - Clean backgrounds (60% of UI) */
  --color-gray-50: #fafafa;
  --color-gray-100: #f5f5f5;
  --color-gray-200: #e5e5e5;
  --color-gray-300: #d4d4d4;
  --color-gray-400: #a3a3a3;
  --color-gray-500: #737373;
  --color-gray-600: #525252;
  --color-gray-700: #404040;
  --color-gray-800: #262626;
  --color-gray-900: #171717;

  /* Dark backgrounds - Black for footer/exploration sections */
  --color-charcoal-950: #0d0e10;
  --color-charcoal-900: #0d0e10;
  --color-charcoal-800: #1a1a1a;
  --color-charcoal-700: #2a2a2a;
  --color-charcoal-600: #353535;

  /* Legacy Orange mappings - Redirected to Mustard Gold */
  --color-orange-bright: #dfa044;
  --color-orange-soft: #e8b05a;
  --color-orange-light: #f0c070;
  --color-orange-dark: #c8903a;

  /* Green - Success & growth (kept for semantic use) */
  --color-green-live: #68d388;
  --color-green-light: #c2edda;
  --color-green-dark: #4fb86a;
  --color-green-soft: #9ae5b8;

  /* Semantic Colors */
  --color-success: #68d388;
  --color-info: #dfa044;
  --color-warning: #dfa044;
  --color-error: #ef4444;
}
```

### Color Usage Guidelines

#### Navigation Bar

- **Background**: Deep Navy (`#183058`)
- **Logo**: White/gold version
- **Links**: White text (`#FFFFFF`)
- **Hover State**: Mustard Gold (`#DFA044`)

#### Hero Section

- **Overlay**: Deep Navy gradient overlay (40-80% opacity)
- **Headline**: White
- **Sub-headline**: Light Grey (`#E2E8F0`)
- **CTA Button**: Mustard Gold background, Deep Navy text

#### Stats & Cards

- **Card Background**: Deep Navy (`#183058`)
- **Big Numbers**: Mustard Gold (`#DFA044`)
- **Icons**: Mustard Gold
- **Label Text**: White
- **Active Card**: White background, Deep Navy text, Mustard Gold border

#### Data Visualization

- **Progress Bars**: Deep Navy background track, Mustard Gold filled percentage
- **Icons**: Flat Mustard Gold icons
- **Highlight Cards**: Deep Navy background with Gold text

#### Exploration Areas

- **Section Background**: Black (`#0D0E10`)
- **Card Tags**: Mustard Gold
- **"Learn More" Links**: Mustard Gold with arrow icon

#### Form & Contact

- **Section Background**: Deep Navy (`#183058`)
- **Form Container**: White background
- **Input Fields**: White background, Blue-Grey border, Mustard Gold focus border
- **Submit Button**: Mustard Gold background, Deep Navy text

#### Footer

- **Background**: Black (`#0D0E10`)
- **Text**: Light Grey
- **Social Icons**: White by default, Mustard Gold on hover

### Legacy Color Mappings (Backward Compatibility)

For backward compatibility, old color names map to new colors:

- `--color-navy-*` → Deep Navy colors
- `--color-sand-*` → `--color-gray-*`
- `--color-copper-*` → `--color-gold-*` (Mustard Gold)
- `--color-slate-*` → `--color-green-*`

## Typography

### Font Families

- **Headings**: Inter (sans-serif) - modern, strong, professional
- **Body**: Inter (sans-serif) - high readability

### Font Scale

```css
/* Headings */
.h1 {
  font-size: 3.5rem; /* 56px */
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.h2 {
  font-size: 2.5rem; /* 40px */
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.h3 {
  font-size: 2rem; /* 32px */
  line-height: 1.25;
  font-weight: 600;
}

.h4 {
  font-size: 1.5rem; /* 24px */
  line-height: 1.3;
  font-weight: 600;
}

.h5 {
  font-size: 1.25rem; /* 20px */
  line-height: 1.4;
  font-weight: 600;
}

.h6 {
  font-size: 1rem; /* 16px */
  line-height: 1.5;
  font-weight: 600;
}

/* Body Text */
.body-large {
  font-size: 1.125rem; /* 18px */
  line-height: 1.7;
}

.body {
  font-size: 1rem; /* 16px */
  line-height: 1.6;
}

.body-small {
  font-size: 0.875rem; /* 14px */
  line-height: 1.5;
}
```

### Typography Hierarchy

- **H1 / Headlines**: Deep Navy (on light backgrounds) or White (on dark backgrounds)
- **Eyebrows (Small text above headlines)**: Mustard Gold
- **Body Text**: Dark Grey (never pure black on white, it causes eye strain)

### Mobile Typography Scale

```css
@media (max-width: 768px) {
  .h1 {
    font-size: 2.5rem;
  } /* 40px */
  .h2 {
    font-size: 2rem;
  } /* 32px */
  .h3 {
    font-size: 1.5rem;
  } /* 24px */
  .h4 {
    font-size: 1.25rem;
  } /* 20px */
}
```

## Spacing & Layout

### Section Padding

```css
/* Desktop */
--section-padding-y: 6rem; /* 96px */
--section-padding-x: 2rem; /* 32px */

/* Mobile */
@media (max-width: 768px) {
  --section-padding-y: 3rem; /* 48px */
  --section-padding-x: 1rem; /* 16px */
}
```

### Content Width

```css
--content-max-width: 1280px; /* max-w-6xl */
--content-narrow: 896px; /* max-w-4xl */
--content-wide: 1536px; /* max-w-7xl */
```

### Grid System

- Standard grid: 12 columns
- Gap: 1.5rem (24px) on desktop, 1rem (16px) on mobile
- Card grids: 3 columns on desktop, 2 on tablet, 1 on mobile

## Component Tokens

### Border Radius

```css
--radius-sm: 0.375rem; /* 6px */
--radius-md: 0.5rem; /* 8px */
--radius-lg: 0.75rem; /* 12px */
--radius-xl: 1rem; /* 16px */
--radius-pill: 9999px;
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

### Focus Styles

```css
--focus-ring: 2px solid var(--color-gold-mustard);
--focus-offset: 2px;
```

### Animation Tokens

```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;

--easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
--easing-decelerate: cubic-bezier(0, 0, 0.2, 1);
--easing-accelerate: cubic-bezier(0.4, 0, 1, 1);
```

## Usage Guidelines

### Background Patterns

- **Hero sections**: Deep Navy (`--color-navy-deep`) with Deep Navy gradient overlay
- **Content sections**: Alternating white and Ice Blue Grey (`--color-surface-ice`)
- **Exploration sections**: Black (`--color-text-black`)
- **Footer**: Black (`--color-text-black`)

### Text Colors

- **On dark backgrounds**: White or light grey
- **On light backgrounds**: Deep Navy or dark grey
- **Accent text**: Mustard Gold for links, highlights, and eyebrow text

### Interactive Elements

- **Primary buttons**: Mustard Gold background, Deep Navy text
- **Secondary buttons**: Transparent with Mustard Gold border
- **Hover states**: Slight scale (1.02) + shadow increase, color change to Mustard Gold
- **Active states**: Scale (0.98)

### Cards

- Background: White or Deep Navy (depending on context)
- Border: 1px solid gray-200 or Mustard Gold (for active cards)
- Radius: --radius-lg
- Shadow: --shadow-md
- Hover: --shadow-lg + slight lift

### Gradients

- Avoid gradients on Mustard Gold - keep it flat and solid to look like solid metal
- Can use subtle gradient on Deep Navy (from `#183058` to `#0D0E10`) to add depth

### Glow Effects

- Change all red/orange glows to soft Mustard Gold
- Creates "Golden Hour" lighting effect that feels valuable and aligned with minerals/mining

## Accessibility

### Contrast Ratios

All text must meet WCAG AA standards:

- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Interactive elements: 3:1 minimum

### Motion

Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
