/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Download, Share, PlusSquare, Smartphone } from 'lucide-react';

interface InstallStepProps {
  step: number;
  icon: ReactNode;
  title: string;
  description: string;
}

function InstallStep({ step, icon, title, description }: InstallStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0 relative">
        <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary">
          {icon}
        </div>
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-white text-[10px] font-black rounded-full flex items-center justify-center">
          {step}
        </span>
      </div>
      <div>
        <h4 className="font-bold text-neutral-900 mb-1">{title}</h4>
        <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function PwaInstallSection() {
  return (
    <section className="py-20 bg-white" aria-label="Cài đặt SportBuddies lên điện thoại">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section heading */}
        <div className="flex flex-col items-center text-center mb-16">
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

        {/* Install cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* iOS card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100"
            data-testid="ios-install-card"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center">
                <Smartphone size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-black text-neutral-900 text-lg">iPhone / iPad</h3>
                <p className="text-xs text-neutral-500">Dùng Safari</p>
              </div>
            </div>

            {/* iOS Step 1: Tap Share */}
            <div className="flex flex-col gap-6">
              <InstallStep
                step={1}
                icon={<Share size={20} />}
                title="Nhấn nút Chia sẻ"
                description="Mở Safari, truy cập SportBuddies rồi nhấn biểu tượng Chia sẻ ở thanh công cụ phía dưới màn hình."
              />

              {/* iOS Step 2: Add to Home Screen */}
              <InstallStep
                step={2}
                icon={<PlusSquare size={20} />}
                title='Chọn "Thêm vào Màn hình chính"'
                description='Cuộn danh sách tùy chọn xuống, chọn "Thêm vào Màn hình chính" (Add to Home Screen) rồi nhấn "Thêm" để xác nhận.'
              />
            </div>
          </motion.div>

          {/* Android placeholder (task 6.3) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 flex flex-col items-center justify-center text-center"
            data-testid="android-install-placeholder"
          >
            <div className="w-16 h-16 bg-neutral-200 rounded-2xl flex items-center justify-center mb-4">
              <Smartphone size={28} className="text-neutral-400" />
            </div>
            <h3 className="font-black text-neutral-400 text-lg mb-2">Android</h3>
            <p className="text-sm text-neutral-400">Hướng dẫn cho Android sắp ra mắt.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
