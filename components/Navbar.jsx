'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Stats', href: '#stats' },
  { label: 'Clients', href: '#clients' },
  { label: 'Accredian Edge', href: '#edge' },
  { label: 'CAT', href: '#cat' },
  { label: 'How It Works', href: '#journey' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Testimonials', href: '#voices' },
];

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      {/* scroll progress — echoes the learner-journey bar used in the hero */}
      <div className="h-[3px] w-full bg-line">
        <div
          className="h-full bg-gold transition-[width] duration-150"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>

      <nav className="max-w-content mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight focus-ring">
          accredian<span className="text-gold">.</span>enterprise
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink/80">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ink transition-colors focus-ring">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#lead-form"
            className="focus-ring inline-flex items-center rounded-sm bg-ink text-paper text-sm font-medium px-4 py-2 hover:bg-panel transition-colors"
          >
            Talk to us
          </a>
        </div>

        <button
          className="md:hidden focus-ring p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-[2px] bg-ink mb-1.5" />
          <span className="block w-6 h-[2px] bg-ink mb-1.5" />
          <span className="block w-4 h-[2px] bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-paper px-5 pb-5 pt-2">
          <ul className="flex flex-col gap-3 font-body text-sm">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 focus-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#lead-form"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center rounded-sm bg-ink text-paper text-sm font-medium px-4 py-2 focus-ring"
              >
                Talk to us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
