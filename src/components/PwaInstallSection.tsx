/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function PwaInstallSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full mb-6 font-semibold text-sm border border-primary/10"
          >
            <Download size={16} />
            Cài đặt miễn phí
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-neutral-900 mb-6 max-w-2xl leading-tight"
          >
            Cài SportBuddies vào điện thoại —{' '}
            <span className="text-primary">miễn phí, không cần App Store</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-xl leading-relaxed"
          >
            SportBuddies là một Progressive Web App (PWA) — bạn có thể cài thẳng
            từ trình duyệt lên màn hình chính, không cần tải từ App Store hay
            Google Play. Nhanh chóng, nhẹ nhàng, và luôn cập nhật tự động.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
