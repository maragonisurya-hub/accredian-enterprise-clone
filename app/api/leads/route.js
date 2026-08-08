import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Bonus requirement: store lead-capture submissions via a Next.js API route.
// For this assignment we persist to a local JSON file so the flow is fully
// runnable without provisioning a database. Swapping this for Mongo/Supabase
// later only means changing what happens inside POST — the form and the
// route contract stay the same.

const DATA_FILE = path.join(process.cwd(), 'data', 'leads.json');

async function readLeads() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function writeLeads(leads) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8');
}

export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.company) {
    return NextResponse.json(
      { error: 'name, email and company are required.' },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(body.email)) {
    return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 });
  }

  const lead = {
    id: Date.now().toString(36),
    name: body.name.trim(),
    email: body.email.trim(),
    company: body.company.trim(),
    teamSize: body.teamSize || null,
    interest: body.interest || null,
    submittedAt: new Date().toISOString(),
  };

  const leads = await readLeads();
  leads.push(lead);
  await writeLeads(leads);

  return NextResponse.json({ ok: true, lead }, { status: 201 });
}

export async function GET() {
  const leads = await readLeads();
  return NextResponse.json({ count: leads.length, leads });
}
