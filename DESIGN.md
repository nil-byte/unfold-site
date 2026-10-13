# Unfold product website design

## Theme
A quiet native Mac product page. Product-first composition, clear system typography, restrained blue, and complete real application screenshots. The page represents the actual pre-release app; it does not promise availability or invent reviews.

## Palette
Light canvas #fbfcfd, ink #202631, muted #646e7c, accent #2b65d8, rule #e2e7ed. Dark canvas #11151b, ink #edf1f7, muted #a2adbc, accent #8cb6ff, rule #2c3541. Screenshot pixels retain their original appearance in both themes.

## Typography
System UI / PingFang, no external fonts. Desktop hero 42–60px, weight 650, 1.15 line height. Section headings 30–38px; body 14–16px, 1.75 line height. Balanced headings; no artificial letter spacing in long Chinese body text. The real app icon retains its original serif wordmark.

## Components
Compact text navigation and language menu. A 40px icon opens the System / Light / Dark appearance menu; default is System and selection is stored locally. Seven direct screenshot buttons use a thin selected underline, with horizontal overflow limited to the button rail on narrow screens. Arrow keys, Home, End, Tab and Enter work; a live counter identifies the selected image. Selection changes only when the requested image loads; stale callbacks cannot overwrite a newer request and failures keep the last valid image. FAQ uses native details / summary. Escape closes header menus. Image links open originals; no modal gallery.

## Layout
Hero copy and Today screenshot side by side, followed by a simple factual strip. A titled screenshot gallery provides all seven surfaces and opens on daily history so the Today hero is not duplicated. Product stories describe reminders, avoidance and history beside a real rest-screen image. Free / Pro comparison, privacy statement, support and footer follow. Support and privacy are readable document pages with the same navigation and theme controls.

## Depth
Only real app screenshots and open header menus receive restrained shadows. Content hierarchy comes from typography, spacing and hairline rules. Screenshot ratio follows the source; menu and settings images are capped at meaningful widths. No fixed image viewport, decorative app chrome or recolored screenshots.

## Constraints
Original static HTML / CSS / JavaScript with CSS variables as the single styling strategy. Three locales, no third-party runtime, tracking, cookies or external fonts. Site privacy text discloses the locally saved appearance preference. Support and privacy content remains readable without JavaScript. Do not claim Mac App Store availability until there is a working listing.

## Responsive
1180px content maximum, 40px desktop gutters. Below 760px: one-column hero and product stories, 20px gutters. Header can occupy two rows on phones; gallery rail can scroll independently. 320px and 375px layouts must not create horizontal page overflow. Reduced-motion preference disables transitions.

## Maintenance and references
Keep the paid/free boundary consistent with the app and App Store Connect. Web screenshots use intrinsic-ratio WebP; App Store uploads use separately validated 2880×1800 RGB/sRGB PNG. Reference research: LookAway's break/customization scenes, Things' product-image presentation, and Raycast's compact navigation, system-like sans typography, and section hierarchy. Firecrawl inspected public HTML and branding data, not just thumbnails. These informed original layout decisions; no third-party source or visual assets were copied.
