/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-1">
          <div className="text-xl font-bold text-neutral-900 mb-4 font-display">
            SportBuddies
          </div>
          <p className="text-neutral-500 text-sm">
            © 2024 SportBuddies. Nền tảng đặt sân thể thao hàng đầu tại Việt Nam.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-neutral-900 mb-4 uppercase tracking-wider text-xs">Pháp lý</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-neutral-500 hover:text-primary transition-colors">Điều khoản sử dụng</a></li>
            <li><a href="#" className="text-neutral-500 hover:text-primary transition-colors">Chính sách bảo mật</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-neutral-900 mb-4 uppercase tracking-wider text-xs">Hỗ trợ</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-neutral-500 hover:text-primary transition-colors">Liên hệ chúng tôi</a></li>
            <li><a href="#" className="text-neutral-500 hover:text-primary transition-colors">Hỗ trợ qua Zalo</a></li>
            <li><a href="#" className="text-neutral-500 hover:text-primary transition-colors">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-neutral-900 mb-4 uppercase tracking-wider text-xs">Kết nối</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-neutral-500 hover:text-primary transition-colors">Facebook Page</a></li>
            <li><a href="#" className="text-neutral-500 hover:text-primary transition-colors">TikTok Việt Nam</a></li>
            <li><a href="#" className="text-neutral-500 hover:text-primary transition-colors">Instagram</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-neutral-900 mb-4 uppercase tracking-wider text-xs">Dành cho</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/cho-chu-san" className="text-neutral-500 hover:text-primary transition-colors">Chủ sân</a></li>
            <li><a href="/dai-ly" className="text-neutral-500 hover:text-primary transition-colors">Đại lý / CTV</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
