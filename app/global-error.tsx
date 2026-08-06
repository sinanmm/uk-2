'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Application Error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#0a192f', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
        <div style={{ padding: '40px 24px', maxWidth: '560px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>Something went wrong</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '28px' }}>
            An unexpected error occurred. Please try again or return to the homepage.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={() => reset()}
              style={{
                backgroundColor: '#82b83b',
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: 650,
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: 650,
                fontSize: '15px',
              }}
            >
              Go to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
