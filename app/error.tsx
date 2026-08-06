'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Route error boundary caught an error:', error);
  }, [error]);

  return (
    <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '40px 20px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--navy)', marginBottom: '16px' }}>
          Unable to load page content
        </h2>
        <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, marginBottom: '28px' }}>
          We encountered an issue displaying this page. Please refresh or try again.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button
            onClick={() => reset()}
            className="button button-primary"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            Try Again
          </button>
          <a href="/" className="button button-secondary">
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
