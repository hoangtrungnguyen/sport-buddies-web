/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, PhoneOff, Hourglass, TrendingDown, CheckCircle2, Bell, ThumbsUp, CalendarDays, UserPlus } from 'lucide-react';

export default function OwnerSection() {
  const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCAomYcR7grTrIjhfL82HbXhQyoMPe0oXI1tb7u2jDSgSmgJZEec--Zm2fAegqkYUbTDwteS0SV-c-MDB9KgtsDbbf7e5jbGKTR5kUq9IDFsfA-llDWrTRSHM_RhXmYhavK3bc-VlJUEongkBsfFUu0qndqSQQ3YIrfaKAeEpcVWKlosvfm27y4q-xaB9KjBqS-qi7nmD9sKfhtLOILAoSmDdJLZNcXggVfNNCv0Ky-w0ckfQ6gT_uPwUEka5sZ9TBugFZ6NFd4ke38",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4l86GMFL6WOrba04l_piPO7NqEzvpzVrGr7ksmA_gFZfMxqOqLmzOT_qUTA8Zv-wo22PetJulTxXojxUp6m_cWdD3yqX6OZMNxhPqHaCUQOKTDs5RgOA9feqx6ddRzBbLKs92EnDB60HxZTWc4JO9C9u9KOVPn2H1e_KvpMcu0qMjgsHXxGCG4U1jNlYoZk58jvJ9Y2OnyZsyfwxBmckeQOKUhtvSE7NKvLaB0FWv5Nw2AEwIrM-QGrHbqdqDqwnZf-s9MbwiIgud",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAGix6TXOS_EkhOfiOn3ZFz7kbKUQ29l3pTZbdLtOW3h9JAGR5hgtpBWbIh5uOt2-vbecIYHTdS_tFiEfpGc2E1Rac2nC54Idpf2vo8X2dIb6znuQzU92ri9R4dQ5i0dyz0FQ9j05EY27c8vjGbcRFISvaM1DvfI2T3AvHgNu_1H-ioXCEDryB5kgz34Ore6MxHoyqixLdN2gyPf6bE9Iu9ea5-Q2e-o6imvpGKCO2RaFCWm2rCyIKHbG9JwGy3lGe0oAXDwxjT2nyd"
  ];

  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 -mr-64 -mt-32 w-[600px] h-[600px] bg-primary-light rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* Hero Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-success-bg text-primary px-4 py-2 rounded-full mb-8 font-bold text-sm border border-primary/10 shadow-sm"
            >
              <CheckCircle2 size={16} className="fill-primary text-white" />
              Giải pháp tối ưu doanh thu
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight"
            >
              Bạn là chủ sân?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-600 max-w-xl mb-12 leading-relaxed"
            >
              Đăng ký miễn phí — tụi mình mang khách đến sân bạn
            </motion.p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt="Owner"
                    className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm bg-neutral-100"
                  />
                ))}
              </div>
              <div className="text-sm font-medium text-neutral-600">
                Hơn <span className="font-black text-neutral-900">500+</span> chủ sân đã tham gia
              </div>
            </div>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 bg-white rounded-3xl shadow-2xl p-8 border border-neutral-100"
          >
            <h3 className="text-2xl font-black mb-2">Bắt đầu ngay hôm nay</h3>
            <p className="text-neutral-500 text-sm mb-8">Điền thông tin để nhận tư vấn miễn phí trong 24h.</p>

            <form className="space-y-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Họ và tên của bạn"
                  className="w-full h-14 rounded-2xl px-5 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium placeholder-neutral-300"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">Số điện thoại</label>
                <input
                  type="tel"
                  placeholder="090 123 4567"
                  className="w-full h-14 rounded-2xl px-5 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium placeholder-neutral-300"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">Tên sân thể thao</label>
                <input
                  type="text"
                  placeholder="VD: Pickleball Arena Quận 7"
                  className="w-full h-14 rounded-2xl px-5 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium placeholder-neutral-300"
                />
              </div>
              <button
                type="submit"
                className="w-full h-14 bg-primary text-white rounded-2xl font-black hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                Đăng ký sân ngay
                <ArrowRight size={20} />
              </button>
              <p className="text-center text-[10px] text-neutral-400 font-medium">Cam kết bảo mật thông tin 100%.</p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Bạn đang gặp khó khăn gì?</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">Vận hành sân bãi thủ công tốn nhiều thời gian và dễ dẫn đến thất thoát.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <PhoneOff className="text-error" />, bg: "bg-error-container/30", title: "Bỏ lỡ khách hàng", desc: "Khách gọi điện nhưng bạn bận hoặc nhân viên không bắt máy kịp thời." },
              { icon: <Hourglass className="text-warning" />, bg: "bg-warning-bg", title: "Giờ trống lãng phí", desc: "Nhiều khung giờ (sáng, trưa) vắng khách trong khi vẫn phải trả chi phí." },
              { icon: <UserX className="text-neutral-600" />, bg: "bg-neutral-100", title: "Không có khách mới ngoài khách quen", desc: "Sân chỉ hoạt động nhờ khách quen giới thiệu, không có kênh nào thu hút khách mới chủ động." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 group transition-all"
              >
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SpB Solutions */}
      <section className="py-24 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-success-bg text-primary px-4 py-2 rounded-full mb-6 font-bold text-sm border border-primary/10"
            >
              <CheckCircle2 size={16} className="fill-primary text-white" />
              Tính năng nổi bật
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl font-black mb-4"
            >
              Giải pháp SportBuddies dành cho chủ sân
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-600 max-w-xl mx-auto"
            >
              Tất cả tính năng bạn cần để vận hành sân hiệu quả — ngay trên điện thoại.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* grava-4ff8.1.7: instant booking notification card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm group transition-all"
            >
              <div className="w-14 h-14 bg-success-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bell className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Nhận thông báo tức thì</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">Mỗi khi có người đặt sân, bạn nhận ngay thông báo — không bỏ lỡ bất kỳ booking nào.</p>
            </motion.div>

            {/* grava-4ff8.1.8: approve/reject booking with phone reveal card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm group transition-all"
            >
              <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ThumbsUp className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Duyệt booking bằng 1 chạm</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">Duyệt hoặc từ chối lịch đặt chỉ với một cú chạm. Sau khi duyệt, số điện thoại khách hiện ra để bạn liên hệ ngay.</p>
            </motion.div>

            {/* grava-4ff8.1.9: 7-day court calendar — view all slots, block hours, recurring weekly schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm group transition-all"
            >
              <div className="w-14 h-14 bg-warning-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CalendarDays className="text-warning" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lịch sân 7 ngày</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">Xem toàn bộ slot trong tuần, khoá khung giờ bận và tạo lịch cố định hàng tuần — quản lý sân chủ động từ một màn hình.</p>
            </motion.div>

            {/* grava-4ff8.1.10: counter booking for walk-in customers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm group transition-all"
            >
              <div className="w-14 h-14 bg-error-container/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserPlus className="text-error" />
              </div>
              <h3 className="text-xl font-bold mb-4">Booking tại quầy</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">Tạo booking ngay tại quầy cho khách walk-in — nhập tên, số điện thoại và chọn khung giờ chỉ trong vài giây.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
