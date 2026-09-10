# Aurora Sign Up

## Build
- Replace the current landing page with a responsive two-column sign-up screen.
- Keep the video panel visible on large screens and hide it on smaller screens.
- Add the animated Aurora branding, three registration steps, social sign-in controls, profile fields, password visibility toggle, and account action.
- Match the requested black, white, and brand-gray styling with Inter typography.

## Technical details
- Add `motion` for the requested entrance animations and continue using Lucide icons.
- Put the screen implementation in `src/App.tsx` and its dedicated styles in `src/index.css`; the existing TanStack route will only mount `App`.
- Load Google Fonts through the document head because remote CSS imports are incompatible with this Tailwind setup.
- Add route-specific title and social metadata, then verify compilation and the rendered desktop/mobile layouts.
