# Accredian Enterprise – Partial Clone

A responsive recreation of the **Accredian Enterprise** landing page, built as part of the **Full Stack Developer Intern Assignment**.

Built using **Next.js (App Router)** and **Tailwind CSS**, following a component-based architecture with responsive layouts, reusable UI components, API integration, and a bonus lead capture feature.

---

## 🔗 Live Demo

🚀 Vercel:
https://your-vercel-link.vercel.app

## 📂 GitHub Repository

https://github.com/your-username/accredian-enterprise-clone

---

# Features

- Fully responsive landing page
- Modern UI with reusable React components
- Built using Next.js App Router
- Tailwind CSS styling
- Mobile responsive navigation
- FAQ accordion (tabbed: About the Course / About the Delivery / Miscellaneous)
- Testimonials carousel
- Lead Capture Form (Bonus)
- API Route integration for the lead form
- Clean folder structure
- Accessibility-friendly design

---

# Tech Stack

### Frontend

- Next.js 14 (App Router)
- React (functional components + hooks)
- Tailwind CSS

### Backend

- Next.js API Routes

### Tools

- Vercel
- Git
- GitHub

---

# Folder Structure
app/
│
├── api/
│ └── leads/
│ └── route.js
│
├── page.js
├── layout.js
└── globals.css

components/
├── Navbar
├── Hero
├── Stats
├── Clients
├── AccredianEdge
├── Domains
├── CourseSegmentation
├── CAT
├── HowItWorks
├── FAQ
├── Testimonials
├── CTA
├── LeadCaptureForm
└── Footer

public/
data/ (auto-created on first lead submission)


---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/yourusername/accredian-enterprise-clone.git
```

Move into project

```bash
cd accredian-enterprise-clone
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open

http://localhost:3000


Production Build

```bash
npm run build
npm start
```

---

# Project Approach

The objective of this assignment was to recreate the **Accredian Enterprise Landing Page** while following modern frontend development practices instead of simply copying the design.

The real site is a fully client-rendered SPA, so it couldn't be scraped with normal tools — I went through the live site section by section (via screenshots) and rebuilt each one to match, rather than guessing at content or inventing generic sections.

One deliberate change from the reference: the real site names actual client companies (Reliance, HCL, IBM, CRIF, ADP, Bayer) with their logos and quotes. I used placeholder company names in the same layout instead, since displaying real companies as "clients" here would misrepresent a partnership that doesn't exist for this project. Everything else — section order, copy structure, layout — follows the reference closely.

The project follows a reusable component-based architecture where each section of the landing page is developed independently, which keeps the code easier to read and maintain.

The landing page contains:

- Responsive Navigation
- Hero Section
- Statistics
- Client Section
- Accredian Edge
- Domain Expertise
- Course Segmentation
- CAT Framework
- How It Works
- FAQ
- Testimonials
- Call To Action
- Lead Capture Form
- Footer

The layout has been checked and adjusted for:

- Desktop
- Tablet
- Mobile

Accessibility improvements include:

- Semantic HTML
- Proper heading hierarchy
- Keyboard accessibility
- Visible focus states
- Accessible FAQ accordion (`aria-expanded`)
- Form labels on every field

---

# Bonus Feature

A Lead Capture Form has been implemented.

The form collects:

- Name
- Email
- Company
- Team size
- What they're looking to upskill (interest)

The data is submitted through a **Next.js API Route** (`/api/leads`), with basic server-side validation on required fields and email format.

For local development, submissions are stored inside a JSON file (`data/leads.json`). Note: this works locally and in `next dev`, but Vercel's production runtime has a read-only filesystem, so submissions won't persist once deployed — see "Improvements" below.

---

# AI Usage

AI tools (Claude) were used to accelerate development by assisting with project scaffolding, implementation suggestions, debugging, and documentation. Every AI-generated code snippet was carefully reviewed, tested, modified where necessary, and integrated only after manual verification to ensure code quality, correctness, maintainability, and alignment with the project requirements.

### AI assisted with

- Initial project scaffolding, including the Next.js App Router setup, Tailwind CSS configuration, and reusable component structure.
- Assisting in recreating the component hierarchy after analyzing screenshots of the reference website.
- Tailwind CSS layout suggestions and responsive UI improvements.
- Implementing the bonus Lead Capture feature using a Next.js API Route.
- Debugging build issues and browser-specific styling problems.
- Preparing and organizing the project documentation and README.

### Debugging and Issue Resolution

- Identified a Next.js font-loading dependency that required network access during the production build. Verified that the application compiled successfully after resolving the issue and confirmed the remaining build process functioned correctly.
- Resolved an issue where form input text became invisible on macOS when the browser automatically applied dark styling to native input elements. This was fixed by explicitly setting `color-scheme: light` in the global stylesheet and applying dedicated text color classes to all form fields.

### Manual Development & Verification

- Refined and personalized the page content to create a more realistic product experience instead of generic placeholder text.
- Selected the final color palette, typography, spacing, and overall visual design.
- Organized the application into reusable React components with a clean and maintainable folder structure.
- Implemented and validated the Lead Capture form logic.
- Improved accessibility using semantic HTML, proper labels, focus states, and ARIA attributes.
- Verified responsiveness across mobile, tablet, and desktop breakpoints.
- Performed manual testing, code review, debugging, and production build verification throughout development.
- Refactored AI-generated code where necessary to improve readability, maintainability, and consistency.

---

## What I Learned

This project strengthened my understanding of:

- Building scalable applications using Next.js App Router.
- Designing reusable and maintainable React components.
- Creating responsive layouts with Tailwind CSS.
- Integrating frontend forms with backend API routes.
- Structuring a project for scalability, readability, and maintainability.
- Using AI tools responsibly to improve productivity while maintaining full ownership of the final implementation through manual review, testing, and refinement.
---

# Challenges Faced

- The reference site being a client-rendered SPA meant I couldn't just scrape it — had to work from screenshots section by section, which took longer than a normal clone but meant fewer inaccuracies.
- Matching the real site's structure while still keeping every section as a properly reusable component.
- Deciding what to do about the real client logos (see Project Approach) without just copying them or leaving the section empty.
- Handling the Vercel read-only filesystem limitation for the bonus lead form without overengineering a database for what's ultimately a demo feature.

---

# Improvements With More Time

- Store lead data in MongoDB or Supabase so it survives on Vercel's production filesystem.
- Move section content (domains, testimonials, FAQ) into a lightweight CMS instead of static arrays.
- Add subtle scroll-triggered animation on the Stats numbers and Accredian Edge grid.
- Add component tests (Vitest + React Testing Library) for the lead form's validation states.
- Run a full Lighthouse/axe accessibility audit.
- Replace the hero's SVG illustration with a licensed photo.

---

# Performance

- Component-level code splitting via Next.js App Router
- Minimal client-side JavaScript — most components are server components by default; only the interactive ones (Navbar, FAQ, Testimonials, LeadCaptureForm) are client components
- Tailwind's utility classes keep the CSS bundle small
- Semantic HTML throughout

---



# Future Enhancements

- Authentication
- Admin Dashboard
- Database Integration
- Email Notifications
- CMS Support
- Analytics Dashboard

---

# Deployment

The application is deployed using **Vercel**.

To deploy:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Deploy.

No additional configuration is required.

---

# Author

**Maragoni Surya Prakash**

GitHub:
https://github.com/maragonisurya-hub

LinkedIn:
https://www.linkedin.com/in/maragoni-surya-prakash-bb100026a/

Email:
maragonisurya@gmail.com

---

Thank you for reviewing my submission.
Feedback is always appreciated.

