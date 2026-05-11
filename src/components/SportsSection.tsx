/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import SportCard, { type SportCardProps } from './SportCard';

/**
 * Sport data matching `sport_types` values in the SportBuddies DB.
 *
 * Individual card content (description, tagline, details) is intentionally
 * minimal here — tasks 4.2–4.6 will replace/extend each entry with
 * sport-specific copy. The structure (keys) must remain stable so those
 * tasks can update without touching SportsSection itself.
 */
const SPORTS: SportCardProps[] = [
  {
    sportKey: 'bong-da',
    name: 'Bóng đá',
    tagline: 'Vua của các môn thể thao',
    description:
      'Môn thể thao vua với hàng triệu người chơi tại Việt Nam. Từ sân bóng 5 người đến sân 11 người, SportBuddies giúp bạn tìm sân và đối tác dễ dàng.',
    details: [
      { label: 'Số người', value: '5v5 – 11v11' },
      { label: 'Loại sân', value: 'Cỏ nhân tạo' },
      { label: 'Thời gian', value: '60 – 90 phút' },
      { label: 'Hình thức', value: 'Phong trào' },
    ],
    icon: '⚽',
    accentClass: 'bg-success',
    iconBgClass: 'bg-success-bg',
  },
  {
    sportKey: 'cau-long',
    name: 'Cầu lông',
    tagline: 'Tốc độ & kỹ thuật',
    description:
      'Môn thể thao trong nhà phổ biến nhất Việt Nam. Dễ học, dễ chơi nhưng đòi hỏi sự bền bỉ và kỹ thuật cao. Tìm sân cầu lông gần bạn ngay.',
    details: [
      { label: 'Số người', value: '1v1 – 2v2' },
      { label: 'Loại sân', value: 'Trong nhà' },
      { label: 'Thời gian', value: '45 – 60 phút' },
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
  {
    sportKey: 'tennis',
    name: 'Tennis',
    tagline: 'Đẳng cấp & phong cách',
    description:
      'Môn thể thao quý phái với lịch sử lâu đời. Tại TPHCM, hàng trăm sân tennis chất lượng cao đang chờ bạn. Đặt sân và tìm đối tác ngay trên SportBuddies.',
    details: [
      { label: 'Số người', value: '1v1 – 2v2' },
      { label: 'Loại sân', value: 'Hard / Clay' },
      { label: 'Thời gian', value: '60 – 90 phút' },
      { label: 'Hình thức', value: 'Đơn / Đôi' },
    ],
    icon: '🎾',
    accentClass: 'bg-secondary-container',
    iconBgClass: 'bg-orange-50',
  },
  {
    sportKey: 'bong-ro',
    name: 'Bóng rổ',
    tagline: 'Đồng đội & bùng nổ',
    description:
      'Môn thể thao đồng đội đang phát triển mạnh tại các đô thị lớn. Tìm sân bóng rổ, lập đội và thách đấu cộng đồng qua SportBuddies.',
    details: [
      { label: 'Số người', value: '3v3 – 5v5' },
      { label: 'Loại sân', value: 'Ngoài trời / Nhà' },
      { label: 'Thời gian', value: '60 – 90 phút' },
      { label: 'Hình thức', value: 'Phong trào' },
    ],
    icon: '🏀',
    accentClass: 'bg-tertiary-container',
    iconBgClass: 'bg-pink-50',
  },
];

/**
 * SportsSection — MKT-004 "Sports Section".
 *
 * Displays a heading + responsive 5-card grid of sport types supported by
 * the SportBuddies platform. Each card uses the SportCard component which
 * exposes a stable content interface so tasks 4.2–4.6 can update individual
 * cards independently.
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
            5 môn thể thao
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
            SportBuddies hỗ trợ đặt sân và tìm đối tác cho 5 môn thể thao phổ biến nhất tại TPHCM.
          </motion.p>
        </div>

        {/* 5-card responsive grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
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
