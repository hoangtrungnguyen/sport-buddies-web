/**
 * LeadForm — Contact / sign-up form for court owners.
 *
 * Collects name, phone number, and court name then delegates submission to the
 * caller-supplied `onSubmit` handler.  The component manages its own field
 * state and basic loading / error display; business logic (API call, UTM
 * attribution) lives in the parent via the `onSubmit` prop.
 */

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export interface LeadFormData {
  name: string;
  phone: string;
  court_name: string;
}

export interface LeadFormProps {
  /** Called with validated form data when the user submits. */
  onSubmit: (data: LeadFormData) => Promise<void>;
}

export default function LeadForm({ onSubmit }: LeadFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [courtName, setCourtName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim() || !courtName.trim()) {
      setError('Vui lòng điền đầy đủ họ tên, số điện thoại và tên sân.');
      return;
    }

    setLoading(true);

    try {
      await onSubmit({ name: name.trim(), phone: phone.trim(), court_name: courtName.trim() });
      setSuccess(true);
      setName('');
      setPhone('');
      setCourtName('');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Đã có lỗi xảy ra. Vui lòng thử lại.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">🎉</div>
        <h4 className="text-xl font-black mb-2">Đăng ký thành công!</h4>
        <p className="text-neutral-500 text-sm">
          Chúng tôi sẽ liên hệ với bạn trong vòng 24h.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
          Họ và tên
        </label>
        <input
          type="text"
          placeholder="Họ và tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
          className="w-full h-14 rounded-2xl px-5 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium placeholder-neutral-300 disabled:opacity-50"
        />
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
          Số điện thoại
        </label>
        <input
          type="tel"
          placeholder="090 123 4567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          disabled={loading}
          className="w-full h-14 rounded-2xl px-5 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium placeholder-neutral-300 disabled:opacity-50"
        />
      </div>

      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
          Tên sân thể thao
        </label>
        <input
          type="text"
          placeholder="VD: Pickleball Arena Quận 7"
          value={courtName}
          onChange={(e) => setCourtName(e.target.value)}
          required
          disabled={loading}
          className="w-full h-14 rounded-2xl px-5 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium placeholder-neutral-300 disabled:opacity-50"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500 font-medium text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full h-14 bg-primary text-white rounded-2xl font-black hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Đang gửi...' : 'Đăng ký sân ngay'}
        {!loading && <ArrowRight size={20} />}
      </button>

      <p className="text-center text-[10px] text-neutral-400 font-medium">
        Cam kết bảo mật thông tin 100%.
      </p>
    </form>
  );
}
