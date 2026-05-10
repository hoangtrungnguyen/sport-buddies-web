/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import SportCard from './SportCard';

const sports = [
  {
    name: 'Bóng đá',
    tagline: '5vs5, 7vs7 · Sân cỏ nhân tạo',
    iconBgClass: 'bg-success-bg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-success" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 0-6.2 17.9L12 12l6.2 7.9A10 10 0 0 0 12 2z" />
        <path d="M12 12 5.8 19.9M12 12l6.2 7.9" />
        <path d="M4.3 7h15.4M12 2v4" />
      </svg>
    ),
  },
  {
    name: 'Cầu lông',
    tagline: 'Sân trong nhà · Tiêu chuẩn thi đấu',
    iconBgClass: 'bg-warning-bg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-warning" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="16" r="3" />
        <line x1="10.5" y1="13.5" x2="20" y2="4" />
        <path d="M20 4l-3 1 1-3z" />
        <path d="M15 5l-2 3M17 8l-3 1" />
      </svg>
    ),
  },
  {
    name: 'Pickleball',
    tagline: 'Môn mới tại Việt Nam · Dễ học, dễ chơi',
    iconBgClass: 'bg-primary-light',
    badge: 'Đang hot',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="7" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="3" y1="12" x2="7" y2="12" />
        <line x1="17" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    name: 'Tennis',
    tagline: 'Sân đơn và đôi · Trong nhà và ngoài trời',
    iconBgClass: 'bg-tennis-bg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M18 12c0-2.76-2.24-5-5-5" />
        <path d="M6 12c0 2.76 2.24 5 5 5" />
        <path d="M12 2c-1.38 2.5-1.38 7.5 0 10s1.38 7.5 0 10" />
      </svg>
    ),
  },
  {
    name: 'Đa năng',
    tagline: 'Sân linh hoạt · Nhiều môn trên cùng một sân',
    iconBgClass: 'bg-multisport-bg',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function SportsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black mb-3">Các môn thể thao được hỗ trợ</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Từ pickleball đang bùng nổ đến bóng đá truyền thống — SportBuddies có sân cho bạn.
          </p>
        </div>

        {/* Cards grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sports.map((sport) => (
            <motion.div key={sport.name} variants={cardVariants}>
              <SportCard
                name={sport.name}
                tagline={sport.tagline}
                iconBgClass={sport.iconBgClass}
                badge={sport.badge}
                icon={sport.icon}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 h-14 rounded-full hover:bg-primary-container transition-all shadow-lg active:scale-95">
            <Search size={20} />
            Mở app ngay
          </button>
        </div>
      </div>
    </section>
  );
}
