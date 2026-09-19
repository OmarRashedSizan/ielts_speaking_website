# Design system, responsive strategy and accessibility

_This file mirrors sections 05, 14 and 15 of the `/docs` page in the running site._

## Design brief, made concrete

The site should read like a well-made textbook from a serious language school — not a dashboard.
That single decision controls everything: a warm paper background instead of pure white, deep ink
text, a serif for headings, generous line height for long reading, and one accent colour used
sparingly to mark actions.

Nothing on the page is decorative. Every tint signals meaning:

| Token group | Examples | Role |
| --- | --- | --- |
| Surfaces | `canvas`, `canvas-deep`, `paper` | Page background, section separation, card fill |
| Text | `ink`, `ink-soft`, `ink-muted` | Headings, body, captions — all contrast-checked |
| Lines | `line`, `line-strong` | Hairline borders; never heavy shadows |
| Brand | `brand-50 … brand-900` | Primary actions, progress, active states |
| Signals | `accent`, `danger`, `info` | Highlights, wrong answers, neutral notes |

**Typography roles**

| Role | Stack | Used for |
| --- | --- | --- |
| Display and headings | Source Serif 4 → Georgia → serif | Page titles, lesson headings |
| Body and UI | Inter → system-ui → sans-serif | Paragraphs, buttons, labels, tables |
| Bangla | Noto Sans Bengali → SolaimanLipi → system Bangla fonts | Every `.bn` passage, with looser line height |
| Templates | `mono-chip` | Sentence patterns, so a template reads as a template |

Fonts are linked from the document head rather than fetched at build time, so the build works
offline and the CSS stacks give sensible fallbacks if the CDN is unreachable.

## Deliberately avoided

Neon accents · heavy gradients · glassmorphism · blurred floating panels · uniform oversized corner
radii · animated illustrations, mascots or robots · dashboard widgets without teaching purpose ·
the same card grid repeated on every page. Replaced with paper tones, hairline-bordered flat cards,
one radius scale, real typography as the main visual device, and short fade-and-rise motion that is
suppressed for `prefers-reduced-motion`.

## Responsive strategy

Mobile-first, because the primary device is a mid-range Android phone on a 4G connection.

| Viewport | Layout | Notes |
| --- | --- | --- |
| < 640 px | One column | Largest type, thumb-sized controls, timers always reachable |
| 640–1024 px | Two columns for lists, one for reading | Tabs navigate within topic pages |
| 1024–1280 px | Content + sticky sidebar | Sidebar never overlaps the text column |
| > 1280 px | Centred shell, maximum width | Extra space goes to margins, not to longer lines |

Checked before shipping: no horizontal scroll at 360 px; the reading column is capped in characters
rather than pixels; wide reference tables scroll inside their own container; practice state survives
a phone call or a screen lock; Bangla renders without clipping.

## Accessibility strategy

| Area | Implementation |
| --- | --- |
| Language | Document declares English; Bangla passages are wrapped so assistive tech switches scripts |
| Structure | One `h1` per page, ordered headings, landmarks, skip link as the first focusable element |
| Keyboard | Real buttons and links everywhere; tabs, filters, dialogs and timers are keyboard-operable |
| Focus | Visible focus ring on every control, offset so it is never clipped |
| Colour | 4.5:1 minimum contrast for text; meaning never carried by colour alone |
| Motion | Short entry animation only, disabled for reduced-motion users |
| Timers | Announce remaining time and can be paused |
| Forms | Labelled inputs, descriptive errors, accessible search field with a live result count |
| Media | Recording stays on the device; AI evaluation is opt-in and typed input always works |

Accessibility here is also a product decision: a learner who is anxious about being recorded still
gets a pause button, a visible timer, and a typed alternative to speech recognition.
