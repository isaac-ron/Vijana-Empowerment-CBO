---
name: design-system-unity-growth
description: Vijana CBO design system — colors (deep red/burnt orange/amber), Manrope+Inter typography, pill shapes, 8px rhythm
metadata:
  type: project
---

# Design System: "Unity & Growth"

Defined in `refined_design/DESIGN.md` — Stitch-exported design system for the Vijana CBO site.

## Brand Personality
Empowering, Transparent, Vibrant. Modern Corporate with Tactile warmth. Avoid "charity" tropes — favor "partnership" and "innovation."

## Color Palette (Material-style tokens)
- **Primary (Deep Red):** `#790506` — main CTAs ("Donate Now", "Apply for Training"), branding, authority
- **Secondary (Burnt Orange):** `#9d4400` (container `#fd7c28`) — impact metrics, active states, secondary CTAs
- **Tertiary (Warm Amber):** `#4d3600` (container `#6b4b00`, on-container `#fcb812`) — accents, data viz, motivational UI
- **Background/Surface:** `#fbf9f5` (warm bone white)
- **Surface containers:** white `#ffffff` to `#e4e2de` (low → highest)
- **On-surface text:** `#1b1c1a` / variant `#59413e`
- **Outline:** `#8d716d` / variant `#e0bfba`
- **Error:** `#ba1a1a` / container `#ffdad6`

## Typography (dual-font)
- **Manrope** (headings, geometric, tech-forward): display-lg 48/56 800, headline-md 32/40 700, headline-sm 24/32 700
- **Inter** (body & labels, screen-optimized): body-lg 18/28, body-md 16/24, label-md 14/20 600, label-sm 12/16 500
- Mobile display: 36/44

## Layout & Spacing
- **12-column** desktop grid / **4-column** mobile
- **8px rhythm** for all spacing (4px micro)
- **Container max:** 1280px
- **Gutter:** 24px
- **Margins:** desktop 40px, tablet 24px, mobile 16px

## Shape
- **Pill-shaped** language. Standard radius **1rem (16px)** for buttons/inputs; large radius **2rem** for cards; **9999px (pill)** for tags/chips/search.

## Elevation
Tonal layers + soft ambient shadows. Cards on white (`#ffffff`) pop against bone-white background. Hover: shadow deepens + 2px lift. Overlays use desaturated backdrop blur.

## Components
- **Buttons:** Primary = deep red bg / white text. Secondary = transparent / 2px burnt orange border. Tertiary/Ghost = no border, neutral text.
- **Program Cards:** 16:9 top image, Manrope headline, Inter body, secondary-colored chip for impact stats.
- **Input Fields:** 1rem radius, 1px neutral border, 2px burnt orange glow on focus.
- **Lists:** Custom bullets = small secondary-colored circles or checkmarks.

## Why
Design tokens and brand decisions are fixed by the Stitch export. They override default Tailwind/shadcn defaults.

## How to apply
When building components, pull these tokens into `globals.css` / Tailwind theme. Use the exact hex values. Never use pure white as page background — use bone white `#fbf9f5`. See [[project-vijana-overview]] for content/copy context.
