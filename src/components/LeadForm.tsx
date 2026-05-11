/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export type SportType = 'Bóng đá' | 'Cầu lông' | 'Pickleball' | 'Tennis' | 'Đa năng';

export const SPORT_TYPES: SportType[] = [
  'Bóng đá',
  'Cầu lông',
  'Pickleball',
  'Tennis',
  'Đa năng',
];

export const HCMC_DISTRICTS = [
  'Quận 1',
  'Quận 3',
  'Quận 4',
  'Quận 5',
  'Quận 6',
  'Quận 7',
  'Quận 8',
  'Quận 10',
  'Quận 11',
  'Quận 12',
  'Bình Thạnh',
  'Gò Vấp',
  'Phú Nhuận',
  'Tân Bình',
  'Tân Phú',
  'Bình Tân',
  'Thủ Đức',
  'Bình Chánh',
  'Cần Giờ',
  'Củ Chi',
  'Hóc Môn',
  'Nhà Bè',
];

export interface LeadFormData {
  ownerName: string;
  phone: string;
  courtName: string;
  sportTypes: SportType[];
  district: string;
}

interface LeadFormProps {
  onSubmit?: (data: LeadFormData) => void;
}

export default function LeadForm({ onSubmit }: LeadFormProps) {
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [courtName, setCourtName] = useState('');
  const [sportTypes, setSportTypes] = useState<SportType[]>([]);
  const [district, setDistrict] = useState('');

  const toggleSport = (sport: SportType) => {
    setSportTypes(prev =>
      prev.includes(sport) ? prev.filter(s => s !== sport) : [...prev, sport]
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.({ ownerName, phone, courtName, sportTypes, district });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} data-testid="lead-form">
      {/* Owner Name */}
      <div>
        <label
          htmlFor="lead-owner-name"
          className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1"
        >
          Họ và tên
        </label>
        <input
          id="lead-owner-name"
          type="text"
          value={ownerName}
          onChange={e => setOwnerName(e.target.value)}
          placeholder="Họ và tên của bạn"
          required
          className="w-full h-14 rounded-2xl px-5 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium placeholder-neutral-300"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="lead-phone"
          className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1"
        >
          Số điện thoại
        </label>
        <input
          id="lead-phone"
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="090 123 4567"
          required
          className="w-full h-14 rounded-2xl px-5 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium placeholder-neutral-300"
        />
      </div>

      {/* Court Name */}
      <div>
        <label
          htmlFor="lead-court-name"
          className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1"
        >
          Tên sân thể thao
        </label>
        <input
          id="lead-court-name"
          type="text"
          value={courtName}
          onChange={e => setCourtName(e.target.value)}
          placeholder="VD: Pickleball Arena Quận 7"
          required
          className="w-full h-14 rounded-2xl px-5 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium placeholder-neutral-300"
        />
      </div>

      {/* Sport Types multi-select */}
      <div>
        <span className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
          Môn thể thao
        </span>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Môn thể thao">
          {SPORT_TYPES.map(sport => {
            const selected = sportTypes.includes(sport);
            return (
              <button
                key={sport}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleSport(sport)}
                className={[
                  'inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all',
                  selected
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-primary hover:text-primary',
                ].join(' ')}
              >
                {selected && <Check size={14} strokeWidth={3} />}
                {sport}
              </button>
            );
          })}
        </div>
      </div>

      {/* District */}
      <div>
        <label
          htmlFor="lead-district"
          className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1"
        >
          Quận / Huyện (TP.HCM)
        </label>
        <select
          id="lead-district"
          value={district}
          onChange={e => setDistrict(e.target.value)}
          required
          className="w-full h-14 rounded-2xl px-5 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-neutral-700 appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Chọn quận / huyện
          </option>
          {HCMC_DISTRICTS.map(d => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full h-14 bg-primary text-white rounded-2xl font-black hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
      >
        Đăng ký sân ngay
        <ArrowRight size={20} />
      </button>
      <p className="text-center text-[10px] text-neutral-400 font-medium">
        Cam kết bảo mật thông tin 100%.
      </p>
    </form>
  );
}
