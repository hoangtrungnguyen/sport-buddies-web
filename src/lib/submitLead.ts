/**
 * submitLead — Captures owner lead form submissions.
 *
 * Reads UTM attribution params from the current page URL and posts a record to
 * the `leads` table with `type = "owner"`.
 *
 * TODO: Replace the fetch call below with your actual backend endpoint or a
 * Supabase client call once the backend is wired up.
 *
 *   Example Supabase replacement:
 *     import { supabase } from './supabaseClient';
 *     const { error } = await supabase.from('leads').insert([payload]);
 *     if (error) throw error;
 *
 *   Example REST replacement:
 *     const res = await fetch('/api/leads', { method: 'POST', ... });
 *     if (!res.ok) throw new Error(await res.text());
 */

export interface LeadPayload {
  type: 'owner';
  name: string;
  phone: string;
  court_name: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
}

/**
 * Reads UTM query-string parameters from the current browser URL.
 * Returns `null` for each param that is absent or empty.
 */
export function readUtmParams(): Pick<
  LeadPayload,
  'utm_source' | 'utm_medium' | 'utm_campaign'
> {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || null,
    utm_medium: params.get('utm_medium') || null,
    utm_campaign: params.get('utm_campaign') || null,
  };
}

/**
 * Submits an owner lead to the `leads` table.
 *
 * @param formData  Fields collected from the LeadForm.
 * @returns         A promise that resolves when the record has been written.
 *
 * @throws          If the HTTP request fails or the server returns a non-2xx
 *                  status.
 */
export async function submitLead(
  formData: Pick<LeadPayload, 'name' | 'phone' | 'court_name'>
): Promise<void> {
  const utmParams = readUtmParams();

  const payload: LeadPayload = {
    type: 'owner',
    ...formData,
    ...utmParams,
  };

  // TODO: Replace this fetch call with your actual endpoint or Supabase client.
  // The endpoint below is a placeholder — swap it out when the backend is ready.
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => response.statusText);
    throw new Error(`Failed to submit lead: ${response.status} ${text}`);
  }
}
