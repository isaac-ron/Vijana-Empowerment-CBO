---
name: reference-refined-design
description: Pointer to Stitch-exported HTML designs in refined_design/ — source of truth for page UI
metadata:
  type: reference
---

# Refined design HTML exports

Location: `refined_design/`

Each subfolder contains `code.html` (full HTML for the page) and `screen.png` (rendered preview).

## Pages
- `homepage_vijana_empowerment_initiative_refined/` → homepage `/`
- `training_programs_vijana_empowerment_initiative_refined/` → programs index `/programs`
- `vijana_fashion_forge_fashion_design_program_refined/` → `/programs/fashion-and-design`
- `glow_with_vijana_beauty_therapy_program_refined/` → `/programs/beauty-therapy`
- `vijana_wheels_driving_mechanics_program_refined/` → `/programs/driving-mechanics`
- `vijana_digital_hub_computer_training_program_refined/` → `/programs/computer-training`
- `our_impact_vision_vijana_empowerment_initiative_refined/` → `/about` or `/impact`
- `impact_success_stories_vijana_empowerment_initiative_refined/` → `/impact`
- `get_involved_support_vijana_empowerment_initiative_refined/` → `/get-involved`

Plus `refined_design/DESIGN.md` — see [[design-system-unity-growth]].

## How to apply
When asked to build/modify a page, read the corresponding `code.html` to mirror layout, copy, and components into Next.js. The HTML uses Tailwind utility classes directly.
