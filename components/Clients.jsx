// NOTE: The reference site names real client companies with their logos.
// This clone uses placeholder company names instead — using the real logos/names
// here would misrepresent an actual partnership that doesn't exist for this
// assignment project. See README for the reasoning.
const CLIENTS = ['Nimbus Retail', 'Kestrel Labs', 'Northstar Bank', 'Orbital Health', 'Verdant Foods', 'Fintra'];

export default function Clients() {
  return (
    <section id="clients" className="bg-paper border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
        <p className="eyebrow text-teal mb-3">Our proven partnerships</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          Successful collaborations with the industry&apos;s best
        </h2>
        <p className="text-xs text-muted mb-12">
          (Placeholder client names for this assignment — see README)
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center max-w-4xl mx-auto">
          {CLIENTS.map((name) => (
            <div
              key={name}
              className="font-display text-sm sm:text-base text-ink/50 tracking-tight"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
