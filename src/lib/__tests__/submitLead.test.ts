/**
 * Tests for agent_code attribution in submitLead.ts
 *
 * These tests verify that:
 * 1. readAgentCode() reads the `agent` query param from the URL
 * 2. readAgentCode() returns null when param is absent
 * 3. submitLead() includes agent_code in the POST payload
 * 4. submitLead() sends agent_code = null when ?agent param is absent
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { readAgentCode, readUtmParams, LeadPayload } from '../submitLead';

// Helper to set window.location.search in tests
function setSearch(qs: string) {
  Object.defineProperty(window, 'location', {
    value: { search: qs },
    writable: true,
    configurable: true,
  });
}

describe('readAgentCode', () => {
  afterEach(() => {
    setSearch('');
  });

  it('returns the agent code when ?agent=CODE is present', () => {
    setSearch('?agent=ABCD1234');
    expect(readAgentCode()).toBe('ABCD1234');
  });

  it('returns null when ?agent param is absent', () => {
    setSearch('?utm_source=google');
    expect(readAgentCode()).toBeNull();
  });

  it('returns null when ?agent is empty string', () => {
    setSearch('?agent=');
    expect(readAgentCode()).toBeNull();
  });

  it('trims whitespace from agent code', () => {
    setSearch('?agent=  XYZ789  ');
    expect(readAgentCode()).toBe('XYZ789');
  });
});

describe('submitLead – agent_code in payload', () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(''),
    });
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    setSearch('');
  });

  it('includes agent_code in payload when ?agent is present', async () => {
    setSearch('?agent=PARTNER01');

    const { submitLead } = await import('../submitLead');
    await submitLead({ name: 'Nguyen Van A', phone: '0901234567', court_name: 'San A' });

    expect(fetchMock).toHaveBeenCalledOnce();
    const body: LeadPayload = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.agent_code).toBe('PARTNER01');
  });

  it('includes agent_code = null in payload when ?agent is absent', async () => {
    setSearch('');

    const { submitLead } = await import('../submitLead');
    await submitLead({ name: 'Nguyen Van A', phone: '0901234567', court_name: 'San A' });

    expect(fetchMock).toHaveBeenCalledOnce();
    const body: LeadPayload = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.agent_code).toBeNull();
  });

  it('throws when the server returns a non-2xx response', async () => {
    setSearch('');
    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      text: () => Promise.resolve('Server Error'),
    });

    const { submitLead } = await import('../submitLead');
    await expect(
      submitLead({ name: 'Test', phone: '0901111111', court_name: 'San Test' })
    ).rejects.toThrow('Failed to submit lead: 500 Server Error');
  });
});
