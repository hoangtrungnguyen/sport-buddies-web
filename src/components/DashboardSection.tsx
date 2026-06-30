/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, Calendar, Users, DollarSign, Check, X, 
  MapPin, Bell, ChevronRight, Settings, Plus, Star 
} from 'lucide-react';

interface Booking {
  id: string;
  courtName: string;
  customerName: string;
  phoneNumber: string;
  timeSlot: string;
  date: string;
  sport: string;
  price: string;
  status: 'pending' | 'approved' | 'rejected';
}

const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'b-1',
    courtName: 'Pickleball Arena Q7 - Sân 1',
    customerName: 'Hoàng Minh',
    phoneNumber: '0901 234 567',
    timeSlot: '18:00 - 19:00',
    date: 'Hôm nay, 30/05',
    sport: 'Pickleball',
    price: '180,000đ',
    status: 'pending'
  },
  {
    id: 'b-2',
    courtName: 'Pickleball Arena Q7 - Sân 2',
    customerName: 'Linh Chi',
    phoneNumber: '0912 345 678',
    timeSlot: '19:00 - 20:00',
    date: 'Hôm nay, 30/05',
    sport: 'Pickleball',
    price: '180,000đ',
    status: 'pending'
  },
  {
    id: 'b-3',
    courtName: 'Pickleball Arena Q7 - Sân 1',
    customerName: 'Quốc Bảo',
    phoneNumber: '0983 456 789',
    timeSlot: '20:00 - 21:00',
    date: 'Ngày mai, 31/05',
    sport: 'Pickleball',
    price: '180,000đ',
    status: 'approved'
  }
];

export default function DashboardSection() {
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [toast, setToast] = useState<string | null>(null);

  const handleAction = (id: string, action: 'approved' | 'rejected') => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: action } : b));
    const booking = bookings.find(b => b.id === id);
    if (booking) {
      setToast(`Đã ${action === 'approved' ? 'duyệt' : 'từ chối'} booking của ${booking.customerName}`);
      setTimeout(() => setToast(null), 3000);
    }
  };

  const pendingCount = bookings.filter(b => b.status === 'pending').length;
  const approvedCount = bookings.filter(b => b.status === 'approved').length;

  return (
    <section className="py-32 bg-neutral-50 min-h-screen relative overflow-hidden font-sans">
      {/* Toast Alert */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-24 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 flex items-center gap-2 border border-neutral-800 text-sm font-bold"
          >
            <Check size={16} className="text-primary" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-neutral-900 mb-2">Dashboard Chủ Sân</h1>
            <p className="text-neutral-500 font-medium">Chào mừng trở lại, Pickleball Arena Q7</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white border border-neutral-200 text-neutral-700 font-bold px-5 h-12 rounded-xl shadow-sm hover:bg-neutral-50 flex items-center gap-2 text-sm">
              <Settings size={18} /> Cài đặt sân
            </button>
            <button className="bg-primary text-white font-bold px-5 h-12 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-container flex items-center gap-2 text-sm">
              <Plus size={18} /> Thêm sân mới
            </button>
          </div>
        </div>

        {/* Interactive Playground Banner */}
        <div className="bg-primary-light/50 border border-primary/20 rounded-3xl p-5 mb-8 flex items-start gap-4">
          <div className="w-10 h-10 bg-primary-light rounded-2xl flex items-center justify-center shrink-0 text-primary">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
          </div>
          <div>
            <h4 className="text-sm font-black text-neutral-900 uppercase tracking-wider mb-0.5">Khu vực thử nghiệm tương tác (Interactive Playground)</h4>
            <p className="text-xs text-neutral-600 font-medium leading-relaxed">
              Trang này là môi trường mô phỏng các tính năng dành cho chủ sân. Bạn có thể nhấn <strong>Duyệt ngay</strong> hoặc <strong>Từ chối</strong> các yêu cầu đặt sân bên dưới để trải nghiệm trực tiếp luồng vận hành thực tế.
            </p>
          </div>
        </div>

        {/* Overview Stats Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Doanh thu hôm nay', val: '540,000đ', icon: <DollarSign size={24} />, color: 'bg-green-50 text-green-600' },
            { label: 'Yêu cầu chờ duyệt', val: pendingCount.toString(), icon: <Bell size={24} />, color: 'bg-amber-50 text-amber-600', highlight: pendingCount > 0 },
            { label: 'Lịch đã duyệt', val: approvedCount.toString(), icon: <Calendar size={24} />, color: 'bg-blue-50 text-blue-600' },
            { label: 'Tỉ lệ lấp đầy', val: '78%', icon: <BarChart3 size={24} />, color: 'bg-purple-50 text-purple-600' }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-neutral-400 text-xs font-black uppercase tracking-wider mb-2">{stat.label}</p>
                <p className="text-2xl font-black text-neutral-900">{stat.val}</p>
              </div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color} ${stat.highlight ? 'animate-pulse' : ''}`}>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Booking Approvals Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm">
              <h2 className="text-lg font-black text-neutral-900 mb-6 flex items-center gap-2">
                <Bell size={20} className="text-primary" /> Yêu cầu đặt sân mới
              </h2>

              <div className="space-y-4">
                {bookings.filter(b => b.status === 'pending').length === 0 ? (
                  <div className="text-center py-12 text-neutral-400">
                    <Check className="mx-auto text-green-500 mb-3" size={32} />
                    <p className="font-bold">Đã duyệt hết lịch đặt sân!</p>
                  </div>
                ) : (
                  bookings.filter(b => b.status === 'pending').map((booking) => (
                    <motion.div
                      layout
                      key={booking.id}
                      className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-black uppercase tracking-wider text-primary bg-primary-light px-2 py-0.5 rounded-full">
                            {booking.sport}
                          </span>
                          <span className="text-xs font-bold text-neutral-400">{booking.date}</span>
                        </div>
                        <h4 className="font-black text-neutral-900 mb-0.5">{booking.courtName}</h4>
                        <p className="text-xs text-neutral-600 mb-1">
                          Khách đặt: <span className="font-bold text-neutral-800">{booking.customerName}</span> · <span className="font-mono text-neutral-500">{booking.phoneNumber}</span>
                        </p>
                        <p className="text-xs font-bold text-neutral-900">{booking.timeSlot} · <span className="text-primary">{booking.price}</span></p>
                      </div>

                      <div className="flex gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => handleAction(booking.id, 'rejected')}
                          className="flex-1 sm:flex-initial h-10 px-4 rounded-xl border border-neutral-200 text-neutral-500 hover:bg-neutral-100 active:scale-95 transition-all flex items-center justify-center gap-1.5 text-xs font-bold"
                        >
                          <X size={14} /> Từ chối
                        </button>
                        <button
                          onClick={() => handleAction(booking.id, 'approved')}
                          className="flex-1 sm:flex-initial h-10 px-4 rounded-xl bg-primary text-white hover:bg-primary-container active:scale-95 transition-all flex items-center justify-center gap-1.5 text-xs font-bold shadow-md shadow-primary/10"
                        >
                          <Check size={14} /> Duyệt ngay
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* Approved List */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm">
              <h2 className="text-lg font-black text-neutral-900 mb-6 flex items-center gap-2">
                <Calendar size={20} className="text-green-600" /> Lịch đặt sân đã duyệt hôm nay
              </h2>

              <div className="divide-y divide-neutral-100">
                {bookings.filter(b => b.status === 'approved').map((booking) => (
                  <div key={booking.id} className="py-4 flex justify-between items-center first:pt-0 last:pb-0">
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">{booking.courtName}</h4>
                      <p className="text-xs text-neutral-500">{booking.timeSlot} · Khách: {booking.customerName} ({booking.phoneNumber})</p>
                    </div>
                    <span className="text-[10px] font-black text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                      ĐÃ DUYỆT
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Revenue Analytics chart representation */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm">
              <h2 className="text-lg font-black text-neutral-900 mb-6 flex items-center gap-2">
                <BarChart3 size={20} className="text-purple-600" /> Biểu đồ doanh thu tuần
              </h2>
              
              {/* Graphic Chart representation */}
              <div className="h-48 flex items-end gap-3 px-2 pt-6">
                {[
                  { day: 'T2', val: 40, label: '320K' },
                  { day: 'T3', val: 65, label: '520K' },
                  { day: 'T4', val: 50, label: '400K' },
                  { day: 'T5', val: 80, label: '640K' },
                  { day: 'T6', val: 95, label: '760K' },
                  { day: 'T7', val: 120, label: '960K' },
                  { day: 'CN', val: 110, label: '880K' }
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer">
                    <div className="text-[8px] font-bold text-neutral-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {bar.label}
                    </div>
                    <div 
                      className={`w-full rounded-t-lg transition-all duration-500 ${
                        i === 5 ? 'bg-primary' : 'bg-primary-light group-hover:bg-primary/60'
                      }`}
                      style={{ height: `${(bar.val / 120) * 100}%` }}
                    ></div>
                    <span className="text-[10px] font-bold text-neutral-500 mt-2">{bar.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Managed Sports Complex Info */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm">
              <h2 className="text-lg font-black text-neutral-900 mb-4">Câu lạc bộ của bạn</h2>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-light text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black text-neutral-900 text-sm">Pickleball Arena Q7</h4>
                  <p className="text-xs text-neutral-500">Nguyễn Văn Linh, Tân Phong, Quận 7</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
