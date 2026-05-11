/**
 * Tests for useStatsBarCounts — grava-8a6d.3.3 fallback behavior.
 *
 * AC:
 * 1. When Supabase call fails, return hardcoded fallback values immediately (no spinner).
 * 2. The hook never exposes loading=true from the caller's perspective when it falls back.
 * 3. Fallback values: courtCount >= 150, bookingCount >= 5000.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useStatsBarCounts, FALLBACK_COUNTS } from '../useStatsBarCounts';

// Mock the supabase client module before importing the hook
vi.mock('../../lib/supabaseClient', () => ({
  supabase: {
    from: vi.fn(),
  },
}));

import { supabase } from '../../lib/supabaseClient';

describe('useStatsBarCounts — fallback behavior (grava-8a6d.3.3)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('exposes FALLBACK_COUNTS constants with courtCount>=150 and bookingCount>=5000', () => {
    expect(FALLBACK_COUNTS.courtCount).toBeGreaterThanOrEqual(150);
    expect(FALLBACK_COUNTS.bookingCount).toBeGreaterThanOrEqual(5000);
  });

  it('immediately returns fallback values when Supabase call rejects', async () => {
    // Arrange: make supabase.from(...).select(...) reject
    const mockSelect = vi.fn().mockReturnValue({
      eq: vi.fn().mockResolvedValue({ data: null, error: { message: 'Network error' }, count: null }),
    });
    const mockFrom = vi.fn().mockReturnValue({ select: mockSelect });
    vi.mocked(supabase.from).mockImplementation(mockFrom);

    // Act
    const { result } = renderHook(() => useStatsBarCounts());

    // Assert: initial render must show fallback values (not loading, not null)
    expect(result.current.courtCount).toBe(FALLBACK_COUNTS.courtCount);
    expect(result.current.bookingCount).toBe(FALLBACK_COUNTS.bookingCount);
    // loading must be false from the start (no spinner)
    expect(result.current.loading).toBe(false);
  });

  it('does not show loading=true at any point during an error path', async () => {
    // Arrange: supabase call rejects asynchronously
    const mockSelect = vi.fn().mockReturnValue({
      eq: vi.fn().mockRejectedValue(new Error('Connection refused')),
    });
    const mockFrom = vi.fn().mockReturnValue({ select: mockSelect });
    vi.mocked(supabase.from).mockImplementation(mockFrom);

    const loadingValues: boolean[] = [];
    const { result } = renderHook(() => {
      const stats = useStatsBarCounts();
      loadingValues.push(stats.loading);
      return stats;
    });

    // Wait for async to settle
    await waitFor(() => {
      // At least one render must have happened
      expect(loadingValues.length).toBeGreaterThan(0);
    });

    // loading must never have been true
    expect(loadingValues.every(v => v === false)).toBe(true);
    // Fallback values must be present
    expect(result.current.courtCount).toBe(FALLBACK_COUNTS.courtCount);
    expect(result.current.bookingCount).toBe(FALLBACK_COUNTS.bookingCount);
  });

  it('returns live data when Supabase call succeeds', async () => {
    // Arrange: successful responses
    const mockSelectCourts = {
      eq: vi.fn().mockResolvedValue({ data: null, error: null, count: 72 }),
    };
    const mockSelectBookings = {
      // bookings select has no eq filter
    };

    // We need to handle two different calls to supabase.from
    vi.mocked(supabase.from).mockImplementation((table: string) => {
      if (table === 'courts') {
        return {
          select: vi.fn().mockReturnValue(mockSelectCourts),
        } as any;
      }
      // bookings
      return {
        select: vi.fn().mockResolvedValue({ data: null, error: null, count: 8500 }),
      } as any;
    });

    const { result } = renderHook(() => useStatsBarCounts());

    // Initially shows fallback
    expect(result.current.courtCount).toBe(FALLBACK_COUNTS.courtCount);

    // After async resolves, shows live data
    await waitFor(() => {
      expect(result.current.courtCount).toBe(72);
    });
    expect(result.current.bookingCount).toBe(8500);
    expect(result.current.loading).toBe(false);
  });
});
