/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ReactNode, useMemo } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Share, SquarePlus, MoreVertical, Download } from 'lucide-react';
import { getPlatform } from '../hooks/usePlatform';

interface InstallStepProps {
  number: number;
  icon: ReactNode;
  text: string;
}

function InstallStep({ number, icon, text }: InstallStepProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-black">
        {number}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-primary">{icon}</span>
        <span className="text-neutral-700 font-medium">{text}</span>
      </div>
    </div>
  );
}

function IosInstallCard() {
  return (
    <motion.div
      data-testid="ios-install-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 flex-1"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center">
          <Smartphone size={24} className="text-neutral-700" />
        </div>
        <div>
          <h3 className="text-lg font-black text-neutral-900">Trên iPhone / iPad</h3>
          <p className="text-sm text-neutral-500">iOS Safari</p>
        </div>
      </div>
      <div className="space-y-4">
        <InstallStep
          number={1}
          icon={<Share size={20} />}
          text='Nhấn nút "Chia sẻ" (Share)'
        />
        <InstallStep
          number={2}
          icon={<SquarePlus size={20} />}
          text='Chọn "Thêm vào Màn hình chính"'
        />
      </div>
    </motion.div>
  );
}

function AndroidInstallCard() {
  return (
    <motion.div
      data-testid="android-install-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 flex-1"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center">
          <Smartphone size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-black text-neutral-900">Trên Android</h3>
          <p className="text-sm text-neutral-500">Chrome / Samsung Browser</p>
        </div>
      </div>
      <div className="space-y-4">
        <InstallStep
          number={1}
          icon={<MoreVertical size={20} />}
          text='Mở menu trình duyệt (⋮)'
        />
        <InstallStep
          number={2}
          icon={<Download size={20} />}
          text='"Thêm vào Màn hình chính" hoặc "Cài ứng dụng"'
        />
      </div>
    </motion.div>
  );
}

export default function PwaInstallSection() {
  const platform = useMemo(() => getPlatform(), []);

  return (
    <section
      aria-label="Hướng dẫn cài đặt ứng dụng"
      className="py-20 bg-neutral-50"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full mb-6 font-semibold text-sm border border-primary/10"
          >
            Miễn phí · Không cần App Store
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl font-black mb-4"
          >
            Cài SportBuddies vào điện thoại
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-neutral-600 max-w-xl mx-auto"
          >
            Chỉ vài bước đơn giản để có SportBuddies ngay trên màn hình chính của bạn.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {(platform === 'ios' || platform === 'other') && <IosInstallCard />}
          {(platform === 'android' || platform === 'other') && <AndroidInstallCard />}
        </div>
      </div>
    </section>
  );
}
