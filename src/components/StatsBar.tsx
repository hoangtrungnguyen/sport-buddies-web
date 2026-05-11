/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * StatsBar — MKT-003 Stats Bar component.
 *
 * Displays "X sân đang hoạt động · Y lượt đặt sân".
 * Data is provided by useStatsBarCounts (task 3.1).
 * Fallback behaviour (task 3.3): hook initialises with FALLBACK_COUNTS so this
 * component always receives real numbers — no loading skeleton needed here.
 */
interface StatsBarProps {
  courtCount: number;
  bookingCount: number;
}

export default function StatsBar({ courtCount, bookingCount }: StatsBarProps) {
  return (
    <div className="bg-primary-light/60 border-y border-primary/10">
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex justify-center">
        <p className="text-sm font-semibold text-primary">
          {courtCount.toLocaleString('vi-VN')}{' '}
          <span className="font-normal text-neutral-600">sân đang hoạt động</span>
          {' · '}
          {bookingCount.toLocaleString('vi-VN')}{' '}
          <span className="font-normal text-neutral-600">lượt đặt sân</span>
        </p>
      </div>
    </div>
  );
}
