/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook } from 'lucide-react';

/** Inline SVG for TikTok (not available in lucide-react) */
function TikTokIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.53V6.78a4.85 4.85 0 0 1-1.01-.09z" />
    </svg>
  );
}

const FACEBOOK_URL = 'https://facebook.com/sportbuddies';
const TIKTOK_URL = 'https://tiktok.com/@sportbuddies';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
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
      </div>
    </footer>
  );
}
