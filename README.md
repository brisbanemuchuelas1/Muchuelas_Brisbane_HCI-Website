# CraveCart — Website

An accessible, user-focused static website for CraveCart. This repository contains the front-end for a small e-commerce concept showcasing product browsing, cart interactions, and HCI-driven usability features.

## Preview / Demo

- Open the site locally by opening the file: [index.html](</C:/Users/Brisb/OneDrive/Documents/HCI Website/index.html>) in a modern browser.
- Styles are defined in [style.css](</C:/Users/Brisb/OneDrive/Documents/HCI Website/style.css>).

## Features

- Product listing and browsing UI
- Simple cart interactions (add / remove)
- Responsive layout and HCI-focused interactions (keyboard accessibility, clear affordances)
- Clean, minimal CSS-based design (see [style.css](</C:/Users/Brisb/OneDrive/Documents/HCI Website/style.css>))

## Tech stack

- HTML (static pages)
- CSS for layout and styling
- Optional JavaScript for dynamic interactions

## Project structure

Top-level files and folders (typical layout):

- index.html — main entry page ([index.html](</C:/Users/Brisb/OneDrive/Documents/HCI Website/index.html>))
- style.css — global styles ([style.css](</C:/Users/Brisb/OneDrive/Documents/HCI Website/style.css>))
- /assets or /images — product images and media (if present)
- /js — site JavaScript for cart behavior (if present)
- README.md — this file

If any of these folders are missing in your copy, they may be empty or optional for the current site design.

## Prerequisites

- Modern browser (Chrome, Edge, Firefox, Safari)
- (Optional) Node.js and npm if using a static server package
- (Optional) Python 3 for a quick local server

## Running locally

Several lightweight options are provided below. Use whichever is most convenient.

1) Open directly in a browser (no server)
- Double-click [index.html](</C:/Users/Brisb/OneDrive/Documents/HCI Website/index.html>) or open it from the browser's File > Open menu.

2) Serve with Python (recommended for AJAX/fetch behavior)
- From project root in PowerShell:

  py -3 -m http.server 8000

- Then visit http://localhost:8000 in your browser.

3) Serve with Node (if Node is installed)
- Install a tiny static server and run:

  npm install -g serve
  serve -s . -l 5000

- Then visit http://localhost:5000

4) VS Code + Live Server extension
- Open the project folder in VS Code and start Live Server (right-click index.html → Open with Live Server).

## Development notes

- Keep CSS in [style.css](</C:/Users/Brisb/OneDrive/Documents/HCI Website/style.css>). If you split styles into multiple files, place them in a /css or /styles folder and update index.html accordingly.
- If adding JavaScript, place files under /js and include them at the bottom of index.html to avoid blocking rendering.
- Ensure images and media are optimized for web to keep page load fast.

## Accessibility & HCI guidelines

This site is intended to follow basic HCI and accessibility best practices:
- Use semantic HTML elements (header, nav, main, footer, button, form controls).
- Ensure interactive controls are reachable via keyboard (tab order) and have visible focus styles.
- Provide alt text for images and descriptive labels for controls.
- Keep contrast high enough for readability and use readable font sizes.

If user testing is planned, collect feedback about discoverability, task flow, and error handling.

## Deployment

The site is static, so choose any static hosting provider such as GitHub Pages, Netlify, or Vercel.

Quick GitHub Pages steps:
- Commit and push the repository to GitHub.
- In the repository Settings → Pages, set the source to the main branch and root (or the docs/ folder if used).
- GitHub will publish the static site at the provided URL.

Netlify / Vercel:
- Connect the repository and follow the provider's deploy flow (no build command required for purely static sites).

## Contributing

Contributions are welcome.
- Fork the repo and open a pull request for changes.
- For UI or content changes, include screenshots and a short description of the usability improvement.
- For bug reports, open an issue with steps to reproduce, expected vs actual behavior, and the browser used.

## Testing

- Manual testing across major browsers (Chrome, Edge, Firefox, Safari).
- Manual keyboard testing for accessibility.
- If adding JavaScript, add unit tests or simple smoke tests as needed (not included by default).

## Troubleshooting

- If pages load with missing images or styles, confirm paths in index.html are correct and files are present.
- If fetch/XHR requests fail when opening files directly (file://), run a local server (see "Running locally" above) to avoid CORS/file protocol issues.

## License

This project does not include a license by default. If intended to be open-source, add a LICENSE file (for example, MIT) and update this section accordingly.

## Contact

For questions or help with the site, contact the project owner.

