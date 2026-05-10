/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import SportCard from './SportCard';
import type { SportCardProps } from './SportCard';

// Opened in a new tab; falls back to "#" when the env var is unset.
const CUSTOMER_APP_URL: string = import.meta.env.VITE_CUSTOMER_APP_URL ?? '#';

const sports: SportCardProps[] = [
  {
    sportKey: 'football',
    name: 'Bóng đá',
    tagline: '5vs5, 7vs7 · Sân cỏ nhân tạo',
    description:
      'Kết nối với những người chơi bóng đá quanh bạn, đặt sân cỏ nhân tạo chất lượng cao theo nhóm.',
    details: [
      { label: 'Hình thức', value: '5vs5 / 7vs7' },
      { label: 'Mặt sân', value: 'Cỏ nhân tạo' },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 7.4 16.6" />
        <path d="M12 2a10 10 0 0 0-7.4 16.6" />
        <path d="M2.6 9h18.8" />
        <path d="M2.6 15h18.8" />
        <path d="M12 2v20" />
      </svg>
    ),
    accentBg: 'bg-success-bg',
    accentText: 'text-success',
  },
  {
    sportKey: 'badminton',
    name: 'Cầu lông',
    tagline: 'Đơn · Đôi · Tất cả trình độ',
    description:
      'Tìm đối tác đánh cầu lông phù hợp trình độ, đặt sân nội thất có máy lạnh tiện lợi.',
    details: [
      { label: 'Hình thức', value: 'Đơn / Đôi' },
      { label: 'Sân', value: 'Nội thất' },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M15 4.5c2-2 5.5-2 7 0s1 5.5 0 7L11 22l-3-3 7-14.5z" />
        <path d="M2 22l5-5" />
        <path d="M11 13l3 3" />
      </svg>
    ),
    accentBg: 'bg-warning-bg',
    accentText: 'text-warning',
  },
  {
    sportKey: 'pickleball',
    name: 'Pickleball',
    tagline: '2vs2 · Outdoor & Indoor',
    description:
      'Môn thể thao đang gây sốt. Đặt sân Pickleball xịn sò, dễ chơi nhưng đầy thú vị.',
    details: [
      { label: 'Hình thức', value: '2vs2' },
      { label: 'Sân', value: 'Outdoor / Indoor' },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
    accentBg: 'bg-primary-light',
    accentText: 'text-primary',
  },
  {
    sportKey: 'tennis',
    name: 'Tennis',
    tagline: 'Đơn · Đôi · Sân đất / cứng',
    description:
      'Sân Tennis tiêu chuẩn, thoáng mát, bề mặt đa dạng. Phù hợp cho cả người mới lẫn tay vợt lành nghề.',
    details: [
      { label: 'Hình thức', value: 'Đơn / Đôi' },
      { label: 'Mặt sân', value: 'Đất / Cứng' },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M18 12a6 6 0 0 0-12 0" />
        <path d="M6 12a6 6 0 0 0 12 0" />
      </svg>
    ),
    accentBg: 'bg-orange-50',
    accentText: 'text-orange-500',
  },
  {
    sportKey: 'basketball',
    name: 'Bóng rổ',
    tagline: '3vs3, 5vs5 · Sân ngoài trời',
    description:
      'Gia nhập cộng đồng bóng rổ sôi động, tìm đồng đội và sân chơi chất lượng gần nhà bạn.',
    details: [
      { label: 'Hình thức', value: '3vs3 / 5vs5' },
      { label: 'Sân', value: 'Ngoài trời' },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <path d="M2.1 13h19.8" />
        <path d="M12 2.1v19.8" />
        <path d="M4.6 4.6C7.4 7 9 9.4 9 12s-1.6 5-4.4 7.4" />
        <path d="M19.4 4.6C16.6 7 15 9.4 15 12s1.6 5 4.4 7.4" />
      </svg>
    ),
    accentBg: 'bg-pink-50',
    accentText: 'text-pink-500',
  },
];

export default function SportsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black mb-4">Môn thể thao chúng tôi hỗ trợ</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Từ Bóng đá đến Pickleball — SportBuddies kết nối bạn với sân chơi và đồng đội phù hợp.
          </p>
        </div>

        {/* Cards grid: 1 col mobile → 2 col sm → 3 col lg (5 cards → first 3 + last 2 centred) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, i) => (
            <motion.div
              key={sport.sportKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <SportCard {...sport} />
            </motion.div>
          ))}
        </div>

        {/* Single "Mở app ngay" CTA centred below all cards */}
        <div className="mt-12 flex justify-center">
          <a
            href={CUSTOMER_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-bold px-10 h-14 rounded-full hover:bg-primary-container transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 text-base"
          >
            Mở app ngay
          </a>
        </div>
      </div>
    </section>
  );
}
