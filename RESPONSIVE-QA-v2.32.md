# Responsive & Functional QA — v2.32

Changes made from v2.31:

- Added a real mobile/tablet navigation menu. Previously the primary nav disappeared below 980px, which made most pages inaccessible except through page content links.
- Hid the desktop “Let’s Connect” button at tablet widths and placed it inside the mobile menu.
- Added narrow-screen title scaling for Home, route pages, About, and case studies.
- Made resume View/Download actions stack cleanly on phones.
- Simplified Contact profile cards on phones to avoid three-column crowding.
- Forced project metric blocks to one column on phones and tightened showcase copy padding.
- Added small-screen refinements for credential metadata and unified case-study CTA spacing.

Static path check:
- All local files referenced by app/components/data were found under `public/`.

Build note:
- A full `next build` could not be completed in this environment because dependencies were not present in the extracted ZIP and installing them exceeded the execution window. The source-level checks and responsive changes are included in this package.
