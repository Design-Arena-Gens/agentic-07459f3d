import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { NewsletterSignup } from '../NewsletterSignup';

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('NewsletterSignup', () => {
  it('shows an error when submitting without an email address', async () => {
    const user = userEvent.setup();
    render(<NewsletterSignup />);

    await user.click(screen.getByRole('button', { name: /join the updates/i }));

    expect(
      screen.getByText(/please add your email before subscribing/i)
    ).toBeInTheDocument();
  });

  it('confirms subscription when the API call succeeds', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    });

    vi.stubGlobal('fetch', fetchMock);

    render(<NewsletterSignup />);

    await user.type(screen.getByLabelText(/email address/i), 'explorer@meridian.io');
    await user.click(screen.getByRole('button', { name: /join the updates/i }));

    await waitFor(() =>
      expect(
        screen.getByText(/thanks for joining! check your inbox for a welcome message soon./i)
      ).toBeInTheDocument()
    );

    expect(fetchMock).toHaveBeenCalledWith(
      '/api/newsletter',
      expect.objectContaining({
        method: 'POST'
      })
    );
  });
});
