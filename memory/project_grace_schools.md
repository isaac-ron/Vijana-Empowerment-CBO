---
name: project-grace-schools
description: User is planning a second client project — rebuild of The Grace Schools Chepilat website
metadata:
  type: project
---

# Second client project: The Grace Schools Chepilat

The user is leading development on a second site alongside [[project-vijana-overview]] — **The Grace Schools Chepilat** (current site: `thegraceschools.com`).

## What I know
- Mixed-level school (Lower Primary through Junior Secondary)
- Likely faith-based (name)
- Both day and boarding
- Located in Chepilat, likely Kenya
- The existing site is a custom PHP application with three portals (student / teacher / staff/admin) that the user described as "very ugly and unoptimized"
- The user wants to "optimize and refine" around the existing site with some additions
- Planned hosting: **HostPinnacle Starter** (Kenyan shared cPanel hosting) — Starter package allows ~4 add-on domains, enough room for both Vijana and Grace Schools

## Existing site features observed (as of 2026-05-19 fetch)
- Pages: Home, About (Our Story, Mission/Vision/Motto, Administration), CBC Curriculum (Lower Primary, Upper Primary, Junior School), Resources, Student Portal, Staff Portal (Management, Staff), Contact Us, Enquiries, Apply Now
- Visual content: feature cards (teaching staff, recording studio, playgrounds, computer lab, transport, boarding); 2026 admissions push; computer-packages training section
- Forms: `enquiry.html`, `apply_now.html`
- PHP portals: `student/index.php`, `admin/index.php`, `teacher/index.php`
- Content gaps: no fees, no news/blog, no events calendar, no testimonials, no staff directory

## Why
The user explicitly delegated this project to me starting the evening of 2026-05-19. Hosting is constrained to HostPinnacle Starter (PHP-friendly, cannot run Next.js servers natively) — same constraint that pushes Vijana toward Cloudflare Pages / Vercel.

## Stakeholders
- **Client:** practically the same as Vijana CBO (Ron Isaac coordinates both).
- **Portal information source:** the school's **Head of IT services** — the user is liaising with him to surface portal usage, codebase access, and migration constraints before we finalize stack.

## Status as of 2026-05-19
- Plan is on hold pending IT-side answers about: portal active usage, data shape, codebase access (git/zip), DB dump availability, hosting, password-hashing scheme, integrations (SMS / M-Pesa / Workspace), and top pain points.
- Recommended starting posture: Option A (rebuild marketing site only, keep existing portals as linked external pages) — revisit Option B (WordPress) or Option C (full Next.js + new portals) after IT report.

## How to apply
- This is a **separate project / repository** from Vijana. Don't build school-site code inside `vijanaempowermentcbo/`.
- The existing PHP portals are likely worth preserving (they may have real student/teacher/parent users). The marketing/public site is what needs rebuilding first.
- Stack decision is pending — see [[design-system-unity-growth]] for how we approached Vijana, but Grace Schools should have its own brand identity (faith-based school, not the same palette as the CBO).
