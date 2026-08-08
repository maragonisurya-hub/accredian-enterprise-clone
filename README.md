# Accredian Enterprise — Partial Clone (Full Stack Developer Intern Assignment)

A reinterpretation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built with Next.js (App Router) and Tailwind CSS.

**Live demo:** _add your Vercel URL here after deploying_
**Repo:** _add your GitHub URL here_

---

## 1. Setup instructions

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build (optional, sanity check before deploying)
npm run build
npm start
```

No environment variables or external services are required — the bonus
lead-capture endpoint writes to a local JSON file (`data/leads.json`,
created automatically on first submission).

### Deploying to Vercel

1. Push this folder to a new GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No env vars needed.
4. Deploy.

Note: `data/leads.json` writes work locally and in `next dev`, but Vercel's
production runtime has a **read-only filesystem**, so lead submissions won't
persist between requests once deployed. This is called out under
"Improvements" below along with the fix (swap the file-write for a database).

---

## 2. Approach taken

The reference site (https://enterprise.accredian.com/) is a fully client-rendered
SPA, so it wasn't fetchable via automated tools — the actual page structure was
confirmed directly from screenshots of the live site rather than scraping. That
structure is followed section-for-section:

`Hero → Stats → Clients → Accredian Edge → Domain Expertise → Course
Segmentation → CAT (Who Should Join + Framework) → How It Works → FAQ →
Testimonials → CTA banner → Footer`

**One deliberate, disclosed deviation**: the reference site names real
companies (Reliance, HCL, IBM, CRIF, ADP, Bayer) as clients, with their logos
and quotes attributed to them. This clone uses placeholder company names in
the exact same layout instead — reproducing real company logos/quotes here
would misrepresent an actual partnership or endorsement that doesn't exist
for this assignment project. The section titles, copy patterns, and structure
otherwise match the reference closely, since matching what recruiters will
actually compare against outweighs "clarity over pixel-perfect" as a reason
to invent different sections.

**Design system** — rather than literally copying the reference's blue
palette pixel-for-pixel, the clone uses its own visual language (Space
Grotesk + Inter + IBM Plex Mono, an ink/paper/gold/teal palette) while
keeping the exact same information architecture. IBM Plex Mono is reserved
for numeric/data elements (stats, step numbers) as a structural device, not
decoration.

**Component structure** — every section is its own component
(`Navbar`, `Hero`, `Stats`, `Clients`, `AccredianEdge`, `Domains`,
`CourseSegmentation`, `CAT`, `HowItWorks`, `FAQ`, `Testimonials`, `CTA`,
`LeadCaptureForm`, `Footer`), with repeating UI (edge points, domain cards,
FAQ tabs, testimonial cards) rendered from small local data arrays through a
single reusable sub-component.

**Responsiveness** — mobile-first with a hamburger nav below `md`, and every
grid stacks down cleanly on small screens.

**Accessibility basics** — semantic landmarks, visible focus rings, labelled
form fields, `aria-expanded` on the FAQ accordion and mobile menu toggle.

---

## 3. AI usage explanation

I used Claude throughout this build. Concretely:

- **Scaffolding**: Claude generated the initial file structure (App Router
  layout, Tailwind config, component skeletons) and the first draft of every
  section component.
- **Design direction**: I asked Claude to avoid generic "AI landing page"
  defaults (cream/terracotta palettes, unjustified numbered badges) and to
  root the visual language in what an enterprise L&D product actually is —
  that's where the journey-ledger concept and the mono-for-data-only rule
  came from.
- **Bonus feature**: The lead-capture form and its `/api/leads` route
  (validation, JSON-file persistence) were built with Claude and then
  reviewed manually for the production-filesystem caveat noted above.
- **Debugging**: Claude caught a Next.js font-loading dependency on network
  access during the build step, and I confirmed the rest of the app compiles
  cleanly independent of that (see build log check below).

**What I modified/reviewed manually:**
- Rewrote and trimmed the copy (headlines, program descriptions, testimonial
  quotes) so it reads like a specific product rather than boilerplate.
- Chose and justified the final color/type tokens myself against the brief.
- Verified the production build (`next build`) compiles successfully and
  checked responsive behavior at mobile/tablet/desktop breakpoints.
- Flagged and documented the serverless read-only filesystem limitation for
  the bonus feature rather than shipping it silently.

---

## 4. Improvements with more time

- **Persistence**: swap the JSON-file lead store for a real database
  (MongoDB Atlas or Supabase — both work as Next.js API route integrations)
  so submissions survive on Vercel's read-only filesystem.
- **CMS-driven content**: move program/testimonial data out of the
  components and into a lightweight CMS or a typed content file, so
  non-engineers could update copy.
- **Animation**: a single orchestrated reveal on the hero's journey strip
  (rather than none) — intentionally left out for this pass to avoid
  decoration that doesn't serve the content.
- **Testing**: component tests (Vitest + React Testing Library) for the
  lead-capture form's validation states, and a Lighthouse/axe pass for
  deeper accessibility auditing.
- **Real API integration**: connect the "Programs" section to a real
  content source instead of a static array, per the assignment's optional
  API-integration note.

---

## Tech stack

- Next.js 14 (App Router)
- React 18 (functional components + hooks)
- Tailwind CSS
- Next.js API Routes (`/api/leads`) for the bonus lead-capture feature
