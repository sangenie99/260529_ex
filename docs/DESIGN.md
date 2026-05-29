---
name: Kindred Notes
colors:
  surface: '#fbf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fbf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ec'
  surface-container: '#f0eee6'
  surface-container-high: '#eae8e0'
  surface-container-highest: '#e4e3db'
  on-surface: '#1b1c17'
  on-surface-variant: '#4d4634'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1e9'
  outline: '#7f7662'
  outline-variant: '#d0c6ae'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#ffd54f'
  on-primary-container: '#735c00'
  inverse-primary: '#ebc23e'
  secondary: '#286b33'
  on-secondary: '#ffffff'
  secondary-container: '#abf4ac'
  on-secondary-container: '#2e7238'
  tertiary: '#8d4d38'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffcec0'
  on-tertiary-container: '#8d4d38'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe087'
  primary-fixed-dim: '#ebc23e'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#abf4ac'
  secondary-fixed-dim: '#90d792'
  on-secondary-fixed: '#002107'
  on-secondary-fixed-variant: '#07521d'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59e'
  on-tertiary-fixed: '#390c01'
  on-tertiary-fixed-variant: '#713623'
  background: '#fbf9f1'
  on-background: '#1b1c17'
  surface-variant: '#e4e3db'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 120px
---

## Brand & Style

The design system is centered on "soft utility"—a philosophy that prioritizes emotional comfort for beginners over complex information density. The brand personality is gentle, patient, and optimistic. It aims to evoke the feeling of a physical stationery shop, where every interaction feels tactile and low-stakes.

The aesthetic blends **Minimalism** with **Soft Tactile** elements. By using generous whitespace and a restricted but cheerful palette, the UI avoids overwhelming the user. The "Post-it" metaphor is the central visual driver, providing a familiar mental model for digital note-taking.

- **Target Audience:** Non-technical users, students, and lifestyle planners.
- **Emotional Response:** Calm, organized, encouraged, and creative.

## Colors

The palette is anchored in warm, sun-drenched tones to reduce eye strain and create a welcoming atmosphere.

- **Primary (Warm Yellow):** Used for the main action buttons and highlights. It represents energy and "new ideas."
- **Secondary (Soft Mint):** Used for success states, categorization, and organic growth themes.
- **Tertiary (Peach):** A soft accent used for urgent reminders or creative tasks to differentiate from the primary yellow.
- **Background (Cream):** The foundation of the app. It is softer than pure white, providing a paper-like quality that feels premium yet accessible.
- **Text (Charcoal Brown):** Avoid pure black. A deep, warm brown-grey ensures high legibility while maintaining the "soft" aesthetic.

## Typography

This design system utilizes **Plus Jakarta Sans** for headlines to provide a modern, friendly, and slightly rounded geometric look that scales beautifully. For body text and labels, **Be Vietnam Pro** is used for its exceptional readability and warm, contemporary proportions.

- **Headlines:** Use Bold weights to create a clear hierarchy against the soft background.
- **Body:** Use Regular weights with generous line-heights (1.5x+) to ensure the text feels airy and unhurried.
- **Captions:** Should never drop below 12px to maintain accessibility for all age groups.

## Layout & Spacing

The layout follows a **fluid-to-fixed** model. On mobile, it uses a 2-column masonry grid or a single-column list. On desktop, content is centered within a maximum width container (1200px) using a 12-column grid.

- **Rhythm:** An 8px base grid ensures consistency. 
- **The "Breath" Rule:** Use larger margins (24px+) between different notes to emphasize that each memo is its own distinct thought.
- **Padding:** Note cards should have internal padding of at least 20px to prevent text from feeling "cramped" near the rounded edges.

## Elevation & Depth

To maintain the "cute" and "approachable" feel, the design system avoids harsh, realistic shadows in favor of **Ambient, Tinted Shadows**.

- **Level 1 (Static Cards):** A very soft, wide-spread shadow using the Primary color at 5% opacity. This makes the note look like it’s resting gently on the cream background.
- **Level 2 (Hover/Active):** When a user interacts with a note, the shadow becomes slightly tighter and more opaque (12%) to simulate the note being "lifted" off the page.
- **Glassmorphism:** Use subtle backdrop blurs (8px) for navigation bars and floating action buttons to maintain a sense of place without obscuring the content.

## Shapes

The shape language is dominated by **extreme roundedness**. 

- **Cards:** Use a standard `1rem` (16px) radius, but for the "Post-it" style items, the `rounded-xl` (24px) radius is preferred to emphasize the friendly, non-threatening nature of the UI.
- **Buttons:** Fully pill-shaped (32px+) to encourage clicking and provide a distinct contrast against the rectangular note cards.
- **Form Inputs:** Softly rounded (12px) to balance between the cards and the buttons.

## Components

### Buttons
- **Primary:** Pill-shaped, Primary Yellow background, with a subtle 2px bottom "border-shadow" of a slightly darker yellow to give a "squishy" button feel.
- **Ghost:** Transparent background with a 1.5px solid border in the Secondary color.

### Memo Cards (Post-it Style)
- These are the core atoms. Use background tints of Primary (Yellow), Secondary (Mint), or Tertiary (Peach) at 100% opacity.
- Top-right "corner-fold" icon or subtle gradient to mimic a real-life paper note.
- Minimalist header with a date and a "pin" toggle.

### Input Fields
- Background-color should be a slightly darker cream than the main background to show depth.
- Focus state: A 2px solid Mint border. No harsh glows.

### Chips & Tags
- Used for categorizing notes. Use the `rounded-lg` (16px) style with high-contrast text against a pale version of the category color.

### Floating Action Button (FAB)
- A large, circular button in the bottom right corner with a "+" icon. Always use the Primary color to ensure it's the first thing a beginner sees.