# RealtorBen website

Plain HTML/CSS/JS, no build step. Open `index.html` to view it.

## Files (keep them all in one folder)
- `index.html` + `style.css` + `animations.js`: home page, nav menu and scroll animations
- `pages.css`: shared look for every inner page
- `contact.html` + `contact.css` + `contact.js`: contact form (opens a pre-filled email, or WhatsApp)
- `showMore01-04.html`: the four service pages
- `gallery.html` + `gallery.css`, `submit.html` (thank-you page), `404.html`
- `transparent-*.PNG`: property images

## Change your details
Email and WhatsApp number appear in `contact.js` (top two lines) and in the links in `index.html`, `contact.html`, `submit.html`. Search for the old value and replace it everywhere.

## Put it online (free)
- Netlify: go to app.netlify.com/drop and drag this folder in.
- GitHub Pages: upload the files to a repository, then Settings > Pages.
Once you have a domain, add it to your Instagram/WhatsApp/LinkedIn bios.

## About the contact form
It has no server. Pressing Send opens the visitor's email app with the message filled in, and the WhatsApp button opens a chat with the message ready. To receive messages directly in your inbox without the visitor's email app, create a free form at formspree.io and point the form's `action` at it.
