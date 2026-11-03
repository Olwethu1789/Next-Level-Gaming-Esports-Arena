# Next Level Gaming & Esports Arena — Phase 2 mobile app updates

This is a **source-code update**, not a standalone Expo project. The supplied original ZIP contains `src/` but not the `package.json`, lock file, or complete Expo project configuration.

## Apply to your existing Expo project
1. Make a backup of your working mobile project.
2. Copy the contents of this ZIP's `src/` folder into the **existing project's** `src/` folder.
3. Copy `assets/images/Next_Level_Gaming_Esports_Logo.svg` into the existing project's corresponding `assets/images/` folder (these screens import from `../../assets/images/`).
4. If your project has a root `app/` directory instead of `src/app/`, keep using your project's established Expo Router layout and put these route files in that active app directory, adjusting asset imports to match.
5. From the Expo project root run `npx expo start --clear` (on Windows PowerShell, `npx.cmd expo start --clear` if script execution is blocked).

## Changes
- Contact email changed to **skilllabgames@gmail.com**.
- Removed the unverified sample telephone number.
- Calculator displays an enquiry summary rather than claiming a confirmed booking.
- 'Email Booking Enquiry' launches a prepared email containing customer details, packages, discount, VAT, and estimated total.
- Contact map button now opens a general Johannesburg map search rather than doing nothing. This is *not* an exact venue address.

## Important
- Email is **not sent automatically**. The visitor must have an email application configured and must choose Send.
- No confirmed-booking database or payment processor is included.
- Verify prices, discount tiers, business address and opening hours with your group before publishing.
- This package has been checked by static inspection only; it cannot be compiled or device-tested here because the complete Expo project and its dependencies were not provided.
