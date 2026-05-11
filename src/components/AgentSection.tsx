/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Dumbbell, Users, Building2, ShoppingBag } from 'lucide-react';

interface AgentProfile {
  role: 'coach' | 'group_leader' | 'gym_owner' | 'sports_store';
  icon: ReactNode;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const agentProfiles: AgentProfile[] = [
  {
    role: 'coach',
    icon: <Dumbbell size={28} />,
    title: 'Huấn luyện viên',
    description:
      'Bạn có mạng lưới học viên và sân luyện tập. Giới thiệu sân cho SpB và nhận hoa hồng hấp dẫn từ mỗi sân hoạt động.',
    iconBg: 'bg-primary-light',
    iconColor: 'text-primary',
  },
  {
    role: 'group_leader',
    icon: <Users size={28} />,
    title: 'Trưởng nhóm thể thao',
    description:
      'Bạn quản lý nhóm chơi thể thao thường xuyên và quen biết nhiều chủ sân. Tận dụng mạng lưới đó để tạo thu nhập thụ động.',
    iconBg: 'bg-success-bg',
    iconColor: 'text-primary',
  },
  {
    role: 'gym_owner',
    icon: <Building2 size={28} />,
    title: 'Chủ gym / phòng tập',
    description:
      'Bạn đang vận hành gym hoặc phòng tập. Đăng ký sân của bạn và giới thiệu thêm sân xung quanh để tối đa hóa doanh thu.',
    iconBg: 'bg-warning-bg',
    iconColor: 'text-warning',
  },
  {
    role: 'sports_store',
    icon: <ShoppingBag size={28} />,
    title: 'Cửa hàng dụng cụ thể thao',
    description:
      'Khách hàng của bạn chính là người chơi thể thao đang tìm sân. Kết hợp bán hàng với giới thiệu sân để có thêm nguồn thu.',
    iconBg: 'bg-neutral-100',
    iconColor: 'text-neutral-600',
  },
];

export default function AgentSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-background">
        <div className="absolute top-0 left-0 -ml-64 -mt-32 w-[600px] h-[600px] bg-primary-light rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* Hero Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
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
              {/* TODO: wire onClick to registration flow in a future story */}
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

            {/* TODO: wire onClick to registration flow in a future story */}
            <button className="mt-8 w-full h-14 bg-primary text-white rounded-2xl font-black hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              Bắt đầu ngay hôm nay
              <ArrowRight size={20} />
            </button>
            <p className="text-center text-[10px] text-neutral-400 font-medium mt-4">Miễn phí tham gia. Không yêu cầu vốn.</p>
          </motion.div>
        </div>
      </section>

      {/* "Đại lý là ai?" Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl font-black mb-4"
            >
              Đại lý là ai?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-neutral-600 max-w-xl mx-auto"
            >
              Bất kỳ ai có mạng lưới trong cộng đồng thể thao đều có thể trở thành đại lý SportBuddies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentProfiles.map((profile, i) => (
              <motion.div
                key={profile.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 group transition-all cursor-pointer hover:shadow-md"
              >
                <div
                  className={`w-14 h-14 ${profile.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span className={profile.iconColor}>{profile.icon}</span>
                </div>
                <h3 className="text-lg font-black mb-3">{profile.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{profile.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
