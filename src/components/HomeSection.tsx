/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Star, MapPin, Search, Bolt, ShieldCheck, Users, Map as MapIcon, Sliders, Clock, BellRing } from 'lucide-react';

const CUSTOMER_APP_URL: string = import.meta.env.VITE_CUSTOMER_APP_URL ?? '#';

const MAP_PINS = [
  { id: 'pin-green-1',  color: '#22C55E', label: 'Open',           cx: '28%', cy: '38%' },
  { id: 'pin-green-2',  color: '#22C55E', label: 'Open',           cx: '65%', cy: '30%' },
  { id: 'pin-yellow-1', color: '#F59E0B', label: 'Few slots left',  cx: '55%', cy: '52%' },
  { id: 'pin-yellow-2', color: '#F59E0B', label: 'Few slots left',  cx: '20%', cy: '62%' },
  { id: 'pin-red-1',    color: '#ba1a1a', label: 'Full',            cx: '75%', cy: '65%' },
  { id: 'pin-red-2',    color: '#ba1a1a', label: 'Full',            cx: '40%', cy: '72%' },
] as const;

const SPORT_FILTER_CHIPS = [
  { label: 'Tất cả', active: true },
  { label: 'Bóng đá', active: false },
  { label: 'Cầu lông', active: false },
  { label: 'Pickleball', active: false },
  { label: 'Tennis', active: false },
] as const;

export default function HomeSection() {
  const scrollToMkt002 = () => {
    const target = document.getElementById('mkt-002');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredCourts = [
    {
      id: 1,
      name: "Pickleball Arena Quận 7",
      location: "Nguyễn Văn Linh, Quận 7",
      rating: 4.9,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa7jGnJU-YDUn7BCeFdI-mC3_lcIDZmjzo1WWlfKAznIVvv-IOk7aECMyHPrT8iFEE0J4V4OkvDo50I4Fz29NnTODq6FS_w9GzlLzmmCdMTI5WKv-UPJp5PrhRNDMa3jtdmvyVAvn8v4GoHhBSh0pPVa6CZAsPpklxLZeJGPRD3J-uRFPcRk_HcNtO3uiQ-l4XuQunX8AXp7Kz7yPheHdtwfn_9_jGO-dwv6It8z6-ebEJ0QfBF9ul_GX6xIeoegfQcuKDHKmOh_lD",
      hot: true,
      colSpan: "md:col-span-2",
      rowSpan: "row-span-2"
    },
    {
      id: 2,
      name: "Saigon Sports Club",
      location: "Huỳnh Tấn Phát, Quận 7",
      rating: 4.8,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEiqEByN1wndX578PwhuKfp55QXZafGQjEMKRUFvYfwi8vwvZxSZCg_D9hc_FDdmCZVymbqXkzG3fiWJmHJeL0bi8G8-PqD_0VIlyURJ2HlQWCsKnusAL7mk5D3d-VPsFDfkgHTHfvkrSi_ZvjbYwbgmgNkFbkHcxH5amH-P6c1HjGX8faSgukMqDWWijPGs2ic79XpQXeknDUAq8NtRq4HyFWGj2oj3XuIR4KXB-Y-2FUbaiAgbhZdIzzg3MJsfBjKJCPsEXYU89y",
      colSpan: "md:col-span-2",
      rowSpan: ""
    },
    {
      id: 3,
      name: "Rooftop PickleHub",
      location: "Thảo Điền, Quận 2",
      rating: 4.7,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_OBih6vEKTjR5pRsp7zQwe3fQoenLk275tTRhlFpJWo_p7COlFeeZ87VHDjtAjw7d_N7icDkaKh88Nkiqe8YWLdkxsY92ODuUD5Q1RnxBSMt6inBwdMRmiCjndu9Z-u7QrL9W5bcK70e1akdJ3slt_uWe4bx8-4bqu6JfAx4Y07_OEkZg6VOvFov2M1BkHTXhxW5GteJsNgV0EvPqEiIvg9Rs3rZGTxg7blGW2HS0_A1Op1FTLhnUNkffo-UkVgL-KI5AkLer8leN",
      colSpan: "md:col-span-1",
      rowSpan: ""
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1AukG-N-YXS4jrelrsaZ7h3UON7vFIzKBHmNYV2aNeqIhQXXkWWJhr92Z3dzKJbTZ-gFHpGRKDRcUUtRad7KUQARDznm7J25v3Shzqw-R3ZgH9pAtmSqQmBpp90_VbC9hJajfVQGWEz32lmWMsYg-iGYiXMqRktoeuwp1moHPVIa6cCO-DRZptybatu8JG890ThOBSmFGxtgWGY4AhPFOTm1t8a98bvxuK_6cpqng866eclKMoz0Bh15Ph1K1peS0RiIubxIrbyLO"
            alt="Hero"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full mb-4 sm:mb-8 font-semibold text-sm border border-primary/10"
              >
                #1 Pickleball Platform in HCMC
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-8 leading-tight"
              >
                Đặt sân thể thao tại Sài Gòn trong 30 giây
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-neutral-600 mb-6 sm:mb-12"
              >
                Xem sân trống gần bạn trên bản đồ — chọn giờ — xác nhận. Không cần gọi điện.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href={CUSTOMER_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white font-bold px-8 h-12 sm:h-14 rounded-full hover:bg-primary-container transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <Search size={20} />
                  Mở app ngay
                </a>
                <button
                  onClick={scrollToMkt002}
                  className="bg-white text-primary border-2 border-primary font-bold px-8 h-12 sm:h-14 rounded-full hover:bg-primary-light transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  Xem cách hoạt động
                </button>
              </div>
            </div>

            {/* Right: Phone mockup with map screen and sport filter chips */}
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative w-full max-w-[280px]"
                aria-label="App map screen preview"
              >
                {/* Phone frame */}
                <div className="relative rounded-[2.5rem] bg-neutral-900 shadow-2xl border-[8px] border-neutral-900 overflow-hidden aspect-[9/19]">

                  {/* Mock map screen background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-green-100">

                    {/* Decorative map grid lines */}
                    <svg
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full opacity-20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id="map-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#16a34a" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#map-grid)" />
                    </svg>

                    {/* Simulated road lines */}
                    <svg
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="0" y1="40%" x2="100%" y2="45%" stroke="#d1d5db" strokeWidth="3" opacity="0.6"/>
                      <line x1="30%" y1="0" x2="35%" y2="100%" stroke="#d1d5db" strokeWidth="3" opacity="0.6"/>
                      <line x1="0" y1="65%" x2="100%" y2="60%" stroke="#d1d5db" strokeWidth="2" opacity="0.4"/>
                      <line x1="60%" y1="0" x2="65%" y2="100%" stroke="#d1d5db" strokeWidth="2" opacity="0.4"/>
                    </svg>

                    {/* Court availability pins */}
                    <svg
                      data-testid="map-pins"
                      aria-label="Court availability map pins"
                      className="absolute inset-0 w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <filter id="pin-shadow" x="-30%" y="-30%" width="160%" height="160%">
                          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.25"/>
                        </filter>
                      </defs>
                      {MAP_PINS.map((pin) => (
                        <g key={pin.id} filter="url(#pin-shadow)">
                          <circle cx={pin.cx} cy={pin.cy} r="9" fill="white" />
                          <circle cx={pin.cx} cy={pin.cy} r="7" fill={pin.color} />
                          <circle cx={pin.cx} cy={pin.cy} r="2.5" fill="white" opacity="0.8" />
                          <title>{pin.label}</title>
                        </g>
                      ))}
                    </svg>
                  </div>

                  {/* Top bar */}
                  <div className="absolute top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-sm px-3 py-2 flex items-center gap-2 border-b border-neutral-100">
                    <MapPin size={12} className="text-primary flex-shrink-0" />
                    <span className="text-[10px] font-bold text-neutral-800 truncate">Sân gần bạn</span>
                  </div>

                  {/* Sport filter chips — below top bar */}
                  <div
                    aria-label="sport-filter-chips"
                    className="absolute top-8 left-0 right-0 z-10 flex gap-1.5 px-3 overflow-x-auto"
                  >
                    {SPORT_FILTER_CHIPS.map((chip) => (
                      <span
                        key={chip.label}
                        className={[
                          'flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-sm border whitespace-nowrap',
                          chip.active
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-neutral-700 border-neutral-200',
                        ].join(' ')}
                      >
                        {chip.label}
                      </span>
                    ))}
                  </div>

                  {/* Legend strip */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm px-3 py-2 border-t border-neutral-100">
                    <div className="flex items-center justify-around gap-1">
                      <div className="flex items-center gap-1">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-success flex-shrink-0" aria-hidden="true"></span>
                        <span className="text-[8px] text-neutral-600 font-medium whitespace-nowrap">Còn trống</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-warning flex-shrink-0" aria-hidden="true"></span>
                        <span className="text-[8px] text-neutral-600 font-medium whitespace-nowrap">Gần đầy</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-error flex-shrink-0" aria-hidden="true"></span>
                        <span className="text-[8px] text-neutral-600 font-medium whitespace-nowrap">Hết chỗ</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — MKT-002 */}
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
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="mkt-002" className="py-20 bg-white">
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

      {/* Featured Courts Bento Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black mb-2">Sân Pickleball Nổi Bật</h2>
              <p className="text-neutral-600">Những địa điểm được yêu thích nhất tuần qua.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-300">
              Xem tất cả <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[600px]">
            {featuredCourts.map((court) => (
              <div
                key={court.id}
                className={`${court.colSpan} ${court.rowSpan} relative group overflow-hidden rounded-3xl shadow-md cursor-pointer`}
              >
                <img
                  src={court.image}
                  alt={court.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  {court.hot && (
                    <span className="inline-block bg-success text-white text-[10px] font-black px-2 py-1 rounded mb-3 tracking-widest">HOT</span>
                  )}
                  <h3 className="text-2xl font-black text-white mb-2">{court.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-neutral-200 flex items-center gap-1.5 text-sm">
                      <MapPin size={16} /> {court.location}
                    </p>
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-white text-sm font-bold border border-white/20">
                      <Star size={14} className="text-warning fill-warning" /> {court.rating}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Discover More Card */}
            <div className="md:col-span-1 bg-primary-light rounded-3xl p-8 flex flex-col items-center justify-center text-center border-2 border-primary/10 group cursor-pointer hover:bg-white transition-colors">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Search size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Khám phá thêm</h3>
              <p className="text-neutral-600 text-sm mb-6">Hơn 50+ sân Pickleball đang chờ bạn</p>
              <button className="bg-primary text-white w-full rounded-xl py-3 font-bold hover:bg-primary-container transition-all active:scale-95">
                Tìm ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary-container">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Sẵn sàng ra sân?</h2>
          <p className="text-xl text-primary-light/90 mb-12 max-w-2xl mx-auto">
            Tải ứng dụng SportBuddies ngay hôm nay để nhận ưu đãi giảm 20% cho lần đặt sân Pickleball đầu tiên.
          </p>
          <button className="bg-white text-primary font-black px-12 h-16 rounded-full hover:shadow-xl hover:scale-105 transition-all active:scale-95 text-lg">
            Tải App SportBuddies
          </button>
        </div>
      </section>
    </>
  );
}
