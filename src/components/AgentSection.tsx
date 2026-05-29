/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function AgentSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-background">
      <div className="absolute top-0 left-0 -ml-64 -mt-32 w-[600px] h-[600px] bg-primary-light rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Hero Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-success-bg text-primary px-4 py-2 rounded-full mb-8 font-bold text-sm border border-primary/10 shadow-sm"
          >
            <TrendingUp size={16} className="text-primary" />
            Chương trình Đại lý SportBuddies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight"
          >
            Kiếm thu nhập cùng <span className="text-primary italic">SportBuddies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-xl md:text-2xl font-bold text-neutral-800 max-w-xl mb-6 leading-snug"
          >
            Giới thiệu sân thể thao cho SpB — nhận 200,000 VND mỗi sân hoạt động. Không cần vốn.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-xl mb-12 leading-relaxed"
          >
            Trở thành đại lý SportBuddies — giới thiệu chủ sân thể thao và nhận hoa hồng hấp dẫn. Tận dụng mạng lưới của bạn để tạo thu nhập thụ động bền vững.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white font-black px-8 h-14 rounded-full hover:bg-primary-container transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
              Đăng ký làm đại lý
              <ArrowRight size={20} />
            </button>
            <button className="bg-white text-primary border-2 border-primary font-bold px-8 h-14 rounded-full hover:bg-primary-light transition-all flex items-center justify-center gap-2 active:scale-95">
              Tìm hiểu thêm
            </button>
          </div>
        </div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-5 bg-white rounded-3xl shadow-2xl p-8 border border-neutral-100"
        >
          <h3 className="text-2xl font-black mb-2">Thu nhập của đại lý</h3>
          <p className="text-neutral-500 text-sm mb-8">Hoa hồng cạnh tranh, thanh toán minh bạch.</p>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-primary-light rounded-2xl">
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-1">Hoa hồng mỗi sân</p>
                <p className="text-2xl font-black text-primary">500K – 2M đ</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp size={24} className="text-primary" />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-2xl">
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-1">Đại lý đang hoạt động</p>
                <p className="text-2xl font-black text-neutral-900">200+</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-2xl">
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-1">Thu nhập trung bình/tháng</p>
                <p className="text-2xl font-black text-neutral-900">5 – 15 triệu đ</p>
              </div>
            </div>
          </div>

          <button className="mt-8 w-full h-14 bg-primary text-white rounded-2xl font-black hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
            Bắt đầu ngay hôm nay
            <ArrowRight size={20} />
          </button>
          <p className="text-center text-[10px] text-neutral-400 font-medium mt-4">Miễn phí tham gia. Không yêu cầu vốn.</p>
        </motion.div>
      </div>
    </section>
  );
}
