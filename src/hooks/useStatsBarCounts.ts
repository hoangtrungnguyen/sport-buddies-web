import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export interface StatsBarCounts {
  courtCount: number | null;
  bookingCount: number | null;
  loading: boolean;
  error: string | null;
}

export function useStatsBarCounts(): StatsBarCounts {
  const [courtCount, setCourtCount] = useState<number | null>(null);
  const [bookingCount, setBookingCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchCounts() {
      setLoading(true);
      setError(null);

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

        setCourtCount(courtsResult.count ?? 0);
        setBookingCount(bookingsResult.count ?? 0);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchCounts();

    return () => {
      cancelled = true;
    };
  }, []);

  return { courtCount, bookingCount, loading, error };
}
