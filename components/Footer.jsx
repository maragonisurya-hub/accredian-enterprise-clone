const ABOUT_LINKS = ['About', 'Blog', 'Why Accredian'];

function SocialIcon({ label, path }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:border-white/50 transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d={path} />
      </svg>
    </a>
  );
}

const SOCIALS = [
  { label: 'Facebook', path: 'M13 22v-8h3l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.1H7v3h2.6V22h3.4z' },
  { label: 'LinkedIn', path: 'M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.5 4.78 5.8V21h-4v-5.6c0-1.35-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.7H9z' },
  { label: 'Twitter', path: 'M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4 4 0 0 0-7 3.7A11.5 11.5 0 0 1 3.4 4.6a4 4 0 0 0 1.3 5.4c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.3 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8 8 0 0 1 2 18.4a11.4 11.4 0 0 0 6.3 1.9c7.5 0 11.7-6.4 11.7-11.9v-.5c.8-.6 1.5-1.3 2-2z' },
  { label: 'Instagram', path: 'M12 2c-2.7 0-3.1 0-4.1.06-1.1.05-1.8.22-2.5.47a5 5 0 0 0-1.8 1.17A5 5 0 0 0 2.5 5.5c-.25.7-.42 1.4-.47 2.5C2 9 2 9.4 2 12s0 3.1.06 4.1c.05 1.1.22 1.8.47 2.5.26.7.6 1.3 1.17 1.8.5.57 1.1.9 1.8 1.17.7.25 1.4.42 2.5.47C8.9 22 9.3 22 12 22s3.1 0 4.1-.06c1.1-.05 1.8-.22 2.5-.47a5 5 0 0 0 1.8-1.17 5 5 0 0 0 1.17-1.8c.25-.7.42-1.4.47-2.5.06-1 .06-1.4.06-4.1s0-3.1-.06-4.1c-.05-1.1-.22-1.8-.47-2.5a5 5 0 0 0-1.17-1.8 5 5 0 0 0-1.8-1.17c-.7-.25-1.4-.42-2.5-.47C15.1 2 14.7 2 12 2zm0 1.8c2.6 0 3 0 4 .06.97.04 1.5.2 1.85.34.46.18.8.4 1.15.74.34.35.56.68.74 1.14.14.35.3.9.34 1.85.05 1.05.06 1.37.06 4.01s0 2.96-.06 4c-.04.97-.2 1.5-.34 1.85-.18.46-.4.8-.74 1.15-.35.34-.68.56-1.15.74-.34.14-.88.3-1.85.34-1.05.05-1.36.06-4 .06s-2.96 0-4-.06c-.97-.04-1.5-.2-1.85-.34a3.2 3.2 0 0 1-1.15-.74 3.2 3.2 0 0 1-.74-1.15c-.14-.34-.3-.88-.34-1.85C3.8 15 3.8 14.66 3.8 12s0-2.96.06-4c.04-.97.2-1.5.34-1.85.18-.46.4-.8.74-1.15.35-.34.68-.56 1.15-.74.34-.14.88-.3 1.85-.34C9.04 3.8 9.4 3.8 12 3.8zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7zm6.55-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z' },
  { label: 'YouTube', path: 'M21.6 7.2s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4h0s-3.9 0-6.7.1c-.4.1-1.3.1-2.1.9-.6.7-.8 2.2-.8 2.2S2 9 2 10.8v1.4c0 1.8.2 3.6.2 3.6s.2 1.5.8 2.2c.8.9 1.9.8 2.4.9 1.7.2 7.6.3 7.6.3s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.8.2-3.6v-1.4c0-1.8-.2-3.6-.2-3.6zM9.8 14.6V8.9l5.6 2.9-5.6 2.8z' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <p className="font-display font-semibold text-lg">
              accredian<span className="text-gold">.</span>enterprise
            </p>
            <p className="text-xs text-paper/50 mt-1">credentials that matter (clone)</p>
            <div className="flex gap-2 mt-5">
              {SOCIALS.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </div>

          <div className="text-right">
            <a
              href="#lead-form"
              className="focus-ring inline-flex items-center rounded-sm bg-gold text-ink font-medium px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Enquire Now
            </a>
            <p className="text-xs text-paper/50 mt-2">Speak with our advisor</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 pt-8">
          <div>
            <p className="eyebrow text-paper/50 mb-4">Accredian</p>
            <ul className="space-y-2.5">
              {ABOUT_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-paper/80 hover:text-paper focus-ring">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-paper/50 mb-4">Contact us</p>
            <p className="text-sm text-paper/80">
              Email us:{' '}
              <a href="mailto:enterprise@example.com" className="hover:text-paper focus-ring">
                enterprise@example.com
              </a>
            </p>
            <p className="text-sm text-paper/80 mt-2">
              This is a portfolio recreation built for a Full Stack Developer
              Intern assignment — not affiliated with or endorsed by the real
              Accredian.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-paper/50">
          <p>© {new Date().getFullYear()} Accredian Enterprise (Clone). Assignment project only.</p>
        </div>
      </div>
    </footer>
  );
}
