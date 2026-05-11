/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface CommissionRow {
  activity: string;
  amount: string;
}

const COMMISSION_ROWS: CommissionRow[] = [
  {
    activity: '1 sân đăng ký + hoạt động ≥ 30 ngày',
    amount: '200,000 VND',
  },
];

export default function AgentSection() {
  return (
    <>
      {/* Commission Table Section */}
      <section
        className="py-24 bg-background"
        aria-labelledby="commission-table-heading"
        data-testid="commission-table-section"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-black uppercase tracking-widest text-primary mb-4"
            >
              Hoa hồng
            </motion.span>
            <motion.h2
              id="commission-table-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-neutral-900 mb-4"
            >
              Bảng hoa hồng đại lý
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-500 text-lg max-w-xl mx-auto"
            >
              Minh bạch, rõ ràng — bạn biết chính xác mình nhận được bao nhiêu từ mỗi sân giới thiệu.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-lg bg-white">
              {/* Table header */}
              <div className="grid grid-cols-2 bg-primary px-8 py-5">
                <span className="text-sm font-black uppercase tracking-wider text-white/80">
                  Hoạt động
                </span>
                <span className="text-sm font-black uppercase tracking-wider text-white/80 text-right">
                  Hoa hồng
                </span>
              </div>

              {/* Table body */}
              {COMMISSION_ROWS.map((row, i) => (
                <div
                  key={i}
                  data-testid={`commission-row-${i}`}
                  className="grid grid-cols-2 items-center px-8 py-6 border-b border-neutral-100 last:border-b-0 hover:bg-primary-light/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-primary fill-primary/10"
                      aria-hidden="true"
                    />
                    <span className="text-neutral-700 font-medium leading-snug text-sm md:text-base">
                      {row.activity}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl md:text-2xl font-black text-primary">
                      {row.amount}
                    </span>
                  </div>
                </div>
              ))}

              {/* Footer note */}
              <div className="px-8 py-5 bg-neutral-50 border-t border-neutral-100">
                <p className="text-xs text-neutral-400 font-medium text-center">
                  Hoa hồng được thanh toán cuối mỗi tháng sau khi xác nhận sân hoạt động đủ 30 ngày.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
