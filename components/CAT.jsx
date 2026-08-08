const AUDIENCE = [
  { title: 'Tech Professionals', detail: 'Enhance expertise, embrace tech, drive innovation.' },
  { title: 'Non-Tech Professionals', detail: 'Adapt digitally, collaborate in tech environments.' },
  { title: 'Emerging Professionals', detail: 'Develop powerful skills for rapid career growth.' },
  { title: 'Senior Professionals', detail: 'Strengthen leadership, enhance strategic decisions.' },
];

const FRAMEWORK = [
  { n: '01', title: 'Concept', detail: 'Foundational knowledge for deep subject understanding.' },
  { n: '02', title: 'Application', detail: 'Practical implementation through real-world scenarios.' },
  { n: '03', title: 'Tools', detail: 'Resources and techniques for effective skill mastery.' },
];

export default function CAT() {
  return (
    <section id="cat" className="bg-paper border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="bg-panel text-paper p-8 sm:p-10">
          <p className="eyebrow text-gold mb-2">Who should join?</p>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-8">
            Strategic skill enhancement
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {AUDIENCE.map((a) => (
              <div key={a.title}>
                <p className="font-display font-semibold text-base">{a.title}</p>
                <p className="text-sm text-paper/70 mt-1">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="eyebrow text-teal mb-3">Our proven approach to learning excellence</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
            The CAT framework
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {FRAMEWORK.map((f) => (
              <div key={f.n} className="border border-line bg-white p-6">
                <span className="stat-figure text-xs text-gold">{f.n}</span>
                <h3 className="font-display font-semibold text-lg mt-2">{f.title}</h3>
                <p className="text-sm text-muted mt-2">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
