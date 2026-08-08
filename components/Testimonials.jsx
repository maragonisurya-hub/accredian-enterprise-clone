'use client';

import { useState } from 'react';

const TESTIMONIALS = [
  {
    org: 'Nimbus Retail',
    quote:
      'The capstone was graded against our own repo, not a generic dataset. That single decision is why the team actually retained the material.',
  },
  {
    org: 'Kestrel Labs',
    quote:
      "Accredian's approach consistently goes the extra mile — the curriculum stayed aligned to what our team needed at every stage.",
  },
  {
    org: 'Northstar Bank',
    quote:
      'We stopped measuring training by attendance and started measuring it by what shipped afterward. That switch changed how our L&D team operates.',
  },
  {
    org: 'Orbital Health',
    quote:
      'Cohort pacing matched our sprint cadence, so nobody had to choose between the course and their actual workload.',
  },
];

const PAGE_SIZE = 2;

export default function Testimonials() {
  const pageCount = Math.ceil(TESTIMONIALS.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const visible = TESTIMONIALS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="voices" className="bg-white border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
        <p className="eyebrow text-teal mb-3">What our clients are saying</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          Testimonials from our partners
        </h2>
        <p className="text-xs text-muted mb-10">
          (Placeholder client names for this assignment — see README)
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
          {visible.map((t) => (
            <figure key={t.org} className="border border-line p-6">
              <p className="font-display font-semibold text-sm text-teal mb-3">{t.org}</p>
              <blockquote className="text-sm leading-relaxed text-ink/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonials page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`focus-ring h-2 w-2 rounded-full transition-colors ${
                page === i ? 'bg-teal' : 'bg-line'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
