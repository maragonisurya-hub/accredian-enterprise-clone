'use client';

import { useState } from 'react';

const TABS = {
  'About the Course': [
    {
      q: 'What types of corporate training programs does Accredian offer?',
      a: 'Programs span Leadership Development, Tech & Data, Generative AI, Fintech, Digital Business, Product Innovation and Operations Management, delivered as Foundational, Advanced or Executive tracks.',
    },
    {
      q: 'What domain specializations are available?',
      a: 'Seven domains are covered — see the "Our Domain Expertise" section above for the full list and what each one focuses on.',
    },
  ],
  'About the Delivery': [
    {
      q: 'Is training delivered online, offline, or both?',
      a: 'Both — programs are designed for flexible delivery, so cohorts can run fully online, fully in-person, or a blended format depending on what fits the team.',
    },
    {
      q: 'How long does a typical cohort run?',
      a: 'Most cohorts run between 4 and 10 weeks depending on the domain and tier, with live sessions plus async review built into the schedule.',
    },
  ],
  Miscellaneous: [
    {
      q: 'What is the minimum team size for a dedicated cohort?',
      a: 'Dedicated enterprise cohorts are typically scoped for small-to-mid-size teams and above. Smaller teams can usually join a shared cohort schedule instead.',
    },
    {
      q: 'Can training integrate with our corporate LMS?',
      a: 'Yes — completion data can be integrated with your existing LMS, so learner progress shows up alongside your other internal training records.',
    },
  ],
};

export default function FAQ() {
  const tabNames = Object.keys(TABS);
  const [activeTab, setActiveTab] = useState(tabNames[0]);
  const [openIndex, setOpenIndex] = useState(0);

  const items = TABS[activeTab];

  const selectTab = (tab) => {
    setActiveTab(tab);
    setOpenIndex(0);
  };

  return (
    <section id="faq" className="bg-paper border-b border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <p className="eyebrow text-teal mb-3 text-center">Got questions? We have answers.</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-10 text-center">
          Frequently asked questions
        </h2>

        <div className="grid sm:grid-cols-[220px_1fr] gap-6 max-w-3xl mx-auto">
          <div className="flex sm:flex-col gap-2">
            {tabNames.map((tab) => (
              <button
                key={tab}
                onClick={() => selectTab(tab)}
                className={`focus-ring text-left text-sm px-4 py-3 border transition-colors ${
                  activeTab === tab
                    ? 'border-teal text-teal font-medium bg-white'
                    : 'border-line text-muted hover:border-ink'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div>
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q} className="border-b border-line">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="focus-ring w-full flex items-center justify-between text-left py-4 gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-sm sm:text-base">{item.q}</span>
                    <span className="stat-figure text-gold shrink-0">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <p className="text-sm text-muted leading-relaxed pb-4 pr-6">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
