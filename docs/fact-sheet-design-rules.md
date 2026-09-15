# Fact-sheet design rules

These rules come from the English and Arabic A4 Section 1 PDFs in `reference/`. The shared implementation is `src/components/SectionOne.tsx`; the sizing and mobile behavior are in `src/styles/section1.css`.

| Element | English PDF | Arabic PDF |
| --- | --- | --- |
| Page title | TikTok Sans Display Bold, 34.01 pt | Adelle Sans ARA Bold, 20 pt; TikTok Sans Black for `10` |
| Introduction | TikTok Sans Display Regular, 14 pt | Adelle Sans ARA Regular, 16 pt |
| Card number | TikTok Sans Display Bold, 37.36 pt | TikTok Sans Black, 37.36 pt |
| Card title | TikTok Sans Display Bold, 17.7 pt for one line; 15.73 pt for two lines | Adelle Sans ARA Bold, 16 pt |
| Card copy | TikTok Sans Text Regular, 9.34 pt | Adelle Sans ARA Semibold, 9 pt |
| Date | TikTok Sans Display Regular, 9.83 pt | TikTok Sans Bold, 9.83 pt |

The site uses font files derived from these PDFs in `public/assets/fonts/section1/`. They are subsets containing the glyphs used in Section 1. If a later section needs new characters, extend the subsets from its reference PDF or replace them with complete font files.

Keep the card number and title in a header whose height matches the number. Vertically center one-line titles beside the number. Split two-line English titles into two lines within that same height. Arabic cards mirror the layout through `dir="rtl"` and remain in numbered reading order. Filled rows alternate with outlined rows.

Keep two cards per row on phones. Scale the PDF typography down with `cqw` and a minimum readable size; let phone cards grow with their copy. Use exported SVG icons directly. Numbers or marks inside an SVG belong to the asset and should not be duplicated in HTML.

Section 2 uses the Countering CSAM A4 PDFs. It follows the same English TikTok Sans and Arabic Adelle Sans ARA families, with new glyph subsets in `public/assets/fonts/section2/`. At PDF width (595.5 px), its typography is:

| Element | English PDF | Arabic PDF |
| --- | --- | --- |
| Title | TikTok Sans Display Bold, 36.05 pt | Adelle Sans ARA Bold, 27 pt |
| Introduction | TikTok Sans Display Regular, 13.62 pt | Adelle Sans ARA Semibold, 15 pt |
| Card title | TikTok Sans Display Bold, 21.4 pt | Adelle Sans ARA Bold, 17 pt |
| Card copy | TikTok Sans Text Regular, 10.7 pt | Adelle Sans ARA Semibold, 10 pt |
| Date | TikTok Sans Display Regular, 9.73 pt | TikTok Sans Bold, 9.73 pt |

The Section 2 canvas is pale turquoise (`#c5f6f5`) with four white rounded cards in two columns. On phones, retain two columns and allow each card to grow vertically. The reference card order is detecting, eliminating, reporting, stronger together in reading direction; the exported SVG numbers do not follow that order. The Arabic page mirrors the grid and the QR/date footer. The QR images come from the PDFs, and the footer points to the Transparency Centre link embedded in the English PDF.

Keep every Section 2 card icon and title on the same row at all widths. Vertically align their middles; keep title text aligned to the reading edge (left for English, right for Arabic), even when the title wraps.

Section 3 uses the Digital Well-being A4 PDFs. Its white canvas has a centered title and four outlined cards in two columns. It keeps the icon and title vertically aligned on one row at every width, with card text following the reading direction. The icon mapping is `3.1` screen time, `3.2` pause/reset, `3.3` missions, and `3.4` creator tips. Keep two columns on phones and let the cards grow with their text.

| Element | English PDF | Arabic PDF |
| --- | --- | --- |
| Title | TikTok Sans Display Bold, 42.02 pt | Adelle Sans ARA Bold, 35 pt |
| Introduction | TikTok Sans Display Medium, 13.92 pt | Adelle Sans ARA Semibold, 16 pt |
| Card title | TikTok Sans Display Bold, 17.9 pt | Adelle Sans ARA Semibold, 16 pt |
| Card copy | TikTok Sans Text Regular, 11.94 pt; Bold for English bullet labels | Adelle Sans ARA Regular, 14 pt |
| Date | TikTok Sans Display Regular, 9.95 pt | TikTok Sans Bold, 9.95 pt |

The new font subsets are bundled in `public/assets/fonts/section3/`. Section 3 bullets use filled markers. The PDFs do not contain a QR code or Transparency Centre link in this section.

Section 4 uses the Family Pairing A4 PDFs. Its black hero uses `public/assets/section4/header.svg` for the clasped hands artwork; the white body has thirteen controls separated by thin turquoise rules. Use the exported `icon 4.1.svg` through `icon 4.13.svg` in control order. On the Arabic sheet, the three-column grid follows right-to-left reading order, and the final Direct Messaging control spans two columns. Each control keeps its icon and title on one aligned row; the title is aligned to the reading edge. The QR codes are extracted from the PDFs and sit beside the Guardian's Guide note.

| Element | English PDF | Arabic PDF |
| --- | --- | --- |
| Hero title | TikTok Sans Display Bold, 34.01 pt | Adelle Sans ARA Bold, 36 pt |
| Hero introduction | TikTok Sans Display Regular, 14 pt | Adelle Sans ARA Regular, 12 pt |
| Control title | TikTok Sans Display Bold, 13.62 pt | Adelle Sans ARA Bold, 17 pt |
| Control copy | TikTok Sans Display Regular, 9.73 pt | Adelle Sans ARA Regular, 12 pt |
| Guide note | TikTok Sans Display Regular, 11 pt | Adelle Sans ARA Semibold, 12 pt |
| Date | TikTok Sans Display Regular, 9.73 pt | TikTok Sans Bold, 9.73 pt |

The Section 4 font subsets are in `public/assets/fonts/section4/`. Keep three control columns at every width, preserve the two title lines in the black header, and show the full clasped-hands SVG. Scale the typography and icons proportionally on phones and let each row grow when its copy needs more space. The QR note, brand and date should remain visible without horizontal scrolling.

Section 5 uses the Safety and privacy protections for teens A4 PDFs. It is a semantic comparison table with eleven settings and three age columns: 13–15 (pink), 16–17 (turquoise), and 18+ (beige with a black header). The Arabic table follows right-to-left reading order, so the youngest age is the rightmost age column. Age headers have rounded top corners and join squarely to continuous pastel columns; rules run across each complete row. On phones, age buttons select one readable comparison column at a time without breaking Arabic words. Its title icon is `public/assets/section5/icon 5.1.svg`; Section 5 English and Arabic font subsets are in `public/assets/fonts/section5/`.
