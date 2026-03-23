# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Design System: The Motion Architect



## 1. Overview & Creative North Star

**Creative North Star: "Kinetic Precision"**



This design system is not a static set of rules; it is an engine for movement. Inspired by the technical elegance of `animejs.com`, it adopts the persona of **The Motion Architect**. The aesthetic rejects the "flat web" in favor of a high-energy, dark-mode environment where every element feels like it is caught mid-transition.



We move beyond the "template" look by utilizing **intentional asymmetry** and **overlapping geometry**. Layouts should feel like a technical blueprint that has come to life—precise enough for a developer, yet playful enough for a digital artist. By leveraging high-contrast neon accents against a deep, mathematical navy, we create a sense of infinite depth and rhythmic energy.



---



## 2. Colors & Surface Philosophy

The palette is rooted in a high-contrast, dark-mode spectrum designed to make vibrant accents "pop" with an emissive, neon quality.



### The Palette

* **Background (`#0d0d18`):** The "Void." A deep, ink-blue that acts as the stage for all motion.

* **Primary (`#ff88b5`):** Electric Pink. Used for core interactions and "heat" points in the UI.

* **Secondary (`#00f4fe`):** Cyan. The technical "laser" color, used for secondary actions and data visualization.

* **Tertiary (`#f3ffca`):** Neon Yellow. A "highlight" color for high-attention alerts or playful accents.



### The "No-Line" Rule

**Explicit Instruction:** Do not use 1px solid borders for sectioning or containers. Structural boundaries must be defined solely through background color shifts or tonal transitions.

* Use `surface-container-low` for large section blocks.

* Use `surface-container-high` or `highest` for nested interactive components.

* Separation is achieved via **Vertical White Space** (using the Spacing Scale) rather than horizontal rules.



### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers stacked in 3D space.

* **Base Layer:** `surface` (`#0d0d18`).

* **Floating Panels:** Use `surface-container` with a `backdrop-blur` (Glassmorphism) to allow the "energy" of the background to bleed through.

* **The Signature Glow:** For hero elements, apply a subtle `20px` radial gradient using the `primary` or `secondary` color at 10% opacity to create an "aura" around the component.



---



## 3. Typography

The typography strategy creates a tension between technical geometry (`Space Grotesk`) and humanistic readability (`Manrope`).



* **Display & Headline (Space Grotesk):** This is your architectural voice. It is bold, geometric, and rhythmic. Use `display-lg` (3.5rem) for hero statements to anchor the page's visual weight.

* **Title & Body (Manrope):** The "Engineer’s Note." Manrope provides a clean, neutral balance to the high-energy headlines. It ensures that even in a motion-centric environment, technical documentation and body copy remain highly legible.

* **Label (Space Grotesk):** Use `label-md` in All Caps with 0.05rem letter spacing for "technical data" feel—breadcrumbs, tags, and small metadata.



---



## 4. Elevation & Depth

Depth in this system is a result of **Tonal Layering**, not structural shadows.



* **The Layering Principle:** Place `surface-container-lowest` cards on a `surface-container-low` section to create a soft, natural "recessed" look. Conversely, place `surface-container-highest` on `surface` to indicate an elevated interactive element.

* **Ambient Shadows:** For floating Modals or Popovers, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. To add "soul," tint the shadow with a 4% opacity of the `primary` pink color.

* **The "Ghost Border" Fallback:** If a container requires a boundary (e.g., for accessibility), use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.

* **Glassmorphism:** For top navigation bars or floating toolbars, use `surface-container` at 70% opacity with a `20px` backdrop-blur. This ensures the UI feels "light" and integrated into the motion of the page.



---



## 5. Components



### Buttons

* **Primary:** Filled with `primary-container` (`#ff6ea9`). Corner radius: `full`. On hover, add a `4px` glow using the `primary` color.

* **Secondary:** Ghost style. No background, `outline-variant` (at 20% opacity) border, text in `secondary`.

* **Tertiary:** Text-only in `secondary`, with a `0.5` spacing underline that expands on hover.



### Chips

* **Selection Chips:** Use `surface-container-highest` with `label-md` typography. When selected, switch to `secondary` text with a subtle `secondary-container` background.

* **Radius:** Always use `full` (9999px) for chips to maintain the "playful/liquid" feel.



### Input Fields

* **Base State:** `surface-container-high` background, `none` border. Radius: `md` (1.5rem).

* **Focus State:** A `primary` 1px "Ghost Border" (20% opacity) and a subtle inner glow. The label should shift to `primary` color.



### Cards

* **Forbid Dividers:** Do not use lines to separate header from body. Use a `1.5` (0.5rem) spacing gap or a slight background shift between `surface-container-low` and `surface-container-high`.

* **Motion Factor:** Cards should have a subtle `3deg` tilt or `4px` Y-axis shift on hover to reinforce the "Motion Architect" persona.



### Progress Bars (Kinetic Special)

* **Track:** `surface-container-highest`.

* **Indicator:** A gradient from `secondary` to `secondary-dim`. Add a "spark" (white dot) at the leading edge of the progress bar to simulate motion energy.



---



## 6. Do's and Don'ts



### Do

* **Do** embrace asymmetry. Push a headline 2 units to the left of the grid to create a "dynamic" start.

* **Do** use the Spacing Scale strictly. Rhythm is the "music" of motion.

* **Do** use `primary` and `secondary` colors for interactive elements only.

* **Do** use "Liquid" transitions—standardize on `cubic-bezier(0.4, 0, 0.2, 1)` for all micro-interactions.



### Don't

* **Don't** use pure white (`#ffffff`). Always use `on-surface` (`#e9e6f7`) to maintain the dark-mode atmosphere.

* **Don't** use sharp 90-degree corners. The minimum radius is `sm` (0.5rem) to keep the "friendly technical" vibe.

* **Don't** use standard drop shadows. If it doesn't look like ambient light, it's too heavy.

* **Don't** clutter. If a section feels "full," increase the vertical spacing by two steps on the scale (e.g., move from `16` to `24`).
