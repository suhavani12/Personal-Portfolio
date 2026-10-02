Suhavani Neelam | Portfolio

A responsive personal portfolio website showcasing education, skills, projects, achievements, and a contact form. Built with HTML, CSS, JavaScript, and Bootstrap 5.

Features
Responsive layout using Bootstrap 5 grid and a collapsible navbar
Smooth scrolling navigation between sections
Dark / light theme toggle (🌙 / ☀️) in the navbar
Project filtering by category (All, AI, Web, Other)
Contact form validation for name, email format, and message, with inline error messages and a success/error status
Sections: Home, About, Education, Skills, Projects, Achievements, Contact
Project Structure
.
├── index.html   # Page structure and content
├── style.css    # Custom styles, dark theme, responsive tweaks
└── script.js    # Project filter, theme toggle, form validation
Tech Stack
HTML5
CSS3
JavaScript (vanilla)
Bootstrap 5.3.3 (loaded via CDN)
Getting Started

No build step or dependencies to install.

Clone or download this repository.
Open index.html in any modern browser.

An internet connection is needed on first load for the Bootstrap CDN files.

Optionally, serve it locally:

bash
# Python
python -m http.server 8000

# or Node
npx serve

Then visit http://localhost:8000.

Customization
Content: edit the text in index.html (about, education table, skills, achievements).
Add a project: copy a .project-item block in the #projectList section and set data-category to ai, web, or other so the filter works.
Colors: hero gradient and accent colors are in style.css (.hero-section, .hero-section h1 span).
Dark theme: adjust the body.dark-theme rules in style.css.
Notes
The contact form validates input on the client side only. It does not send messages anywhere yet. To receive messages, connect it to a service such as Formspree, EmailJS, or your own backend.
The Web and Other filters currently have no projects, so selecting them shows an empty list until projects are added.
Deployment

Because it is a static site, it can be hosted for free on GitHub Pages, Netlify, or Vercel by uploading the three files.

Author

Suhavani Neelam B.Tech Computer Science and Engineering, Stanley College of Engineering & Technology for Women Hyderabad, Telangana
