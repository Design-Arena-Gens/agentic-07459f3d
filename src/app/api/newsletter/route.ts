import { NextResponse } from 'next/server';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === 'string' ? body.email.trim() : '';

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  // Simulate persistence for demonstration purposes.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return NextResponse.json({ success: true, message: 'Subscription registered.' });
}
