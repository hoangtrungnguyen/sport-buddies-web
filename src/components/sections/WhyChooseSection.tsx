/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Bolt, ShieldCheck, Users } from 'lucide-react';

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4">Vì sao chọn SportBuddies?</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">Trải nghiệm tiện lợi, nhanh chóng và luôn có sân cho bạn.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Bolt className="text-primary" />, title: "Đặt Sân Siêu Tốc", desc: "Hệ thống cập nhật lịch trống theo thời gian thực. Xác nhận đặt sân tức thì." },
            { icon: <ShieldCheck className="text-primary" />, title: "Sân Đạt Chuẩn", desc: "Danh sách sân được chọn lọc kỹ lưỡng, mặt sân đẹp, đèn chiếu sáng tốt." },
            { icon: <Users className="text-primary" />, title: "Cộng Đồng Năng Động", desc: "Dễ dàng tìm đối tác giao lưu, tham gia các giải đấu phong trào tại địa phương." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 relative overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-light rounded-full opacity-20 group-hover:scale-110 transition-transform"></div>
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-6 relative z-10 transition-colors group-hover:bg-primary group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">{feature.title}</h3>
              <p className="text-neutral-600 relative z-10 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
