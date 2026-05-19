---
name: Unity & Growth
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#59413e'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#8d716d'
  outline-variant: '#e0bfba'
  surface-tint: '#ae3027'
  primary: '#790506'
  on-primary: '#ffffff'
  primary-container: '#9b221b'
  on-primary-container: '#ffb0a6'
  inverse-primary: '#ffb4aa'
  secondary: '#9d4400'
  on-secondary: '#ffffff'
  secondary-container: '#fd7c28'
  on-secondary-container: '#5f2600'
  tertiary: '#4d3600'
  on-tertiary: '#ffffff'
  tertiary-container: '#6b4b00'
  on-tertiary-container: '#fcb812'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#8c1712'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#331100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#ffdea7'
  tertiary-fixed-dim: '#ffbb1e'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4200'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is built to bridge the gap between local grassroots energy and international institutional professionalism. The brand personality is **Empowering, Transparent, and Vibrant**, reflecting the resilience and potential of Kenyan youth. 

We utilize a **Modern Corporate** style with a **Tactile** warmth. This is achieved through a generous use of whitespace, high-quality photography of community impact, and a sophisticated color palette that feels grounded in the earth yet aspirational. The visual language avoids "charity" tropes in favor of "partnership" and "innovation," using clean lines and structured layouts to instill confidence in donors while maintaining an accessible, welcoming feel for program participants.

## Colors

The palette is derived directly from the initiative’s logo, representing the Kenyan landscape and the warmth of community.

- **Primary (Deep Red):** Used for primary actions, critical branding elements, and authoritative headers. It conveys strength and heritage.
- **Secondary (Burnt Orange):** Used for highlighting impact metrics, active states, and secondary calls to action.
- **Tertiary (Warm Amber):** Reserved for accent details, data visualization categories, and motivational UI elements.
- **Neutrals:** We use a "Bone White" (#FDFBF7) for backgrounds and neutral surfaces. This creates a cleaner, more luminous canvas that allows the primary colors to pop while maintaining a subtle warmth that avoids the sterility of pure white.
- **Semantic Colors:** Success (Emerald), Warning (Amber), and Error (Crimson) should be balanced to match the vibrancy of the primary palette.

## Typography

This design system uses a dual-font strategy to balance character with utility.

- **Manrope (Headings):** Selected for its modern, geometric construction and excellent legibility. It provides a professional, "tech-forward" feel to titles and headlines. Use Bold (700) or ExtraBold (800) for display levels to create a strong visual hierarchy.
- **Inter (Body & Labels):** A highly functional typeface designed for screen readability. It is used for all long-form text, UI labels, and data points. Its neutral tone ensures that the content remains the focus.

**Scaling Rules:** Headlines should use tighter letter-spacing to appear more cohesive, while small labels should use increased tracking (letter-spacing) to ensure clarity on mobile devices.

## Layout & Spacing

The design system employs a **12-column Fluid Grid** for desktop and a **4-column Fluid Grid** for mobile. 

- **The 8px Rhythm:** All spacing (padding, margins, gaps) must be a multiple of 8px (or 4px for micro-adjustments). This ensures a consistent vertical cadence across all pages.
- **Layout Model:** Use a fixed-width container (max 1280px) for text-heavy content to maintain optimal line lengths for readability. Use full-width sections for impact visuals and gallery components.
- **Responsive Behavior:** On tablet, gutters should remain consistent at 24px, but side margins should reduce to 24px. On mobile, margins reduce to 16px to maximize real estate for impact storytelling.

## Elevation & Depth

We utilize **Tonal Layers** and **Soft Ambient Shadows** to create a sense of organized depth without looking cluttered.

- **Surface Levels:** The base background is the warm Bone White. Cards and containers use pure white (#FFFFFF) to pop against the background.
- **Shadow Profile:** Shadows should be extremely subtle, using a muted neutral color with very low opacity to maintain an organic, grounded feel.
- **Interactive Depth:** When a user hovers over a "Program Card," the shadow should slightly deepen, and the element should lift by 2px to provide tactile feedback.
- **Overlays:** Modals and navigation drawers use a desaturated backdrop blur (glassmorphism) to keep the context of the community images visible while focusing the user's attention.

## Shapes

The shape language is **Pill-shaped**, conveying a high degree of friendliness, accessibility, and modern energy.

- **Standard Radius:** 1rem (16px) for buttons, inputs, and small components to create a soft, inviting interface.
- **Large Radius:** 2rem (32px) for cards and feature containers.
- **Pill Shapes:** Used for tags, status indicators (chips), and search bars to maximize the approachable character of the brand.
- **Visual Motif:** Subtle use of circular "shutter" patterns (inspired by the logo) can be used as background watermarks or image masks to reinforce brand identity.

## Components

### Buttons
- **Primary:** Deep Red background with White text. Use for the main call to action (e.g., "Donate Now", "Apply for Training").
- **Secondary:** Transparent background with a 2px Burnt Orange border.
- **Tertiary/Ghost:** No border, Neutral text, used for less critical navigation.

### Cards
- **Program Cards:** Feature a top-aligned image with a 16:9 aspect ratio, a Manrope headline, and a short Inter body description. Impact stats (e.g., "500+ Trained") should be highlighted in a secondary-colored chip.
- **Donor Cards:** Minimalist, focused on transparency and "where the money goes" with clear progress bars.

### Data Visualization
- **Charts:** Use the primary, secondary, and tertiary colors as the main data sequences. Background grid lines should be very faint light grey or the neutral background shade.
- **Impact Counters:** Large Display-sized Manrope numbers with small Inter labels underneath to celebrate organizational milestones.

### Input Fields
- High roundedness (1rem), 1px neutral border. Focus state should use a 2px Burnt Orange glow to indicate activity without being as aggressive as the Primary Red.

### Lists
- Use custom bullet points in the shape of small secondary-colored circles or checkmarks to maintain the brand’s vibrant feel in text-heavy training modules.