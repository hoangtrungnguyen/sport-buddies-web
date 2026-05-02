/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Smartphone, PlayCircle, CheckCircle, Map as MapIcon, Calendar, Wallet } from 'lucide-react';

export default function AppLandingSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-neutral-50">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        ></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-success-bg text-primary px-4 py-2 rounded-full mb-8 font-bold text-sm"
              >
                <CheckCircle size={16} />
                Ứng dụng đặt sân #1 Việt Nam
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black text-neutral-900 mb-8 leading-tight italic"
              >
                Đặt sân cực nhanh trong <span className="text-primary not-italic">30 giây</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-neutral-600 max-w-lg mb-12 leading-relaxed"
              >
                Xem sân trống gần bạn trên bản đồ — chọn giờ — xác nhận ngay. Trải nghiệm thể thao mượt mà chưa từng có.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white rounded-full px-10 h-14 font-black hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                  <Smartphone size={20} />
                  Mở app ngay
                </button>
                <button className="bg-white text-neutral-900 border border-neutral-200 rounded-full px-10 h-14 font-black hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                  <PlayCircle size={20} />
                  Cách hoạt động
                </button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <motion.div 
                initial={{ rotate: 10, y: 40, opacity: 0 }}
                animate={{ rotate: 5, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-[340px] aspect-[1/2] rounded-[3rem] bg-neutral-900 shadow-2xl border-[10px] border-neutral-900 overflow-hidden"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyeXtRwLh9lGMbKu6WA23w-HELrKoLhwpXSiZyEVNwXkkvRSF934fNsHZr6VneI1V6dPwwnv_AtCFmnw7xIqqbb8hXHQkgFRjUX4gW_e51LXr6YQmtP6fGdSelgnMG098kCCgeyTR1FwNUh9u9mduCXUG2FvxdCWhhAkfEGjvEro3iS6gZPLmkPWia_vVgjFfF0exwKfmvDz8Cw53Jt4rM57aOLzAVg4pzhPOv77NbN0Oe-cRstUDPc8iEX5xfMT0o4aJ_7mA3ucqp" 
                  alt="App UI" 
                  className="w-full h-full object-cover"
                />
                
                {/* Float Success Card */}
                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl flex items-center gap-4 border border-white/20"
                >
                  <div className="w-12 h-12 rounded-full bg-success-bg flex items-center justify-center text-success">
                    <CheckCircle size={24} fill="currentColor" className="text-white" />
                  </div>
                  <div>
                    <p className="font-black text-neutral-900 text-sm">Đặt sân thành công!</p>
                    <p className="text-xs text-neutral-500 font-medium tracking-tight">Sân bóng Mini 5 · 18:00 - 19:00</p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Blurred Glow Background */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8 shadow-lg relative z-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24 items-center">
            <div className="text-center group">
              <div className="text-3xl font-black text-white mb-1 group-hover:scale-110 transition-transform">150+</div>
              <div className="text-primary-light text-sm font-bold uppercase tracking-widest">Sân hoạt động</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="text-center group">
              <div className="text-3xl font-black text-white mb-1 group-hover:scale-110 transition-transform">5000+</div>
              <div className="text-primary-light text-sm font-bold uppercase tracking-widest">Lượt đặt sân</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-neutral-900 mb-4">3 bước cực đơn giản</h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">Tạm biệt những cuộc gọi rườm rà. Đặt sân ngay từ sofa của bạn.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <MapIcon size={32} />, step: "1. Mở bản đồ", desc: "Tìm kiếm sân trống quanh bạn theo thời gian thực." },
              { icon: <Calendar size={32} />, step: "2. Chọn giờ", desc: "Xem lịch trống và chọn đúng khung giờ bạn thích." },
              { icon: <Wallet size={32} />, step: "3. Đến chơi & trả tiền", desc: "Không cần đặt cọc. Đến sân tập hăng say và thanh toán." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:shadow-xl transition-all group"
              >
                <div className="w-20 h-20 rounded-3xl bg-primary-light flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-4">{step.step}</h3>
                <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
