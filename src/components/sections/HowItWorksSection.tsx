/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Map as MapIcon, Sliders, Clock, BellRing, Timer } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section id="mkt-002" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full mb-6 font-semibold text-sm border border-primary/10"
          >
            Cách hoạt động
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black mb-4"
          >
            4 bước đặt sân — nhanh như mở app
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 max-w-xl mx-auto"
          >
            Quy trình khớp chính xác với ứng dụng thật — không bước nào thừa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-neutral-200 z-0" />

          {[
            {
              step: 1,
              icon: <MapIcon size={28} />,
              title: 'Mở bản đồ',
              desc: 'Thấy sân xanh còn giờ trống gần bạn — cập nhật theo thời gian thực.',
            },
            {
              step: 2,
              icon: <Sliders size={28} />,
              title: 'Chọn môn & lọc',
              desc: 'Lọc theo khoảng cách 1 km / 3 km / 5 km để tìm sân phù hợp nhất.',
            },
            {
              step: 3,
              icon: <Clock size={28} />,
              title: 'Chọn khung giờ',
              desc: 'Xác nhận tên và số điện thoại — không cần tài khoản phức tạp.',
            },
            {
              step: 4,
              icon: <BellRing size={28} />,
              title: 'Chờ duyệt & đến sân',
              desc: 'Chủ sân duyệt → nhận thông báo → đến sân trả tiền mặt. Đơn giản vậy thôi.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Step bubble */}
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white text-xs font-black flex items-center justify-center shadow">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-black mb-2 text-neutral-900">{item.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tagline — MKT-002.2 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-3 bg-primary-light border border-primary/15 px-6 py-3 rounded-full">
            <Timer size={20} className="text-primary shrink-0" />
            <p className="text-primary font-black text-base md:text-lg tracking-tight">
              Dưới 60 giây từ mở app đến đặt xong
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
