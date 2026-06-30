/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Check, Info, Calendar, Sparkles, MessageCircle, HelpCircle } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonStyle: string;
  badge?: string;
}

const PLANS: PricingPlan[] = [
  {
    name: 'Khởi Nghiệp (Starter)',
    price: '0đ',
    period: '/ 3 tháng đầu',
    description: 'Trải nghiệm đầy đủ tính năng, tối ưu hóa vận hành cho các sân mới.',
    features: [
      'Nhận thông báo booking tức thì',
      'Duyệt lịch đặt sân 1 chạm',
      'Hiển thị trên bản đồ SportBuddies',
      'Hỗ trợ kỹ thuật qua Zalo',
      'Không giới hạn số lượng sân bãi',
    ],
    buttonText: 'Trải nghiệm miễn phí',
    buttonStyle: 'bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 shadow-sm',
    badge: 'ƯU ĐÃI KHỞI ĐẦU',
  },
  {
    name: 'Chuyên Nghiệp (Pro)',
    price: '199K',
    period: '/ tháng',
    description: 'Dành cho các câu lạc bộ thể thao muốn tăng tốc doanh thu và tự động hóa vận hành.',
    features: [
      'Tất cả tính năng gói Starter',
      'Lịch sân thông minh 7 ngày',
      'Booking tại quầy cho khách vãng lai',
      'Thống kê doanh thu & giờ cao điểm',
      'Hỗ trợ Zalo 24/7 ưu tiên',
      'Tính năng giữ lịch cố định hàng tuần',
    ],
    isPopular: true,
    buttonText: 'Đăng ký Pro ngay',
    buttonStyle: 'bg-primary text-white hover:bg-primary-container shadow-lg shadow-primary/20',
    badge: 'PHỔ BIẾN NHẤT',
  },
  {
    name: 'Đại Đô Thị (Enterprise)',
    price: 'Liên hệ',
    period: '',
    description: 'Giải pháp tùy chỉnh đặc biệt cho các chuỗi tổ hợp sân lớn hoặc liên đoàn thể thao.',
    features: [
      'Tất cả tính năng gói Pro',
      'Báo cáo phân tích chuyên sâu',
      'Tích hợp API cổng thanh toán riêng',
      'Quản lý phân quyền đa nhân viên',
      'Quản lý chuỗi nhiều chi nhánh lớn',
      'Đồng hành tư vấn tối ưu vận hành',
    ],
    buttonText: 'Liên hệ hỗ trợ',
    buttonStyle: 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg',
  }
];

interface PricingSectionProps {
  onNavigate: (section: string) => void;
}

export default function PricingSection({ onNavigate }: PricingSectionProps) {
  return (
    <section className="py-32 bg-neutral-50 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-64 -mt-32 w-[600px] h-[600px] bg-primary-light rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-64 -mb-32 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full mb-6 font-bold text-sm border border-primary/10"
          >
            <Sparkles size={16} />
            Bảng Giá Dịch Vụ
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 leading-tight"
          >
            Bảng giá dành cho <span className="text-primary italic">chủ sân</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-lg max-w-xl mx-auto mb-6"
          >
            Minh bạch, rõ ràng. Không phí ẩn. Miễn phí setup hoàn toàn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => onNavigate('dashboard')}
              className="inline-flex items-center gap-2 bg-neutral-900 text-white font-bold px-6 py-3 rounded-full hover:bg-neutral-800 transition-all active:scale-95 shadow-md text-sm cursor-pointer"
            >
              Đi đến trang Dashboard Chủ Sân →
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-[2.5rem] p-8 flex flex-col relative transition-all ${
                plan.isPopular
                  ? 'bg-white border-2 border-primary shadow-2xl z-10'
                  : 'bg-white border border-neutral-200/60 shadow-xl'
              }`}
            >
              {plan.badge && (
                <span className={`absolute -top-4 left-8 px-4 py-1.5 rounded-full text-[10px] font-black tracking-wider uppercase ${
                  plan.isPopular ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                }`}>
                  {plan.badge}
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-black text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black text-neutral-900 tracking-tight">{plan.price}</span>
                <span className="text-neutral-500 text-sm font-semibold ml-2">{plan.period}</span>
              </div>

              {/* Action Button */}
              <button className={`w-full h-14 rounded-2xl font-black transition-all active:scale-95 flex items-center justify-center gap-2 mb-8 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>

              {/* Features List */}
              <div className="flex-grow">
                <h4 className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-4 px-1">Quyền lợi của bạn</h4>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-neutral-600 text-sm font-medium leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black mb-3">Bạn có thắc mắc khác về bảng giá?</h3>
            <p className="text-primary-light max-w-xl font-medium">Tụi mình luôn sẵn sàng tư vấn gói giải pháp tối ưu nhất cho sân thể thao của bạn.</p>
          </div>
          <button className="bg-white text-primary font-black px-8 h-14 rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 shrink-0">
            <MessageCircle size={20} />
            Liên hệ qua Zalo
          </button>
        </motion.div>

      </div>
    </section>
  );
}
