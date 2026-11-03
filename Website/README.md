# Next Level Gaming & Esports Arena — Website

This is an expanded version of the supplied HTML/CSS website, with added JavaScript.

## Run locally
Open `index.html` in a web browser. All links are relative so the site works on GitHub Pages. For best results, use VS Code Live Server or `python -m http.server 8000` and browse to `http://localhost:8000`.

## Pages
- `index.html` — Home
- `about.html` — About
- `overview.html` — Arena overview
- `package-details.html` — Prices and package information
- `calculate-fees.html` — Interactive fee calculator and booking enquiry preparation
- `contact.html` — Contact details and enquiry drafting

## Calculations
Package prices match the supplied React Native `calculate-fees.tsx`. Automatic discount is 0% for 1 selection, 5% for 2, 10% for 3 and 15% for 4 or more. VAT 15% is applied after discount, matching the mobile application.

## Before publishing
- The supplied email is skilllabgames@gmail.com. Confirm phone, location and hours before publishing; other contact details may still be placeholders.
- Enquiry forms open a **mailto:** draft addressed to skilllabgames@gmail.com. Users must send from their own email app. They do not automatically submit data or confirm bookings. A backend/form provider would be needed for direct web submission.
- Verify the package prices, VAT treatment, and discounts with the client/instructor. These match the supplied mobile source and are not independently verified commercial prices.
- Upload the **contents** of this folder to the root of a GitHub repository and enable Settings → Pages → Deploy from a branch (`main` / root).
