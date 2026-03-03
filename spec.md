# Test2Deploy

## Current State
The site is a fully static marketing website with blue/white Finland flag theme. It has sections: Hero, TrustStrip, WhoWeHelp, CoreServices, WhyDifferent, RealOutcomes, HowItWorks, IdealUseCases, FinalCTA, and Footer. All CTAs currently link to `mailto:pankaj.kumar@test2deploy.eu`. There is no contact form — users are redirected to their email client when clicking booking/contact buttons.

## Requested Changes (Diff)

### Add
- A `ContactFormSection` component with a contact form that allows visitors to send a message directly from the website without opening their email client.
- Form fields: Name (text), Email (email), Phone (optional, text), Subject (select or text), Message (textarea), and a Submit button.
- A contact method chooser — when the user clicks any "Book a Free Call" CTA button, show a modal/dialog that lets them choose between: (1) Send Email (opens mailto), (2) Call/WhatsApp (opens tel:+358417280893), or (3) Send a Message (scrolls to / opens the contact form).
- The contact form should display a success message after submission. Since email is disabled, the form should store submissions in the backend (already has a backend actor).

### Modify
- `FinalCTASection.tsx` — Change the CTA button to open a "How would you like to reach us?" modal with email/call/message options instead of directly linking to mailto.
- `HeroSection.tsx` — Change the "Book a Free Call" button to open the same contact method chooser modal.
- `App.tsx` — Add `ContactFormSection` before `FinalCTASection`.
- `Header.tsx` — Add a "Contact" nav link that scrolls to the contact form section.

### Remove
- Nothing removed.

## Implementation Plan
1. Create a `ContactMethodModal` component: shows three options — Email (mailto link), Call (tel link), and Send a Message (scrolls to #contact section). Shared state via a simple prop/callback pattern.
2. Create a `ContactFormSection` component with the form, validation, and a success state. On submit, call the backend `submitContactForm` (or store in a simple text field in backend if available). If no backend endpoint exists, simulate with a localStorage approach or just show success UI after a short delay.
3. Update `HeroSection` and `FinalCTASection` to use `ContactMethodModal` on CTA click.
4. Update `App.tsx` to include `ContactFormSection`.
5. Update `Header.tsx` to add a "Contact" nav item.
6. Ensure all new interactive elements have deterministic `data-ocid` markers.
