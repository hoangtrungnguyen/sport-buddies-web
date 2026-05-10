/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/** Placeholder Zalo support number — replace with the real OA link before go-live. */
const ZALO_SUPPORT_URL = "https://zalo.me/0900000000";

function ZaloBadge() {
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0068FF] text-white text-[10px] font-bold leading-none mr-1.5 shrink-0"
      aria-hidden="true"
    >
      ZL
    </span>
  );
}

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
            <li>
              <a
                href={ZALO_SUPPORT_URL}
                className="inline-flex items-center text-neutral-500 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hỗ trợ qua Zalo"
              >
                <ZaloBadge />
                Hỗ trợ qua Zalo
              </a>
            </li>
            <li><a href="#" className="text-neutral-500 hover:text-primary transition-colors">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-neutral-900 mb-4 uppercase tracking-wider text-xs">Kết nối</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary transition-colors"
                aria-label="SportBuddies trên Facebook"
              >
                <Facebook size={16} aria-hidden="true" />
                Facebook Page
              </a>
            </li>
            <li>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary transition-colors"
                aria-label="SportBuddies trên TikTok"
              >
                <TikTokIcon size={16} />
                TikTok Việt Nam
              </a>
            </li>
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
