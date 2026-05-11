/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Globe, Zap, BadgeDollarSign, HeartHandshake } from 'lucide-react';

interface UrgencyBullet {
  icon: ReactNode;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  accentColor: string;
}

const URGENCY_BULLETS: UrgencyBullet[] = [
  {
    icon: <Globe size={28} />,
    title: 'Thị trường mới',
    description:
      'Mảng đặt sân thể thao trực tuyến tại Việt Nam đang ở giai đoạn đầu — cơ hội cho người vào sớm là rất lớn. Đại lý tiên phong sẽ nắm lợi thế trong khu vực của mình.',
    iconBg: 'bg-primary-light',
    iconColor: 'text-primary',
    accentColor: 'border-primary/30',
  },
  {
    icon: <Zap size={28} />,
    title: 'Pickleball bùng nổ',
    description:
      'Pickleball tăng trưởng 300% mỗi năm tại TP.HCM. Hàng trăm sân mới mở liên tục — nhu cầu kết nối sân với nền tảng đặt lịch chưa bao giờ lớn hơn lúc này.',
    iconBg: 'bg-warning-bg',
    iconColor: 'text-warning',
    accentColor: 'border-warning/30',
  },
  {
    icon: <BadgeDollarSign size={28} />,
    title: 'Phí 0 đồng',
    description:
      'Tham gia chương trình đại lý hoàn toàn miễn phí. Không cần vốn đầu tư, không ký hợp đồng ràng buộc. Bạn chỉ cần mạng lưới — SportBuddies lo phần còn lại.',
    iconBg: 'bg-success-bg',
    iconColor: 'text-primary',
    accentColor: 'border-success/30',
  },
  {
    icon: <HeartHandshake size={28} />,
    title: 'SpB hỗ trợ trực tiếp',
    description:
      'Đội ngũ SportBuddies đồng hành cùng bạn từ ngày đầu: tư vấn cách tiếp cận chủ sân, hỗ trợ qua Zalo 24/7, và đào tạo kỹ năng bán hàng miễn phí.',
    iconBg: 'bg-secondary-bg',
    iconColor: 'text-secondary',
    accentColor: 'border-secondary/30',
  },
];

export default function AgentSection() {
  return (
    <>
      {/* "Tại sao ngay bây giờ?" Section */}
      <section
        className="py-24 bg-white"
        aria-labelledby="why-now-heading"
        data-testid="why-now-section"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-black uppercase tracking-widest text-primary mb-4"
            >
              Thời điểm
            </motion.span>
            <motion.h2
              id="why-now-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-neutral-900 mb-4"
            >
              Tại sao ngay bây giờ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-500 text-lg max-w-xl mx-auto"
            >
              Đây là thời điểm lý tưởng để bắt đầu. Bốn lý do bạn không nên chờ thêm.
            </motion.p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-testid="why-now-bullets"
          >
            {URGENCY_BULLETS.map((bullet, i) => (
              <motion.div
                key={bullet.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className={`flex gap-6 p-8 rounded-3xl border-2 ${bullet.accentColor} bg-neutral-50 hover:shadow-lg transition-all group`}
                data-testid={`why-now-bullet-${i}`}
              >
                <div
                  className={`shrink-0 w-14 h-14 ${bullet.iconBg} rounded-2xl flex items-center justify-center ${bullet.iconColor} group-hover:scale-110 transition-transform`}
                  aria-hidden="true"
                >
                  {bullet.icon}
                </div>

                <div>
                  <h3 className="text-xl font-black text-neutral-900 mb-3">
                    {bullet.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-sm">
                    {bullet.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
