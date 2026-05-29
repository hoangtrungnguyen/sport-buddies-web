import { motion } from 'motion/react';
import { Map as MapIcon, Calendar, Wallet } from 'lucide-react';

export default function HowItWorksSection() {
  return (
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
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:shadow-xl transition-all group"
            >
              <div className="w-20 h-20 rounded-3xl bg-primary-light flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-4">{item.step}</h3>
              <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
