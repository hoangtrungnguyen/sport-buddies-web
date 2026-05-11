/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface StatsBarProps {
  courtCount: number;
  bookingCount: number;
}

/**
 * MKT-003 Stats Bar — displays live court and booking counts.
 * Data fetching is handled by the parent (task 3.1).
 * Fallback behaviour is handled by task 3.3.
 * Positioning in the page layout is governed by task 3.4.
 */
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
