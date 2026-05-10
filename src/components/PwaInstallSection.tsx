/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Smartphone, Monitor, Share, PlusSquare, MoreHorizontal, ArrowDownToLine } from 'lucide-react';

const CUSTOMER_APP_URL: string =
  (import.meta as unknown as { env: Record<string, string | undefined> }).env.VITE_CUSTOMER_APP_URL ?? '#';

export default function PwaInstallSection() {
  return (
    <section className="py-24 bg-neutral-50" aria-labelledby="pwa-install-heading">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full mb-6 font-semibold text-sm border border-primary/10"
          >
            <Smartphone size={16} />
            Cài ngay trên điện thoại
          </motion.div>

          <motion.h2
            id="pwa-install-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-neutral-900 mb-4 leading-tight"
          >
            Thêm SportBuddies vào màn hình chính
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 max-w-xl mx-auto text-lg"
          >
            Không cần tải về từ App Store hay Google Play. Cài trực tiếp từ trình duyệt chỉ trong vài giây.
          </motion.p>
        </div>

        {/* Install cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* iOS Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-black text-neutral-900">Trên iPhone / iPad</h3>
                <p className="text-sm text-neutral-500">Safari — iOS 16.4+</p>
              </div>
            </div>

            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-primary-light text-primary rounded-full flex items-center justify-center text-sm font-black">1</span>
                <div className="pt-0.5">
                  <p className="text-neutral-700 font-semibold">Mở trang web trong Safari</p>
                  <p className="text-sm text-neutral-500">Chỉ hoạt động với trình duyệt Safari</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-primary-light text-primary rounded-full flex items-center justify-center text-sm font-black">2</span>
                <div className="pt-0.5 flex items-start gap-2">
                  <div>
                    <p className="text-neutral-700 font-semibold">Nhấn nút Chia sẻ</p>
                    <p className="text-sm text-neutral-500">Biểu tượng mũi tên hướng lên ở thanh công cụ</p>
                  </div>
                  <Share size={18} className="text-primary flex-shrink-0 mt-0.5" aria-label="Share icon" />
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-primary-light text-primary rounded-full flex items-center justify-center text-sm font-black">3</span>
                <div className="pt-0.5 flex items-start gap-2">
                  <div>
                    <p className="text-neutral-700 font-semibold">Chọn "Thêm vào Màn hình chính"</p>
                    <p className="text-sm text-neutral-500">Kéo xuống trong menu chia sẻ để tìm</p>
                  </div>
                  <PlusSquare size={18} className="text-primary flex-shrink-0 mt-0.5" aria-label="Add to home screen" />
                </div>
              </li>
            </ol>
          </motion.div>

          {/* Android Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true">
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.463 11.463 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2.631.631 0 0 0-.22.85l1.84 3.18C3.42 10.73 1.62 13.22 1 16h22c-.62-2.78-2.42-5.27-5.4-6.52zM7 13.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM1 17v1a1 1 0 0 0 1 1h1v3a1 1 0 1 0 2 0v-3h14v3a1 1 0 1 0 2 0v-3h1a1 1 0 0 0 1-1v-1H1z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-black text-neutral-900">Trên Android</h3>
                <p className="text-sm text-neutral-500">Chrome hoặc Edge</p>
              </div>
            </div>

            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-primary-light text-primary rounded-full flex items-center justify-center text-sm font-black">1</span>
                <div className="pt-0.5">
                  <p className="text-neutral-700 font-semibold">Mở trang web trong Chrome</p>
                  <p className="text-sm text-neutral-500">Hoặc Microsoft Edge trên Android</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-primary-light text-primary rounded-full flex items-center justify-center text-sm font-black">2</span>
                <div className="pt-0.5 flex items-start gap-2">
                  <div>
                    <p className="text-neutral-700 font-semibold">Nhấn menu ba chấm</p>
                    <p className="text-sm text-neutral-500">Góc trên bên phải trình duyệt</p>
                  </div>
                  <MoreHorizontal size={18} className="text-primary flex-shrink-0 mt-0.5" aria-label="More options" />
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-primary-light text-primary rounded-full flex items-center justify-center text-sm font-black">3</span>
                <div className="pt-0.5 flex items-start gap-2">
                  <div>
                    <p className="text-neutral-700 font-semibold">Chọn "Thêm vào màn hình chính"</p>
                    <p className="text-sm text-neutral-500">Sau đó nhấn Thêm để xác nhận</p>
                  </div>
                  <ArrowDownToLine size={18} className="text-primary flex-shrink-0 mt-0.5" aria-label="Install" />
                </div>
              </li>
            </ol>
          </motion.div>
        </div>

        {/* Desktop hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex items-center gap-3 bg-white border border-neutral-100 rounded-2xl px-6 py-4 max-w-lg mx-auto mb-10 shadow-sm"
        >
          <Monitor size={20} className="text-neutral-400 flex-shrink-0" />
          <p className="text-sm text-neutral-600">
            <span className="font-semibold">Trên máy tính:</span> Chrome / Edge sẽ hiện nút cài đặt
            <span className="inline-block mx-1">
              <ArrowDownToLine size={14} className="inline text-primary" aria-label="install" />
            </span>
            ngay trên thanh địa chỉ.
          </p>
        </motion.div>

        {/* Secondary CTA — "Mở app trước, cài sau" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-center"
        >
          <a
            href={CUSTOMER_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold text-base underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all hover:gap-3"
            data-testid="pwa-try-first-cta"
          >
            <Smartphone size={18} aria-hidden="true" />
            Mở app trước, cài sau
          </a>
          <p className="text-neutral-500 text-sm mt-2">
            Dùng thử trên trình duyệt — không cần cài đặt ngay
          </p>
        </motion.div>
      </div>
    </section>
  );
}
