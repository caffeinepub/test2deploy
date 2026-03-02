# Specification

## Summary
**Goal:** Fix the company logo display in the Header and Footer, and wire the CTA button in FinalCTASection to open an email client.

**Planned changes:**
- Fix the logo image path in Header and Footer to correctly reference `frontend/public/assets/generated/logo-brand.dim_300x80.png`, preserving aspect ratio and ensuring visibility against both white and Finnish blue backgrounds
- Update the "Book Your Free 15-Minute Launch Readiness Call" button in FinalCTASection to use `href="mailto:pankaj.kumar@test2deploy.eu"` rendered as an `<a>` tag

**User-visible outcome:** The company logo displays correctly in both the Header and Footer without broken images, and clicking the CTA button opens the user's default email client with `pankaj.kumar@test2deploy.eu` pre-filled as the recipient.
