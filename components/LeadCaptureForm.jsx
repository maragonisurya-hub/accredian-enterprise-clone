'use client';

import { useState } from 'react';

const INITIAL = { name: '', email: '', company: '', teamSize: '', interest: '' };

export default function LeadCaptureForm() {
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const update = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      setValues(INITIAL);
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-line bg-white p-8 text-center">
        <p className="stat-figure text-gold text-xs mb-2">SUBMITTED</p>
        <h3 className="font-display text-xl font-semibold">Request received.</h3>
        <p className="text-sm text-muted mt-2">
          A curriculum lead will reach out within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="focus-ring mt-5 text-sm font-medium text-teal hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-white p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            required
            value={values.name}
            onChange={update('name')}
            className="focus-ring w-full border border-line px-3 py-2 text-sm bg-paper text-ink"
            placeholder="Jordan Rao"
          />
        </Field>
        <Field label="Work email" htmlFor="email">
          <input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={update('email')}
            className="focus-ring w-full border border-line px-3 py-2 text-sm bg-paper text-ink"
            placeholder="jordan@company.com"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Company" htmlFor="company">
          <input
            id="company"
            required
            value={values.company}
            onChange={update('company')}
            className="focus-ring w-full border border-line px-3 py-2 text-sm bg-paper text-ink"
            placeholder="Nimbus Retail"
          />
        </Field>
        <Field label="Team size" htmlFor="teamSize">
          <select
            id="teamSize"
            value={values.teamSize}
            onChange={update('teamSize')}
            className="focus-ring w-full border border-line px-3 py-2 text-sm bg-paper text-ink"
          >
            <option value="">Select…</option>
            <option value="1-20">1–20</option>
            <option value="21-100">21–100</option>
            <option value="101-500">101–500</option>
            <option value="500+">500+</option>
          </select>
        </Field>
      </div>

      <Field label="What are you looking to upskill?" htmlFor="interest">
        <input
          id="interest"
          value={values.interest}
          onChange={update('interest')}
          className="focus-ring w-full border border-line px-3 py-2 text-sm bg-paper text-ink"
          placeholder="e.g. Frontend team moving to Next.js"
        />
      </Field>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="focus-ring w-full sm:w-auto rounded-sm bg-ink text-paper font-medium px-6 py-3 hover:bg-panel transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Request a curriculum call'}
      </button>
    </form>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="block text-xs font-medium text-muted mb-1.5">{label}</span>
      {children}
    </label>
  );
}
