/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Search, MapPin } from 'lucide-react';

export const CUSTOMER_APP_URL: string = import.meta.env.VITE_CUSTOMER_APP_URL ?? '#';

export const MAP_PINS = [
  { id: 'pin-green-1',  color: '#22C55E', label: 'Open',           cx: '28%', cy: '38%' },
  { id: 'pin-green-2',  color: '#22C55E', label: 'Open',           cx: '65%', cy: '30%' },
  { id: 'pin-yellow-1', color: '#F59E0B', label: 'Few slots left',  cx: '55%', cy: '52%' },
  { id: 'pin-yellow-2', color: '#F59E0B', label: 'Few slots left',  cx: '20%', cy: '62%' },
  { id: 'pin-red-1',    color: '#ba1a1a', label: 'Full',            cx: '75%', cy: '65%' },
  { id: 'pin-red-2',    color: '#ba1a1a', label: 'Full',            cx: '40%', cy: '72%' },
] as const;

export const SPORT_FILTER_CHIPS = [
  { label: 'Tất cả', active: true },
  { label: 'Bóng đá', active: false },
  { label: 'Cầu lông', active: false },
  { label: 'Pickleball', active: false },
  { label: 'Tennis', active: false },
] as const;

export default function HeroSection() {
  const scrollToMkt002 = () => {
    const target = document.getElementById('mkt-002');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
  );
}
