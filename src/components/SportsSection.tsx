/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import SportCard, { SportCardProps } from './SportCard';

// ---------------------------------------------------------------------------
// Sport icons — inline SVGs keep the bundle light (no extra icon dep needed)
// ---------------------------------------------------------------------------

function FootballIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-success">
      <circle cx="12" cy="12" r="10" />
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function BadmintonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-warning">
      <line x1="4" y1="20" x2="12" y2="12" />
      <path d="M12 12 L18 4 M12 12 L20 10 M12 12 L18 18" />
      <circle cx="20" cy="5" r="2.5" />
    </svg>
  );
}

function PickleballIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3 C8 7 8 17 12 21" />
      <path d="M12 3 C16 7 16 17 12 21" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}

function TennisIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-orange-500">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9 C6 8 8 10 8 12 C8 14 6 16 3.5 15" />
      <path d="M20.5 9 C18 8 16 10 16 12 C16 14 18 16 20.5 15" />
    </svg>
  );
}

function MultiSportIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-tertiary">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Sport data — matches `sport_types` values in DB
// ---------------------------------------------------------------------------

const SPORTS: SportCardProps[] = [
  {
    sportKey: 'football',
    name: 'Bóng đá',
    tagline: '5vs5, 7vs7 · Sân cỏ nhân tạo',
    icon: <FootballIcon />,
    iconBg: 'bg-success-bg',
    details: [
      { label: 'Hình thức', value: '5vs5 · 7vs7' },
      { label: 'Mặt sân', value: 'Cỏ nhân tạo' },
    ],
  },
  {
    sportKey: 'badminton',
    name: 'Cầu lông',
    tagline: 'Đơn · Đôi · Sân trong nhà',
    icon: <BadmintonIcon />,
    iconBg: 'bg-warning-bg',
    details: [
      { label: 'Hình thức', value: 'Đơn · Đôi' },
      { label: 'Mặt sân', value: 'Trong nhà' },
    ],

  },
  {
    sportKey: 'pickleball',
    name: 'Pickleball',
    tagline: 'Đơn · Đôi · Sân tiêu chuẩn',
    icon: <PickleballIcon />,
    iconBg: 'bg-primary-light',
    details: [
      { label: 'Hình thức', value: 'Đơn · Đôi' },
      { label: 'Mặt sân', value: 'Tiêu chuẩn' },
    ],
  },
  {
    sportKey: 'tennis',
    name: 'Tennis',
    tagline: 'Đơn · Đôi · Sân đất nện & cứng',
    icon: <TennisIcon />,
    iconBg: 'bg-orange-50',
    details: [
      { label: 'Hình thức', value: 'Đơn · Đôi' },
      { label: 'Mặt sân', value: 'Đất nện · Cứng' },
    ],
  },
  {
    sportKey: 'multi',
    name: 'Đa năng',
    tagline: 'Sân linh hoạt · Nhiều môn trên cùng một sân',
    icon: <MultiSportIcon />,
    iconBg: 'bg-pink-50',
    details: [
      { label: 'Loại sân', value: 'Linh hoạt' },
      { label: 'Ưu điểm', value: 'Đa môn' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function SportsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black mb-4">Môn thể thao hỗ trợ</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">
            SportBuddies phục vụ nhiều bộ môn — tìm sân phù hợp với môn bạn yêu thích.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SPORTS.map((sport) => (
            <motion.div key={sport.sportKey} variants={cardVariants}>
              <SportCard {...sport} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
