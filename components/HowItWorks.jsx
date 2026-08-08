const STEPS = [
  { n: '1', title: 'Skill Gap Analysis', detail: 'Assess team skill gaps and developmental needs.' },
  { n: '2', title: 'Customized Training Plan', detail: 'Create a tailored roadmap addressing organizational goals.' },
  { n: '3', title: 'Flexible Program Delivery', detail: 'Deliver adaptable programs aligned with industry and organizational needs.' },
];

export default function HowItWorks() {
  return (
    <section id="journey" className="bg-white border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
        <p className="eyebrow text-teal mb-3">A structured three-step approach to skill development</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
          How we deliver results that matter
        </h2>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {STEPS.map((s) => (
            <div key={s.n} className="border border-line bg-paper p-6 text-left relative">
              <span className="absolute -top-3 -left-3 flex h-7 w-7 items-center justify-center rounded-full bg-teal text-paper text-xs font-medium">
                {s.n}
              </span>
              <h3 className="font-display font-semibold text-base mt-3">{s.title}</h3>
              <p className="text-sm text-muted mt-2">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
