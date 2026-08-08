import LeadCaptureForm from './LeadCaptureForm';

export default function CTA() {
  return (
    <section id="lead-form" className="bg-teal text-paper border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
              Want to learn more about our training solutions?
            </h2>
            <p className="text-sm text-paper/80 mt-2">Get expert guidance for your team&apos;s success.</p>
          </div>
          <a
            href="#lead-form-fields"
            className="focus-ring shrink-0 inline-flex items-center justify-center rounded-sm bg-paper text-teal font-medium px-6 py-3 hover:bg-paper/90 transition-colors"
          >
            Contact us
          </a>
        </div>

        <div id="lead-form-fields" className="mt-10 max-w-xl">
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
