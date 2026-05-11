// Mock Supabase client — no real connection or env vars needed.
// Replace this file with the real createClient() call when a Supabase project is ready.
type MockResult = { count: number; error: { message: string } | null };

const MOCK_DATA: Record<string, number> = {
  courts: 52,
  bookings: 1840,
};

type MockQueryBuilder = Promise<MockResult> & {
  eq: (_col: string, _val: unknown) => Promise<MockResult>;
};

function makeQueryBuilder(table: string): MockQueryBuilder {
  const count = MOCK_DATA[table] ?? 0;
  const result: MockResult = { count, error: null };
  const promise = Promise.resolve(result) as MockQueryBuilder;
  promise.eq = () => Promise.resolve(result);
  return promise;
}

export const supabase = {
  from: (table: string) => ({
    select: (_cols?: string, _opts?: object) => makeQueryBuilder(table),
  }),
};
