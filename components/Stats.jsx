const STATS = [
  { value: '10K+', label: 'Professionals trained for exceptional career success' },
  { value: '200+', label: 'Sessions delivered with unmatched learning excellence' },
  { value: '5K+', label: 'Active learners engaged in dynamic courses' },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-white border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
        <p className="eyebrow text-teal mb-3">Our track record</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
          The numbers behind our success
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="stat-figure text-4xl sm:text-5xl text-teal mb-3">{s.value}</p>
              <p className="text-sm text-muted max-w-[220px] mx-auto">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
