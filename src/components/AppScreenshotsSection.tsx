/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { MapPin, Filter, Star, Clock, ChevronRight, CheckCircle, Calendar } from 'lucide-react';

// ----- Screen 1: Map -----
function MapScreen() {
  return (
    <div className="w-full h-full bg-[#e8f5e9] flex flex-col">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <span className="text-[9px] font-black text-neutral-900">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3 h-2 rounded-sm bg-neutral-900 opacity-70"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-900 opacity-70"></div>
        </div>
      </div>

      {/* Search bar */}
      <div className="mx-3 mb-2">
        <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
          <MapPin size={11} className="text-primary shrink-0" />
          <span className="text-[9px] text-neutral-600 flex-1">Tìm sân gần bạn...</span>
          <Filter size={10} className="text-primary" />
        </div>
      </div>

      {/* Sport filter chips */}
      <div className="flex gap-1.5 px-3 mb-2 overflow-hidden">
        {['Pickleball', 'Bóng đá', 'Cầu lông'].map((sport, i) => (
          <span
            key={sport}
            className={`text-[8px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${
              i === 0 ? 'bg-primary text-white' : 'bg-white text-neutral-600 border border-neutral-200'
            }`}
          >
            {sport}
          </span>
        ))}
      </div>

      {/* Map area — hex colors intentionally off-token to represent map terrain colors */}
      <div className="flex-1 relative mx-3 mb-3 rounded-xl overflow-hidden bg-[#d4edda] border border-[#b8dfc3]">
        {/* Road grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#6b9e7a" strokeWidth="2" />
          <line x1="0" y1="45%" x2="100%" y2="45%" stroke="#6b9e7a" strokeWidth="2" />
          <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#6b9e7a" strokeWidth="1" />
          <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#6b9e7a" strokeWidth="1" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#6b9e7a" strokeWidth="1" />
        </svg>

        {/* Location pins: green = available, yellow = busy, red = full */}
        {[
          { x: '30%', y: '30%', color: '#16a34a', label: '4' },
          { x: '55%', y: '45%', color: '#ca8a04', label: '2' },
          { x: '72%', y: '28%', color: '#dc2626', label: '0' },
          { x: '45%', y: '65%', color: '#16a34a', label: '6' },
        ].map((pin, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-full"
            style={{ left: pin.x, top: pin.y }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shadow-md text-white text-[8px] font-black border-2 border-white"
              style={{ backgroundColor: pin.color }}
            >
              {pin.label}
            </div>
            <div
              className="w-2 h-2 mx-auto -mt-0.5 rotate-45 border-b-2 border-r-2 border-white"
              style={{ backgroundColor: pin.color }}
            ></div>
          </div>
        ))}

        {/* My location dot */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-md"></div>
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-blue-400 opacity-40 scale-[2.5]"></div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1.5 shadow-sm">
          <p className="text-[8px] font-black text-neutral-900">Sân gần bạn</p>
          <p className="text-[7px] text-neutral-600">10 sân • bán kính 3km</p>
        </div>
      </div>
    </div>
  );
}

// ----- Screen 2: Court Detail -----
function CourtDetailScreen() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <span className="text-[9px] font-black text-neutral-900">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3 h-2 rounded-sm bg-neutral-900 opacity-70"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-900 opacity-70"></div>
        </div>
      </div>

      {/* Photo placeholder / carousel */}
      <div className="mx-3 mb-2.5 rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-primary/30 to-primary/10 relative flex items-center justify-center border border-primary/10">
        <div className="text-primary/40">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
        </div>
        {/* Carousel dots */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`rounded-full ${i === 0 ? 'w-3 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`}></div>
          ))}
        </div>
      </div>

      {/* Court info */}
      <div className="px-3 flex-1">
        <div className="flex items-start justify-between mb-1.5">
          <div>
            <p className="text-[10px] font-black text-neutral-900 leading-tight">Pickleball Arena Q7</p>
            <p className="text-[8px] text-neutral-600 flex items-center gap-0.5 mt-0.5">
              <MapPin size={8} /> Nguyễn Văn Linh, Q7
            </p>
          </div>
          <div className="flex items-center gap-0.5 bg-amber-50 px-1.5 py-0.5 rounded-full border border-amber-100">
            <Star size={8} className="text-amber-400 fill-amber-400" />
            <span className="text-[8px] font-black text-amber-600">4.9</span>
          </div>
        </div>

        {/* Price */}
        <div className="bg-primary-light rounded-lg px-2 py-1.5 mb-2 flex items-center justify-between">
          <span className="text-[8px] text-neutral-600">Xem sân và giá</span>
          <span className="text-[10px] font-black text-primary">180K/h</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1">
          {['Đèn LED', 'Wifi', 'Giữ xe', 'Nước'].map((tag) => (
            <span key={tag} className="text-[7px] bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full mt-2 bg-primary text-white text-[9px] font-black py-1.5 rounded-lg flex items-center justify-center gap-1">
          Chọn giờ trống <ChevronRight size={10} />
        </button>
      </div>
    </div>
  );
}

// ----- Screen 3: Slot Picker -----
function SlotPickerScreen() {
  const dates: [string, string][] = [['T2', '12'], ['T3', '13'], ['T4', '14'], ['T5', '15']];
  const slots = [
    { time: '06:00', available: true },
    { time: '07:00', available: true },
    { time: '08:00', available: false },
    { time: '09:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: false },
    { time: '18:00', available: true },
    { time: '19:00', available: true },
    { time: '20:00', available: false },
  ];

  return (
    <div className="w-full h-full bg-neutral-50 flex flex-col">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <span className="text-[9px] font-black text-neutral-900">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3 h-2 rounded-sm bg-neutral-900 opacity-70"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-900 opacity-70"></div>
        </div>
      </div>

      {/* Header */}
      <div className="px-3 mb-2">
        <p className="text-[10px] font-black text-neutral-900">Chọn giờ trống</p>
        <p className="text-[8px] text-neutral-600">Pickleball Arena Q7</p>
      </div>

      {/* Date tabs */}
      <div className="flex gap-1.5 px-3 mb-3">
        {dates.map(([day, num], i) => (
          <button
            key={i}
            className={`flex-1 flex flex-col items-center py-1 rounded-lg text-[8px] font-bold ${
              i === 0
                ? 'bg-primary text-white'
                : 'bg-white text-neutral-600 border border-neutral-200'
            }`}
          >
            <span className="leading-none">{day}</span>
            <span className="leading-none font-black text-[10px]">{num}</span>
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-3 px-3 mb-2">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded bg-primary-light border border-primary/30"></div>
          <span className="text-[7px] text-neutral-600">Trống</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded bg-neutral-200"></div>
          <span className="text-[7px] text-neutral-600">Hết</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded bg-primary"></div>
          <span className="text-[7px] text-neutral-600">Đã chọn</span>
        </div>
      </div>

      {/* Slot grid */}
      <div className="flex-1 px-3 grid grid-cols-3 gap-1.5 content-start">
        {slots.map((slot, i) => (
          <button
            key={i}
            className={`py-1.5 rounded-lg text-[8px] font-bold flex items-center justify-center gap-0.5 ${
              i === 6
                ? 'bg-primary text-white'
                : slot.available
                ? 'bg-primary-light text-primary border border-primary/20'
                : 'bg-neutral-200 text-neutral-600 cursor-not-allowed'
            }`}
          >
            <Clock size={7} />
            {slot.time}
          </button>
        ))}
      </div>

      {/* Confirm button */}
      <div className="px-3 pb-3 pt-2">
        <button className="w-full bg-primary text-white text-[9px] font-black py-2 rounded-xl">
          Xác nhận · 18:00–19:00
        </button>
      </div>
    </div>
  );
}

// ----- Screen 4: Booking Confirmed -----
function BookingConfirmedScreen() {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center px-4 relative">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 pt-3 pb-1">
        <span className="text-[9px] font-black text-neutral-900">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3 h-2 rounded-sm bg-neutral-900 opacity-70"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-900 opacity-70"></div>
        </div>
      </div>

      {/* Success icon */}
      <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4 mt-6">
        <CheckCircle size={32} className="text-primary" strokeWidth={2.5} />
      </div>

      <p className="text-[12px] font-black text-neutral-900 text-center leading-tight mb-1">
        Đặt xong!
      </p>
      <p className="text-[8px] text-neutral-600 text-center mb-4 px-2 leading-relaxed">
        Chờ chủ sân duyệt — thường xác nhận trong 15 phút.
      </p>

      {/* Booking summary card */}
      <div className="w-full bg-neutral-50 rounded-xl p-3 border border-neutral-100 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
            <Calendar size={14} className="text-primary" />
          </div>
          <div>
            <p className="text-[9px] font-black text-neutral-900">Pickleball Arena Q7</p>
            <p className="text-[7px] text-neutral-600">Thứ Hai, 12/05 · 18:00 – 19:00</p>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-2 flex justify-between items-center">
          <span className="text-[8px] text-neutral-600">Tổng thanh toán</span>
          <span className="text-[10px] font-black text-primary">180,000đ</span>
        </div>
      </div>

      {/* Status badge */}
      <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 rounded-full px-3 py-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
        <span className="text-[8px] font-bold text-amber-700">Đang chờ chủ sân duyệt</span>
      </div>
    </div>
  );
}

// ----- Phone Frame Wrapper -----
interface PhoneMockupProps {
  children: ReactNode;
  label: string;
  delay?: number;
  key?: number;
}

function PhoneMockup({ children, label, delay = 0 }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="flex flex-col items-center gap-3 snap-center flex-shrink-0"
    >
      {/* Phone frame */}
      <div className="relative w-[155px] aspect-[9/19] rounded-[2rem] bg-neutral-900 shadow-2xl border-[7px] border-neutral-900 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-900 rounded-b-xl z-20"></div>
        {/* Screen content */}
        <div className="w-full h-full bg-white overflow-hidden relative">
          {children}
        </div>
      </div>

      {/* Label */}
      <p className="text-sm font-bold text-neutral-700 text-center leading-tight max-w-[160px]">{label}</p>
    </motion.div>
  );
}

// ----- Main Section -----
export default function AppScreenshotsSection() {
  const appUrl = import.meta.env.VITE_CUSTOMER_APP_URL ?? '#';

  const screens = [
    {
      component: <MapScreen />,
      label: 'Sân gần bạn',
      delay: 0,
    },
    {
      component: <CourtDetailScreen />,
      label: 'Xem sân và giá',
      delay: 0.1,
    },
    {
      component: <SlotPickerScreen />,
      label: 'Chọn giờ trống',
      delay: 0.2,
    },
    {
      component: <BookingConfirmedScreen />,
      label: 'Đặt xong — chờ chủ sân duyệt',
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full mb-6 font-semibold text-sm border border-primary/10">
            Giao diện ứng dụng
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            Trải nghiệm đặt sân <span className="text-primary italic">mượt mà</span> từ A đến Z
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Từ tìm sân trên bản đồ đến xác nhận đặt chỗ — chỉ vài thao tác đơn giản.
          </p>
        </motion.div>

        {/* Phone mockups:
            - Mobile: horizontal scroll carousel (overflow-x-auto, flex, snap-x snap-mandatory)
            - Desktop md+: 4-column grid */}
        <div className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 -mx-6 px-6">
          {screens.map((screen, i) => (
            <PhoneMockup key={i} label={screen.label} delay={screen.delay}>
              {screen.component}
            </PhoneMockup>
          ))}
        </div>

        <div className="hidden md:flex gap-6 justify-center">
          {screens.map((screen, i) => (
            <PhoneMockup key={i} label={screen.label} delay={screen.delay}>
              {screen.component}
            </PhoneMockup>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-black px-10 h-14 rounded-full hover:bg-primary-container hover:shadow-lg hover:scale-105 transition-all active:scale-95 flex items-center justify-center text-base"
          >
            Mở app ngay
          </a>
        </motion.div>
      </div>
    </section>
  );
}
