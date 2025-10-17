'use client';

import { useState, type FormEvent } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function NewsletterSignup() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const email = String(form.get('email') ?? '').trim();

    if (!email) {
      setErrorMessage('Please add your email before subscribing.');
      setFormState('error');
      return;
    }

    try {
      setFormState('loading');
      setErrorMessage('');

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.error ?? 'Unable to subscribe right now.');
      }

      setFormState('success');
      formElement.reset();
    } catch (error) {
      setFormState('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unexpected error occurred.');
    }
  }

  return (
    <section id="updates" className="container newsletter">
      <div className="newsletter__inner glass">
        <div className="newsletter__content">
          <h2>Stay in the Meridian orbit</h2>
          <p>
            Receive curated strategy frameworks, delivery templates, and product updates crafted for high-performing
            teams.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@stellar.team"
            autoComplete="email"
            disabled={formState === 'loading'}
            required
          />
          <button className="button" type="submit" disabled={formState === 'loading'}>
            {formState === 'loading' ? 'Subscribing...' : 'Join the updates'}
          </button>
          <p
            className={`newsletter__status ${formState === 'error' ? 'error' : ''} ${
              formState === 'success' ? 'success' : ''
            }`}
            role="status"
          >
            {formState === 'success' && 'Thanks for joining! Check your inbox for a welcome message soon.'}
            {formState === 'error' && errorMessage}
          </p>
        </form>
      </div>
    </section>
  );
}
