const EDGE_POINTS = [
  { n: '01', title: 'Tailored Solutions', detail: "Programs customized to your organization's goals and challenges." },
  { n: '02', title: 'Expert Guidance', detail: 'Learn from industry leaders with real-world success.' },
  { n: '03', title: 'Innovative Framework', detail: 'Proprietary methods for impactful, application-driven results.' },
  { n: '04', title: 'Advanced Technology', detail: 'State-of-the-art LMS for seamless learning experiences.' },
  { n: '05', title: 'Diverse Offerings', detail: 'Courses across industries, skill levels, and emerging fields.' },
  { n: '06', title: 'Proven Impact', detail: 'Trusted by leading organizations for measurable ROI.' },
  { n: '07', title: 'Flexible Delivery', detail: 'Online and offline options tailored to your needs.' },
];

export default function AccredianEdge() {
  return (
    <section id="edge" className="bg-white border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <p className="eyebrow text-teal mb-3 text-center">Key aspects of our strategic training</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-12 text-center">
          The Accredian Edge
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EDGE_POINTS.map((p) => (
            <div key={p.n} className="border border-line p-5 sm:p-6">
              <span className="stat-figure text-xs text-gold">{p.n}</span>
              <h3 className="font-display font-semibold text-base mt-2">{p.title}</h3>
              <p className="text-sm text-muted mt-2">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
