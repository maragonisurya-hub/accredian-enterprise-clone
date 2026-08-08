const CHECKS = ['Tailored Solutions', 'Industry Insights', 'Expert Guidance'];

export default function Hero() {
  return (
    <section id="top" className="border-b border-line bg-paper">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="border border-line bg-white overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] font-semibold tracking-tight">
              Next-Gen <span className="text-teal">Expertise</span> For Your{' '}
              <span className="text-teal">Enterprise</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted max-w-md">
              Cultivate high-performance teams through expert learning.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {CHECKS.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-ink/80">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-teal text-teal text-xs shrink-0">
                    ✓
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#lead-form"
                className="focus-ring inline-flex items-center rounded-sm bg-teal text-paper font-medium px-6 py-3 hover:bg-panel transition-colors"
              >
                Enquire Now
              </a>
            </div>
          </div>

          <div className="bg-line/40 min-h-[260px] flex items-center justify-center p-6 sm:p-10">
            {/* Original SVG illustration (two professionals, laptop) — no
                external image dependency, so it always renders, with zero
                licensing risk. Swap for a real photo asset later if you want
                one; see README for how. */}
            <svg
              viewBox="0 0 400 300"
              className="w-full max-w-sm h-auto"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Illustration of two professionals collaborating with a laptop"
            >
              <rect x="0" y="0" width="400" height="300" fill="none" />

              {/* ground shadow */}
              <ellipse cx="200" cy="272" rx="140" ry="14" fill="#12151C" opacity="0.06" />

              {/* figure 1 (left) */}
              <g>
                <rect x="120" y="150" width="70" height="100" rx="14" fill="#255C55" />
                <circle cx="155" cy="122" r="30" fill="#E7B15A" />
                <rect x="140" y="200" width="18" height="70" rx="8" fill="#12151C" opacity="0.85" />
                <rect x="167" y="200" width="18" height="70" rx="8" fill="#12151C" opacity="0.85" />
              </g>

              {/* figure 2 (right) */}
              <g>
                <rect x="215" y="140" width="75" height="110" rx="14" fill="#12151C" />
                <circle cx="252" cy="112" r="31" fill="#C9971F" opacity="0.85" />
                <rect x="228" y="212" width="19" height="70" rx="8" fill="#255C55" />
                <rect x="257" y="212" width="19" height="70" rx="8" fill="#255C55" />
              </g>

              {/* laptop between them */}
              <g>
                <rect x="165" y="188" width="70" height="46" rx="4" fill="#EEF0F4" stroke="#12151C" strokeWidth="2" />
                <rect x="172" y="196" width="56" height="30" rx="2" fill="#255C55" />
                <rect x="150" y="232" width="100" height="8" rx="3" fill="#12151C" />
              </g>

              {/* small floating accents (data / learning motif) */}
              <circle cx="90" cy="90" r="5" fill="#C9971F" />
              <circle cx="320" cy="80" r="4" fill="#255C55" />
              <rect x="300" y="150" width="22" height="22" rx="4" fill="#C9971F" opacity="0.25" />
              <rect x="70" y="170" width="18" height="18" rx="4" fill="#255C55" opacity="0.2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
