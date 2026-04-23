---
name: Botanical Study
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f2'
  surface-container: '#efedec'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1b'
  on-surface-variant: '#434843'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0ef'
  outline: '#737872'
  outline-variant: '#c3c8c1'
  surface-tint: '#506354'
  primary: '#334537'
  on-primary: '#ffffff'
  primary-container: '#4a5d4e'
  on-primary-container: '#c0d5c2'
  inverse-primary: '#b7ccb9'
  secondary: '#556250'
  on-secondary: '#ffffff'
  secondary-container: '#d8e7d0'
  on-secondary-container: '#5b6856'
  tertiary: '#434137'
  on-tertiary: '#ffffff'
  tertiary-container: '#5b584d'
  on-tertiary-container: '#d3cfc1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e8d5'
  primary-fixed-dim: '#b7ccb9'
  on-primary-fixed: '#0e1f13'
  on-primary-fixed-variant: '#394b3d'
  secondary-fixed: '#d8e7d0'
  secondary-fixed-dim: '#bccbb5'
  on-secondary-fixed: '#131e11'
  on-secondary-fixed-variant: '#3d4a3a'
  tertiary-fixed: '#e7e2d4'
  tertiary-fixed-dim: '#cbc6b9'
  on-tertiary-fixed: '#1d1c13'
  on-tertiary-fixed-variant: '#49473c'
  background: '#fbf9f8'
  on-background: '#1b1c1b'
  surface-variant: '#e4e2e1'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Noto Serif
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Noto Serif
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Noto Serif
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Noto Serif
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  margin: 64px
  gutter: 24px
---

## Brand & Style
The design system is rooted in the meticulous, observational spirit of 19th-century natural history — applied to the study of software. It targets a technically literate audience — working engineers, architects, and curious generalists — who value clarity, depth, and considered prose over noise and novelty.

The visual style is a refined **Minimalism** with **Tactile** undertones. It deliberately resists the conventions of modern developer blogs: no dark themes, no neon syntax highlighting, no card grids crowded with thumbnails. The interface should feel like a well-kept technical journal, where an article receives the same careful presentation as a specimen under study — unhurried, precise, and meant to be read in full.

## Colors
The palette is strictly limited to organic, desaturated tones. The background is a solid, unvarying off-white (`#fbf9f8`), mimicking the look of unbleached archival paper. No gradients are permitted.

The primary color is a deep, muted Forest Green used for primary actions, links, and essential branding. The secondary Sage Green serves as an accent for tags, metadata, and secondary UI. A tertiary stone tone provides subtle contrast for dividers and structural decoration. All body text uses a near-black ink tone rather than true black to maintain warmth and legibility at long reading lengths.

## Typography
This design system relies exclusively on **Noto Serif** to provide a consistent, authoritative, and literary voice. The choice is intentional: code is precise, but writing about code benefits from the weight and rhythm of a proper reading typeface.

Headlines use tighter letter spacing and heavier weights to suggest typeset printing. Body text is sized generously with wide line heights to support long-form technical articles. Captions use italics to echo the handwritten annotations of naturalist journals — appropriate for image descriptions, asides, and pull quotes. Labels use uppercase styling throughout for a catalogued, taxonomic feel. Code samples are the sole exception to the Noto Serif rule and use a monospaced font (see Components).

## Layout & Spacing
The layout follows a **Fixed Grid** model to mirror the structured pages of a book. Content is centered within a 12-column container with wide outer margins (`64px`) to create breathing room and focus. On article pages, the main column is intentionally narrow — approximately 70 characters wide — to maintain optimal reading measure.

Spacing is disciplined and rhythmic, using a 4px base unit. Vertical rhythm is critical; elements should feel meticulously placed on the page. Use generous whitespace between sections and between an article's metadata and body to let each component read as a distinct layer of information.

## Elevation & Depth
Depth is conveyed through **low-contrast outlines** and subtle tonal layering rather than shadows.

Avoid drop shadows entirely — they conflict with the 2D nature of a physical journal page. Use thin (`1px`) solid borders in `outline-variant` (`#c3c8c1`) to define containers. When an element must appear elevated (e.g. a callout box or a sticky table of contents), use a slightly darker paper-tint background (one step up the `surface-container` scale) to create a "stacked paper" effect.

## Shapes
The shape language is strictly **Sharp (0 radius)**.

All buttons, input fields, code blocks, and cards use 90-degree corners. This evokes the clean-cut edges of paper and index cards. Circular shapes are reserved exclusively for functional iconography (e.g. avatar images in author bylines), keeping them visually distinct from the architectural rigidity of the surrounding UI.

## Components

- **Buttons:** Rectangular with a 1px solid border. Primary buttons use a solid Forest Green fill with white text. Secondary (outline) buttons use Forest Green text and border on a transparent background. Both are used sparingly — the primary CTA on most pages is a newsletter subscription prompt.

- **Input Fields:** Bottom-border only, mimicking a lined page. The newsletter subscription field is the primary instance. Labels sit above the line in small, italicized text.

- **Post Cards:** Used in listing pages. Defined by a 1px `outline-variant` border with no background fill. Hover state applies a `surface-container-low` tint — a subtle warm shift, not a shadow. Cards contain: post title (headline-md), publication date and reading time (label-sm, uppercase), a one-line excerpt (body-md), and a set of taxonomy tags.

- **Tags / Taxonomy Chips:** Small, sharp-edged rectangles with a `secondary-container` background and `on-secondary-container` text, resembling adhesive labels from a specimen drawer. Used for topic categories (e.g. *Systems*, *Tooling*, *Architecture*, *Frontend*). Clickable, linking to filtered post listings.

- **Code Blocks:** The main technical element. Rendered in a monospaced font (system default: `ui-monospace` or `Fira Code` if available) against a `surface-container` background with a 1px `outline-variant` border. No syntax highlighting colors — ink tones only, using weight and opacity contrast to distinguish tokens. This preserves the monochrome, archival aesthetic while remaining legible. Line numbers are shown in a dimmed `on-surface-variant` tone.

- **Inline Code:** Small, sharp-edged spans using the same monospaced font, rendered with a `surface-container-high` background and no border, to sit cleanly within flowing prose.

- **Callout / Aside Boxes:** Used for notes, warnings, and key takeaways within articles. A `surface-container-low` background with a 2px left border in the primary Forest Green. Header text in `label-sm` uppercase (e.g. *Note*, *Caution*, *Aside*). No icon usage — the border alone carries the signal.

- **Images & Diagrams:** Always framed with a 1px `outline-variant` inset border to echo "tipped-in" illustrations from printed books. Captions are mandatory, placed immediately below in `caption` style with italics. Diagrams and architecture illustrations should follow the same ink-on-paper constraint: black or Forest Green strokes on an off-white fill, no decorative drop shadows.

- **Table of Contents:** Sticky on long articles, rendered as a plain left-aligned list using `caption` typography. Active section highlighted with a 2px left border in `primary`. No background fill.

- **Post Metadata Bar:** Appears below the headline on article pages. Contains: author name, publication date, last-updated date (if applicable), estimated reading time, and tags. Rendered in `label-sm` uppercase with `on-surface-variant` ink tone. Separated from the article body by a full-width 1px `outline-variant` rule.

- **Lists:** Separated by thin horizontal rules. Standard `ul` bullets are replaced with an em dash (—) to avoid the clinical feel of disc bullets. Ordered lists use plain numerals. No nested lists beyond one level deep.