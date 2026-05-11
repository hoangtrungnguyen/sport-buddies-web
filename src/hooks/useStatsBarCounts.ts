/**
 * useStatsBarCounts — grava-8a6d.3.3
 *
 * Fetches live court and booking counts from Supabase.
 * Fallback behavior (this task): if the Supabase call fails for any reason,
 * the hook immediately returns FALLBACK_COUNTS — no loading spinner is ever
 * shown to the user. The state is initialised with fallback values so the
 * component can render immediately, and only switches to live data on a
 * successful response.
 */

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export interface StatsBarCounts {
  courtCount: number;
  bookingCount: number;
  /** Always false from the caller's perspective — fallback renders immediately. */
  loading: boolean;
  error: string | null;
}

/** Hardcoded placeholder values shown when live data is unavailable. */
export const FALLBACK_COUNTS = {
  courtCount: 150,
  bookingCount: 5000,
} as const;

export function useStatsBarCounts(): StatsBarCounts {
  // Initialise with fallback so the component renders immediately without a spinner.
  const [courtCount, setCourtCount] = useState<number>(FALLBACK_COUNTS.courtCount);
  const [bookingCount, setBookingCount] = useState<number>(FALLBACK_COUNTS.bookingCount);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchCounts() {
      try {
        const [courtsResult, bookingsResult] = await Promise.all([
          supabase
            .from('courts')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'approved'),
          supabase
            .from('bookings')
            .select('*', { count: 'exact', head: true }),
        ]);

        if (cancelled) return;

        if (courtsResult.error) {
          throw new Error(`Courts fetch failed: ${courtsResult.error.message}`);
        }
        if (bookingsResult.error) {
          throw new Error(`Bookings fetch failed: ${bookingsResult.error.message}`);
        }

        // Live data arrived — upgrade from fallback to real counts.
        setCourtCount(courtsResult.count ?? FALLBACK_COUNTS.courtCount);
        setBookingCount(bookingsResult.count ?? FALLBACK_COUNTS.bookingCount);
        setError(null);
      } catch (err) {
        if (cancelled) return;
        // Keep the already-rendered fallback values; just record the error.
        const message = err instanceof Error ? err.message : 'Unknown error';
        setError(message);
        if (import.meta.env.DEV) {
          console.error('[useStatsBarCounts] Supabase fetch failed, showing fallback:', message);
        }
        // courtCount/bookingCount remain at FALLBACK_COUNTS — no setState needed.
      }
    }

    fetchCounts();

    return () => {
      cancelled = true;
    };
  }, []);

  // loading is always false: fallback renders immediately on mount.
  return { courtCount, bookingCount, loading: false, error };
}
