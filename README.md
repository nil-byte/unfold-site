# Unfold · 间息 website

Product, support, and privacy pages for the native macOS break reminder.

- Live site: https://nil-byte.github.io/unfold-site/
- Simplified Chinese: `/`
- English: `/en/`
- Traditional Chinese: `/zh-Hant/`
- Support and privacy: append `support/` or `privacy/` to each language root.

Static HTML, CSS, a small screenshot switcher, and real app screenshots. No build step, external font service, analytics, cookies, or application source. GitHub Pages serves `main` at the repository root. Preview with `python3 -m http.server 8765`.

Update `style.css` for shared design and each HTML file for localized copy. `gallery.js` only switches screenshot images. Refer to DESIGN.md for visual constraints. After changes, check all language pages at desktop/mobile widths, including dark appearance and keyboard controls.

The app is being prepared for the Mac App Store. Replace the launch-status copy with the verified App Store URL only after the app is publicly available. Published website prices are regional references; Apple supplies the current local price inside the app.
