'use client';

import { useState, useEffect, useCallback } from 'react';

export function useCsrf() {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchToken = useCallback(async () => {
    try {
      const response = await fetch('/api/csrf');
      if (response.ok) {
        const data = await response.json();
        setCsrfToken(data.token);
      }
    } catch (error) {
      console.error('Failed to fetch CSRF token:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  // CSRFヘッダーを含むfetchのラッパー
  const fetchWithCsrf = useCallback(
    async (url: string, options: RequestInit = {}): Promise<Response> => {
      const headers = new Headers(options.headers);
      if (csrfToken) {
        headers.set('x-csrf-token', csrfToken);
      }
      return fetch(url, { ...options, headers });
    },
    [csrfToken]
  );

  return { csrfToken, loading, fetchWithCsrf, refreshToken: fetchToken };
}
