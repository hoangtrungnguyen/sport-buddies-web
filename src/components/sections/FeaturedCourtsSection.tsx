/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Star, MapPin, Search } from 'lucide-react';

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
    hot: false,
    colSpan: "md:col-span-2",
    rowSpan: ""
  },
  {
    id: 3,
    name: "Rooftop PickleHub",
    location: "Thảo Điền, Quận 2",
    rating: 4.7,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_OBih6vEKTjR5pRsp7zQwe3fQoenLk275tTRhlFpJWo_p7COlFeeZ87VHDjtAjw7d_N7icDkaKh88Nkiqe8YWLdkxsY92ODuUD5Q1RnxBSMt6inBwdMRmiCjndu9Z-u7QrL9W5bcK70e1akdJ3slt_uWe4bx8-4bqu6JfAx4Y07_OEkZg6VOvFov2M1BkHTXhxW5GteJsNgV0EvPqEiIvg9Rs3rZGTxg7blGW2HS0_A1Op1FTLhnUNkffo-UkVgL-KI5AkLer8leN",
    hot: false,
    colSpan: "md:col-span-1",
    rowSpan: ""
  }
];

export default function FeaturedCourtsSection() {
  return (
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
  );
}
