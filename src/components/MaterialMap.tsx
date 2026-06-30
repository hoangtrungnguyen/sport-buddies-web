/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Search, Navigation, Layers, Plus, Minus, Star, Heart, Compass, Crosshair } from 'lucide-react';

interface Court {
  id: string;
  name: string;
  sport: 'Pickleball' | 'Badminton' | 'Football' | 'Tennis';
  rating: number;
  reviews: number;
  price: string;
  address: string;
  distance: string;
  availableSlots: number;
  color: string;
  x: string;
  y: string;
  imageUrl: string;
}

const COURTS: Court[] = [
  {
    id: 'court-1',
    name: 'Pickleball Arena Q7',
    sport: 'Pickleball',
    rating: 4.9,
    reviews: 128,
    price: '180K/h',
    address: 'Nguyễn Văn Linh, Tân Phong, Quận 7',
    distance: '1.2 km',
    availableSlots: 4,
    color: '#0f9d58', // Material Green
    x: '35%',
    y: '42%',
    imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'court-2',
    name: 'Badminton Club Bình Thạnh',
    sport: 'Badminton',
    rating: 4.7,
    reviews: 95,
    price: '120K/h',
    address: 'Điện Biên Phủ, Phường 25, Bình Thạnh',
    distance: '3.4 km',
    availableSlots: 2,
    color: '#4285f4', // Material Blue
    x: '65%',
    y: '30%',
    imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'court-3',
    name: 'Sân Bóng Đá Phú Nhuận',
    sport: 'Football',
    rating: 4.8,
    reviews: 210,
    price: '350K/h',
    address: 'Hoàng Minh Giám, Phường 9, Phú Nhuận',
    distance: '4.1 km',
    availableSlots: 0,
    color: '#ea4335', // Material Red
    x: '25%',
    y: '68%',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'court-4',
    name: 'Tennis Complex Thảo Điền',
    sport: 'Tennis',
    rating: 4.6,
    reviews: 64,
    price: '250K/h',
    address: 'Nguyễn Văn Hưởng, Thảo Điền, Quận 2',
    distance: '5.0 km',
    availableSlots: 3,
    color: '#f4b400', // Material Yellow
    x: '75%',
    y: '60%',
    imageUrl: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }
];

export default function MaterialMap() {
  const [selectedCourt, setSelectedCourt] = useState<Court>(COURTS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Pickleball' | 'Badminton' | 'Football' | 'Tennis'>('All');

  const filteredCourts = COURTS.filter(court => {
    const matchesFilter = activeFilter === 'All' || court.sport === activeFilter;
    const matchesSearch = court.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          court.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-square lg:aspect-auto lg:h-[600px] rounded-[2rem] bg-neutral-100 shadow-2xl border border-neutral-200/50 overflow-hidden flex flex-col font-sans select-none">
      
      {/* Search Bar (Material 3 Style) */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-4 h-12 shadow-lg border border-neutral-100 flex items-center gap-3 transition-shadow focus-within:shadow-xl focus-within:bg-white">
          <Search className="text-neutral-400 shrink-0" size={20} />
          <input
            type="text"
            placeholder="Tìm sân gần bạn..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-full bg-transparent focus:outline-none text-neutral-800 text-sm font-medium placeholder-neutral-400"
          />
          <button className="p-1.5 hover:bg-neutral-100 active:scale-95 transition-all rounded-full text-primary shrink-0">
            <Crosshair size={18} />
          </button>
        </div>
      </div>

      {/* Filter Chips (Material 3 Style) */}
      <div className="absolute top-20 left-4 right-4 z-20 flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {(['All', 'Pickleball', 'Badminton', 'Football', 'Tennis'] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 h-8 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-sm flex items-center gap-1.5 ${
              activeFilter === filter
                ? 'bg-primary text-white scale-105 shadow-primary/20'
                : 'bg-white/90 backdrop-blur-md text-neutral-600 border border-neutral-200/50 hover:bg-white'
            }`}
          >
            {filter === 'All' ? 'Tất cả' : filter}
          </button>
        ))}
      </div>

      {/* Map Surface Area */}
      <div className="flex-grow w-full relative bg-[#e5e9f0] overflow-hidden">
        {/* Styled Vector Map Roads & Terrain */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Background land */}
          <rect width="100%" height="100%" fill="#f1f3f4" />
          
          {/* Green areas / Parks */}
          <path d="M 0,100 Q 150,50 300,120 T 600,80 L 600,0 L 0,0 Z" fill="#e8f5e9" />
          <path d="M 100,500 Q 250,450 400,520 T 800,480 L 800,600 L 100,600 Z" fill="#e8f5e9" />
          <circle cx="80%" cy="20%" r="90" fill="#e2f3eb" />
          <circle cx="20%" cy="80%" r="120" fill="#e2f3eb" />

          {/* Water Body / River */}
          <path d="M -50,300 C 200,280 300,450 850,400 L 850,440 C 300,490 200,320 -50,340 Z" fill="#d0e1f9" />

          {/* Road Network */}
          <path d="M 0,150 L 800,250" stroke="#ffffff" strokeWidth="18" fill="none" strokeLinecap="round" />
          <path d="M 0,150 L 800,250" stroke="#e9ecef" strokeWidth="14" fill="none" strokeLinecap="round" />

          <path d="M 150,0 L 250,600" stroke="#ffffff" strokeWidth="14" fill="none" />
          <path d="M 150,0 L 250,600" stroke="#e9ecef" strokeWidth="10" fill="none" />

          <path d="M 500,0 L 550,600" stroke="#ffffff" strokeWidth="14" fill="none" />
          <path d="M 500,0 L 550,600" stroke="#e9ecef" strokeWidth="10" fill="none" />

          <path d="M 0,420 Q 300,380 800,480" stroke="#ffffff" strokeWidth="10" fill="none" />
          <path d="M 0,420 Q 300,380 800,480" stroke="#e9ecef" strokeWidth="6" fill="none" />
        </svg>

        {/* User Current Location Marker */}
        <div className="absolute left-[48%] top-[52%] -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full animate-ping"></div>
            <div className="w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-md"></div>
          </div>
        </div>

        {/* Interactive Sport Court Pins */}
        <AnimatePresence>
          {filteredCourts.map((court) => {
            const isSelected = selectedCourt.id === court.id;
            return (
              <motion.button
                key={court.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.15 }}
                onClick={() => setSelectedCourt(court)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 focus:outline-none"
                style={{ left: court.x, top: court.y }}
              >
                {/* Custom Material Pin */}
                <div className="relative flex flex-col items-center">
                  {/* Pin Header / Pulse */}
                  {isSelected && (
                    <span 
                      className="absolute -inset-2 rounded-full opacity-35 animate-ping"
                      style={{ backgroundColor: court.color }}
                    ></span>
                  )}
                  
                  {/* Pin Body */}
                  <div 
                    className={`flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isSelected 
                        ? 'w-11 h-11 rounded-full scale-110 border-2 border-white text-white' 
                        : 'w-8 h-8 rounded-full border border-white text-white'
                    }`}
                    style={{ backgroundColor: court.color }}
                  >
                    <MapPin size={isSelected ? 20 : 15} className="fill-white/20" />
                  </div>

                  {/* Pricing Badge on top of pin */}
                  <div className="mt-1 bg-white px-2 py-0.5 rounded-full shadow-sm border border-neutral-100">
                    <span className="text-[9px] font-black text-neutral-800">{court.price}</span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Floating Control Buttons (Material Action Panel) */}
      <div className="absolute right-4 bottom-[200px] z-20 flex flex-col gap-2">
        <button className="w-10 h-10 rounded-xl bg-white shadow-lg border border-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 active:scale-95 transition-all">
          <Layers size={18} />
        </button>
        <button className="w-10 h-10 rounded-xl bg-white shadow-lg border border-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 active:scale-95 transition-all">
          <Plus size={18} />
        </button>
        <button className="w-10 h-10 rounded-xl bg-white shadow-lg border border-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 active:scale-95 transition-all">
          <Minus size={18} />
        </button>
      </div>

      {/* Selected Court Details Card (Material 3 Bottom Sheet / Card) */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <AnimatePresence mode="wait">
          {selectedCourt && (
            <motion.div
              key={selectedCourt.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-neutral-100 flex gap-4 items-center"
            >
              {/* Image Preview */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-neutral-100">
                <img
                  src={selectedCourt.imageUrl}
                  alt={selectedCourt.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Court Information */}
              <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black tracking-wider uppercase text-primary">
                    {selectedCourt.sport}
                  </span>
                  <div className="flex items-center gap-1 bg-amber-50 px-1.5 py-0.5 rounded-full border border-amber-100">
                    <Star size={10} className="text-amber-400 fill-amber-400" />
                    <span className="text-[10px] font-black text-amber-700">{selectedCourt.rating}</span>
                  </div>
                </div>

                <h4 className="text-sm font-black text-neutral-900 truncate mb-0.5">
                  {selectedCourt.name}
                </h4>
                
                <p className="text-xs text-neutral-500 truncate mb-2">
                  {selectedCourt.address}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-neutral-400">{selectedCourt.distance} · </span>
                    <span className="text-xs font-black text-neutral-900">{selectedCourt.price}</span>
                  </div>
                  
                  {selectedCourt.availableSlots > 0 ? (
                    <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                      Còn {selectedCourt.availableSlots} sân trống
                    </span>
                  ) : (
                    <span className="text-[10px] font-black text-red-500 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                      Hết sân hôm nay
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
