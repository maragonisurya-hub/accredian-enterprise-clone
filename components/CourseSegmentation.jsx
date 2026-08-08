const SEGMENTS = [
  { label: 'Program Specific', detail: 'Certificate, Executive, Post Graduate Certificate' },
  { label: 'Industry Specific', detail: 'IT, Healthcare, Retail, Finance, Education, Manufacturing' },
  { label: 'Topic Specific', detail: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud' },
  { label: 'Level Specific', detail: 'Senior Leadership, Mid-Career Professionals, Freshers' },
];

export default function CourseSegmentation() {
  return (
    <section className="bg-white border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
        <p className="eyebrow text-teal mb-3">Explore custom-fit courses designed to address every professional focus</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
          Tailored course segmentation
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SEGMENTS.map((s) => (
            <div key={s.label} className="border border-line p-6 text-left">
              <h3 className="font-display font-semibold text-lg text-teal">{s.label}</h3>
              <p className="text-sm text-muted mt-2">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
