/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function CTASection() {
  return (
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
  );
}
