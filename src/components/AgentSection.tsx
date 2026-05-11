/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ClipboardList, MessageCircle, Banknote } from 'lucide-react';

interface Step {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: '01',
    icon: <ClipboardList size={32} />,
    title: 'Đăng ký',
    description: 'Điền thông tin cơ bản của bạn vào form đăng ký đại lý SportBuddies. Chỉ mất 2 phút.',
    iconBg: 'bg-primary-light',
    iconColor: 'text-primary',
  },
  {
    number: '02',
    icon: <MessageCircle size={32} />,
    title: 'SpB liên hệ Zalo trong 24h',
    description: 'Đội ngũ SportBuddies sẽ chủ động liên hệ bạn qua Zalo trong vòng 24 giờ để tư vấn và hướng dẫn chi tiết.',
    iconBg: 'bg-success-bg',
    iconColor: 'text-primary',
  },
  {
    number: '03',
    icon: <Banknote size={32} />,
    title: 'Đi gặp sân, nhận hoa hồng cuối tháng',
    description: 'Kết nối các sân thể thao quanh bạn với SportBuddies. Hoa hồng được thanh toán vào cuối mỗi tháng.',
    iconBg: 'bg-warning-bg',
    iconColor: 'text-warning',
  },
];

export default function AgentSection() {
  return (
    <>
      {/* How It Works Section */}
      <section className="py-24 bg-white" aria-labelledby="how-it-works-heading">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-black uppercase tracking-widest text-primary mb-4"
            >
              Quy trình
            </motion.span>
            <motion.h2
              id="how-it-works-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black text-neutral-900 mb-4"
            >
              Cách hoạt động
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-500 text-lg max-w-xl mx-auto"
            >
              Chỉ 3 bước đơn giản để bắt đầu kiếm thu nhập cùng SportBuddies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden md:block absolute top-[3.5rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-neutral-200"
              aria-hidden="true"
            />

            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * (i + 1) }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:shadow-xl transition-all group relative"
                data-testid={`how-it-works-step-${i + 1}`}
              >
                {/* Step number badge */}
                <span className="absolute top-6 right-6 text-xs font-black text-neutral-300 tracking-widest">
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-3xl ${step.iconBg} flex items-center justify-center ${step.iconColor} mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6`}
                >
                  {step.icon}
                </div>

                <h3 className="text-xl font-black text-neutral-900 mb-4">{step.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
