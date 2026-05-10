/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import SportCard, { type SportCardProps } from './SportCard';

/**
 * Sport data matching `sport_types` values in the SportBuddies DB.
 *
 * grava-8a6d.4.7: Responsive grid — 3 columns desktop, 2 columns tablet,
 * 1 column mobile. Grid classes: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
 */
const SPORTS: SportCardProps[] = [
  {
    sportKey: 'bong-da',
    name: 'Bóng đá',
    tagline: '5vs5, 7vs7 · Sân cỏ nhân tạo',
    description:
      'Môn thể thao vua với hàng triệu người chơi tại Việt Nam. Tìm sân bóng đá 5 người, 7 người cỏ nhân tạo và đối tác dễ dàng qua SportBuddies.',
    details: [
      { label: 'Hình thức', value: '5vs5, 7vs7' },
      { label: 'Loại sân', value: 'Cỏ nhân tạo' },
      { label: 'Thời gian', value: '60 – 90 phút' },
      { label: 'Phong cách', value: 'Phong trào' },
    ],
    icon: '⚽',
    accentClass: 'bg-success',
    iconBgClass: 'bg-success-bg',
  },
  {
    sportKey: 'cau-long',
    name: 'Cầu lông',
    tagline: 'Sân trong nhà · Tiêu chuẩn thi đấu',
    description:
      'Môn thể thao trong nhà phổ biến nhất Việt Nam. Sân đạt tiêu chuẩn thi đấu quốc tế, ánh sáng chuẩn BWF, mặt sàn chuyên dụng. Tìm sân cầu lông gần bạn ngay.',
    details: [
      { label: 'Loại sân', value: 'Trong nhà' },
      { label: 'Tiêu chuẩn', value: 'Thi đấu' },
      { label: 'Số người', value: '1v1 – 2v2' },
      { label: 'Hình thức', value: 'Đơn / Đôi' },
    ],
    icon: '🏸',
    accentClass: 'bg-warning',
    iconBgClass: 'bg-warning-bg',
  },
  {
    sportKey: 'pickleball',
    name: 'Pickleball',
    tagline: 'Xu hướng số 1 TPHCM',
    description:
      'Hiện tượng thể thao đang gây sốt toàn cầu. Dễ tiếp cận với người mới, đủ thách thức cho người chơi lâu năm. Cộng đồng Pickleball TPHCM đang bùng nổ.',
    details: [
      { label: 'Số người', value: '2v2' },
      { label: 'Loại sân', value: 'Ngoài trời / Nhà' },
      { label: 'Thời gian', value: '30 – 60 phút' },
      { label: 'Hình thức', value: 'Đôi nam nữ' },
    ],
    icon: '🏓',
    accentClass: 'bg-primary',
    iconBgClass: 'bg-primary-light',
  },
];

/**
 * SportsSection — MKT-004 "Sports Section".
 *
 * Displays a heading + responsive card grid of sport types supported by
 * the SportBuddies platform.
 *
 * Responsive grid spec (grava-8a6d.4.7):
 *   - Mobile:  1 column  (grid-cols-1)
 *   - Tablet:  2 columns (md:grid-cols-2)
 *   - Desktop: 3 columns (lg:grid-cols-3)
 */
export default function SportsSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="sports-section-heading">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full mb-5 font-semibold text-sm border border-primary/10"
          >
            Môn thể thao hỗ trợ
          </motion.div>

          <motion.h2
            id="sports-section-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-black mb-4"
          >
            Môn thể thao bạn yêu thích
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 max-w-xl mx-auto"
          >
            SportBuddies hỗ trợ đặt sân và tìm đối tác cho các môn thể thao phổ biến nhất tại TPHCM.
          </motion.p>
        </div>

        {/* Responsive grid: 1 col mobile · 2 col tablet · 3 col desktop */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-testid="sports-grid"
        >
          {SPORTS.map((sport, index) => (
            <motion.div
              key={sport.sportKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <SportCard {...sport} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
