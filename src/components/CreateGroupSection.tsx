/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Calendar, 
  Trophy, 
  Plus, 
  Search, 
  Clock, 
  MapPin, 
  Flame, 
  Sparkles, 
  TrendingUp, 
  UserPlus, 
  CheckCircle2, 
  Info,
  DollarSign,
  ChevronRight,
  Shield,
  Activity,
  ArrowRight
} from 'lucide-react';

interface Slot {
  id: string;
  sport: 'Pickleball' | 'Badminton' | 'Football' | 'Tennis' | 'Basketball';
  title: string;
  time: string;
  date: string;
  location: string;
  host: string;
  joined: number;
  maxSpots: number;
  level: string;
  cost: string;
  avatarColor: string;
}

export default function CreateGroupSection() {
  const [activeTab, setActiveTab] = useState<'join' | 'event' | 'group'>('join');
  
  // States for "Join a slot" interaction
  const [slots, setSlots] = useState<Slot[]>([
    {
      id: 'slot-1',
      sport: 'Pickleball',
      title: 'Giao lưu Pickleball sáng cuối tuần',
      time: '08:00 - 10:00',
      date: 'Chủ Nhật, 31/05/2026',
      location: 'Pickleball Sài Gòn, Quận 7',
      host: 'Minh Hoàng',
      joined: 3,
      maxSpots: 4,
      level: 'Trung bình (Intermediate)',
      cost: 'Chia đều tiền sân',
      avatarColor: 'bg-amber-100 text-amber-700'
    },
    {
      id: 'slot-2',
      sport: 'Badminton',
      title: 'Tuyển 2 nam/nữ đánh đôi sân Viettel',
      time: '19:00 - 21:00',
      date: 'Thứ Hai, 01/06/2026',
      location: 'Sân Cầu Lông Viettel, Hẻm 285 CMT8, Q.10',
      host: 'Thanh Vân',
      joined: 6,
      maxSpots: 8,
      level: 'Mọi cấp độ (All levels)',
      cost: '50k/người',
      avatarColor: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 'slot-3',
      sport: 'Football',
      title: 'Cần tìm 3 đồng đội đá bóng sân 7',
      time: '20:30 - 22:00',
      date: 'Thứ Tư, 03/06/2026',
      location: 'Sân bóng đá Kỳ Hòa, Quận 10',
      host: 'Tuấn Anh',
      joined: 11,
      maxSpots: 14,
      level: 'Khá/Mạnh (Advanced)',
      cost: 'Chia đều (khoảng 40k)',
      avatarColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 'slot-4',
      sport: 'Tennis',
      title: 'Tìm đối đánh đơn/đôi Tennis Bình Lợi',
      time: '17:00 - 19:00',
      date: 'Thứ Bảy, 06/06/2026',
      location: 'CLB Tennis Khang An, Gò Vấp',
      host: 'Quốc Bảo',
      joined: 2,
      maxSpots: 4,
      level: 'Cơ bản/Trung bình',
      cost: 'Chia đều hóa đơn',
      avatarColor: 'bg-rose-100 text-rose-700'
    }
  ]);
  
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [joinName, setJoinName] = useState('');
  const [joinPhone, setJoinPhone] = useState('');
  const [joinLevel, setJoinLevel] = useState('Intermediate');
  const [joinSuccess, setJoinSuccess] = useState(false);

  // States for "Create sport event" form
  const [eventSport, setEventSport] = useState<'Pickleball' | 'Badminton' | 'Football' | 'Tennis' | 'Basketball'>('Pickleball');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventMaxSpots, setEventMaxSpots] = useState(4);
  const [eventCost, setEventCost] = useState('Chia đều');
  const [eventLevel, setEventLevel] = useState('Tất cả cấp độ');
  const [eventSuccess, setEventSuccess] = useState<string | null>(null);

  // States for "Create a Group" interaction
  const [groupName, setGroupName] = useState('');
  const [groupSport, setGroupSport] = useState('Pickleball');
  const [groupDesc, setGroupDesc] = useState('');
  const [groupSuccess, setGroupSuccess] = useState<boolean>(false);
  const [myClubs, setMyClubs] = useState<Array<{ name: string; sport: string; code: string; members: number }>>([
    { name: 'Pickleball SG Stars', sport: 'Pickleball', code: 'PB-9941', members: 16 }
  ]);

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinName.trim() || !joinPhone.trim() || !selectedSlot) return;

    // Simulate joining slot
    setSlots(prev => prev.map(s => {
      if (s.id === selectedSlot.id) {
        return { ...s, joined: Math.min(s.joined + 1, s.maxSpots) };
      }
      return s;
    }));

    setJoinSuccess(true);
    setTimeout(() => {
      setJoinSuccess(false);
      setSelectedSlot(null);
      setJoinName('');
      setJoinPhone('');
    }, 2000);
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventTitle.trim() || !eventDate || !eventTime || !eventLocation.trim()) {
      alert('Vui lòng điền đầy đủ thông tin sự kiện!');
      return;
    }

    const randomId = 'EV-' + Math.floor(1000 + Math.random() * 9000);
    setEventSuccess(randomId);
    
    // Add to list dynamically as a mock slot
    const newSlot: Slot = {
      id: randomId,
      sport: eventSport,
      title: eventTitle,
      time: eventTime,
      date: new Date(eventDate).toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }),
      location: eventLocation,
      host: 'Bạn (Người tạo)',
      joined: 1,
      maxSpots: Number(eventMaxSpots),
      level: eventLevel,
      cost: eventCost,
      avatarColor: 'bg-primary-light text-primary'
    };
    
    setSlots(prev => [newSlot, ...prev]);

    // Reset Form
    setEventTitle('');
    setEventDate('');
    setEventTime('');
    setEventLocation('');
    setEventMaxSpots(4);
    setEventCost('Chia đều');
  };

  const handleCreateClub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!groupName.trim()) return;

    const clubCode = 'SB-' + Math.floor(1000 + Math.random() * 9000);
    const newClub = {
      name: groupName,
      sport: groupSport,
      code: clubCode,
      members: 1
    };

    setMyClubs(prev => [...prev, newClub]);
    setGroupSuccess(true);
    setTimeout(() => {
      setGroupSuccess(false);
      setGroupName('');
      setGroupDesc('');
    }, 2500);
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-container to-emerald-950 text-white py-16 md:py-24 px-4 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/20 text-white backdrop-blur-md uppercase tracking-wider mb-6 animate-pulse">
              <Sparkles size={12} />
              Cùng nhau khỏe đẹp hơn
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6">
              Lập hội thể thao,<br/>
              Khai phóng đam mê!
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 font-medium max-w-xl leading-relaxed mb-8">
              Đừng tập luyện một mình. Tìm đồng đội cùng sở thích, lập kèo chơi cực nhanh, hoặc xây dựng câu lạc bộ chuyên nghiệp để theo dõi hiệu suất và vinh danh nhà vô địch.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  setActiveTab('event');
                  document.getElementById('tabs-container')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 h-14 bg-white text-primary rounded-2xl font-black hover:bg-emerald-50 transition-all active:scale-95 flex items-center gap-2 shadow-xl shadow-black/10"
              >
                <Plus size={20} />
                Tạo kèo ngay
              </button>
              <button 
                onClick={() => {
                  setActiveTab('join');
                  document.getElementById('tabs-container')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 h-14 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-black border border-white/20 backdrop-blur-sm transition-all active:scale-95 flex items-center gap-2"
              >
                <Search size={20} />
                Tìm slot ghép
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs navigation */}
      <div id="tabs-container" className="max-w-[1200px] mx-auto px-4 md:px-12 mt-12">
        <div className="bg-white p-2 rounded-3xl shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-2">
          <button
            onClick={() => setActiveTab('join')}
            className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-sm transition-all ${
              activeTab === 'join'
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-neutral-600 hover:bg-neutral-50'
            }`}
          >
            <UserPlus size={18} />
            Tham gia slot ghép
          </button>
          
          <button
            onClick={() => setActiveTab('event')}
            className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-sm transition-all ${
              activeTab === 'event'
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-neutral-600 hover:bg-neutral-50'
            }`}
          >
            <Calendar size={18} />
            Tạo hoạt động thể thao
          </button>

          <button
            onClick={() => setActiveTab('group')}
            className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-sm transition-all ${
              activeTab === 'group'
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-neutral-600 hover:bg-neutral-50'
            }`}
          >
            <Trophy size={18} />
            Lập câu lạc bộ & Hiệu suất
          </button>
        </div>

        {/* Tab contents */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {activeTab === 'join' && (
              <motion.div
                key="join-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-neutral-900">Các slot trống đang chờ bạn</h2>
                    <p className="text-neutral-500 text-sm font-medium mt-1">Ghép sân trực tiếp cùng những người đam mê thể thao gần bạn.</p>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Tìm môn chơi, khu vực..." 
                      className="w-full md:w-80 h-11 pl-11 pr-4 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {slots.map((slot) => {
                    const isFull = slot.joined >= slot.maxSpots;
                    return (
                      <div 
                        key={slot.id} 
                        className="bg-white border border-neutral-100 hover:border-primary/20 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                              slot.sport === 'Pickleball' ? 'bg-amber-100 text-amber-700' :
                              slot.sport === 'Badminton' ? 'bg-emerald-100 text-emerald-700' :
                              slot.sport === 'Football' ? 'bg-blue-100 text-blue-700' :
                              slot.sport === 'Tennis' ? 'bg-rose-100 text-rose-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {slot.sport}
                            </span>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-500">
                              <Users size={14} />
                              <span>Sĩ số: {slot.joined}/{slot.maxSpots}</span>
                            </div>
                          </div>

                          <h3 className="text-lg font-black text-neutral-900 leading-snug mb-3 hover:text-primary transition-colors cursor-pointer" onClick={() => setSelectedSlot(slot)}>
                            {slot.title}
                          </h3>

                          <div className="space-y-2 text-neutral-600 text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <Clock size={16} className="text-neutral-400 flex-shrink-0" />
                              <span>{slot.date} | {slot.time}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <MapPin size={16} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-1">{slot.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Flame size={16} className="text-neutral-400 flex-shrink-0" />
                              <span>Trình độ: <strong className="text-neutral-800">{slot.level}</strong></span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-neutral-50 flex items-center justify-between gap-4">
                          <div>
                            <span className="block text-[10px] text-neutral-400 uppercase font-black">Chi phí ước tính</span>
                            <span className="text-sm font-bold text-neutral-800">{slot.cost}</span>
                          </div>
                          <button
                            onClick={() => setSelectedSlot(slot)}
                            disabled={isFull}
                            className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                              isFull 
                                ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                                : 'bg-primary text-white hover:bg-primary-container active:scale-95'
                            }`}
                          >
                            {isFull ? 'Đã đủ người' : 'Tham gia'}
                            {!isFull && <ChevronRight size={14} />}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === 'event' && (
              <motion.div
                key="event-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-neutral-100 shadow-sm">
                  <div className="mb-6">
                    <h2 className="text-2xl font-black text-neutral-900">Khởi tạo hoạt động mới</h2>
                    <p className="text-neutral-500 text-sm font-medium mt-1">Nhập thông tin chi tiết để hệ thống tự động tìm và gợi ý đồng đội phù hợp.</p>
                  </div>

                  {eventSuccess ? (
                    <div className="text-center py-10 bg-emerald-50/50 border border-dashed border-primary/20 rounded-2xl">
                      <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-xl font-black text-neutral-900 mb-2">Đăng ký sự kiện thành công!</h3>
                      <p className="text-neutral-500 text-sm max-w-md mx-auto mb-6 px-4">
                        Mã sự kiện: <strong className="text-primary font-mono">{eventSuccess}</strong>. Hệ thống đã mở slot ghép công khai trên bảng tin cộng đồng.
                      </p>
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => setEventSuccess(null)}
                          className="px-6 py-3 bg-primary text-white rounded-xl text-sm font-black hover:bg-primary-container transition-all active:scale-95"
                        >
                          Tạo thêm hoạt động mới
                        </button>
                        <button
                          onClick={() => setActiveTab('join')}
                          className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-sm font-black transition-all"
                        >
                          Xem danh sách slot
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleCreateEvent} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="md:col-span-2">
                          <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
                            Tiêu đề hoạt động
                          </label>
                          <input
                            type="text"
                            placeholder="VD: Tìm đồng đội đá bóng sân 7 - Tối thứ Tư hàng tuần"
                            value={eventTitle}
                            onChange={(e) => setEventTitle(e.target.value)}
                            required
                            className="w-full h-12 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
                            Môn thể thao
                          </label>
                          <select
                            value={eventSport}
                            onChange={(e) => setEventSport(e.target.value as any)}
                            className="w-full h-12 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-sm"
                          >
                            <option value="Pickleball">Pickleball</option>
                            <option value="Badminton">Badminton (Cầu lông)</option>
                            <option value="Football">Football (Bóng đá)</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Basketball">Basketball (Bóng rổ)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
                            Trình độ yêu cầu
                          </label>
                          <select
                            value={eventLevel}
                            onChange={(e) => setEventLevel(e.target.value)}
                            className="w-full h-12 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-sm"
                          >
                            <option value="Tất cả cấp độ">Tất cả cấp độ (Mọi trình độ)</option>
                            <option value="Người mới chơi (Beginner)">Người mới chơi (Beginner)</option>
                            <option value="Trung bình (Intermediate)">Trung bình (Intermediate)</option>
                            <option value="Khá / Giỏi (Advanced)">Khá / Giỏi (Advanced)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
                            Ngày hoạt động
                          </label>
                          <input
                            type="date"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            required
                            className="w-full h-12 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-sm text-neutral-700"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
                            Khung giờ
                          </label>
                          <input
                            type="text"
                            placeholder="VD: 18:00 - 20:00"
                            value={eventTime}
                            onChange={(e) => setEventTime(e.target.value)}
                            required
                            className="w-full h-12 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-sm"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
                            Địa điểm sân chơi
                          </label>
                          <input
                            type="text"
                            placeholder="VD: Sân lông Viettel, Hẻm 285 CMT8, Q.10, TP.HCM"
                            value={eventLocation}
                            onChange={(e) => setEventLocation(e.target.value)}
                            required
                            className="w-full h-12 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
                            Số lượng cần tuyển thêm
                          </label>
                          <input
                            type="number"
                            min={1}
                            max={50}
                            value={eventMaxSpots}
                            onChange={(e) => setEventMaxSpots(Number(e.target.value))}
                            required
                            className="w-full h-12 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 px-1">
                            Phương thức chia tiền sân
                          </label>
                          <input
                            type="text"
                            placeholder="VD: Chia đều hóa đơn, 50k/người, Miễn phí..."
                            value={eventCost}
                            onChange={(e) => setEventCost(e.target.value)}
                            required
                            className="w-full h-12 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-sm"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full h-12 bg-primary text-white rounded-xl font-black hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/10"
                      >
                        <Calendar size={18} />
                        Đăng ký hoạt động & tìm đồng đội
                      </button>
                    </form>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm">
                    <h3 className="font-black text-neutral-900 mb-4 flex items-center gap-2">
                      <Shield className="text-primary" size={18} />
                      Quyền lợi khi đăng ký
                    </h3>
                    <ul className="space-y-3.5 text-sm font-medium text-neutral-600">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>Hiển thị trên đầu bảng tin hoạt động ghép sân khu vực.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>Thông báo tự động đến những người có thói quen chơi cùng khu vực.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>Duyệt danh sách yêu cầu tham gia trực tiếp trên tài khoản cá nhân.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-900 to-primary text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 opacity-10 translate-x-4 translate-y-4">
                      <Sparkles size={160} />
                    </div>
                    <h3 className="font-black text-lg mb-2">Tạo CLB để lưu thành tích?</h3>
                    <p className="text-xs text-emerald-100 font-medium mb-4 leading-relaxed">
                      Bạn và các thành viên muốn có bảng xếp hạng riêng, ghi nhận tỉ số thắng/thua và vinh danh cầu thủ xuất sắc nhất tháng?
                    </p>
                    <button 
                      onClick={() => setActiveTab('group')}
                      className="px-4 py-2 bg-white text-primary rounded-lg text-xs font-black hover:bg-emerald-50 transition-all flex items-center gap-1.5"
                    >
                      Tìm hiểu Lập CLB
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'group' && (
              <motion.div
                key="group-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Visual Dashboard Representation */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-3xl p-6 md:p-8 border border-neutral-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-8 translate-x-8 pointer-events-none" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-primary-light text-primary rounded-2xl flex items-center justify-center font-display font-black text-xl">
                          PS
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-black text-neutral-900">Pickleball SG Stars</h3>
                            <span className="px-2 py-0.5 bg-primary-light text-primary text-[10px] font-black rounded">PRO</span>
                          </div>
                          <p className="text-neutral-500 text-xs font-medium">CLB Hoạt động tại Quận 7 • Code: <strong className="font-mono">PB-9941</strong></p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-center sm:text-right">
                          <span className="block text-[10px] text-neutral-400 font-black uppercase">Thành viên</span>
                          <span className="text-lg font-black text-neutral-800">16 thành viên</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats summary banner */}
                    <div className="grid grid-cols-3 gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100 text-center mb-6">
                      <div>
                        <span className="block text-[10px] text-neutral-400 font-black uppercase">Tổng số trận</span>
                        <span className="text-base font-black text-neutral-800">42</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-neutral-400 font-black uppercase">Hoạt động nhất</span>
                        <span className="text-base font-black text-primary">T7, CN</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-neutral-400 font-black uppercase">Điểm hiệu suất</span>
                        <span className="text-base font-black text-secondary">92%</span>
                      </div>
                    </div>

                    {/* Visual Leaderboard representation */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-black text-neutral-900 flex items-center gap-1.5">
                          <Trophy size={16} className="text-warning" />
                          Bảng xếp hạng hiệu suất CLB (Tháng 5)
                        </h4>
                        <span className="text-xs text-neutral-400 font-bold">Cập nhật 2 giờ trước</span>
                      </div>

                      <div className="space-y-2">
                        {[
                          { rank: 1, name: 'Quốc Bảo', winLoss: '12 thắng / 3 thua', pts: 1250, pct: '80%' },
                          { rank: 2, name: 'Minh Hoàng', winLoss: '10 thắng / 4 thua', pts: 1120, pct: '71%' },
                          { rank: 3, name: 'Thanh Vân', winLoss: '8 thắng / 5 thua', pts: 980, pct: '61%' },
                        ].map((member) => (
                          <div key={member.rank} className="flex items-center justify-between p-3.5 bg-white border border-neutral-100 hover:border-neutral-200 rounded-xl transition-all">
                            <div className="flex items-center gap-3">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                                member.rank === 1 ? 'bg-amber-100 text-amber-800' :
                                member.rank === 2 ? 'bg-slate-100 text-slate-800' :
                                'bg-orange-50 text-orange-800'
                              }`}>
                                #{member.rank}
                              </span>
                              <div>
                                <span className="text-sm font-black text-neutral-800 block">{member.name}</span>
                                <span className="text-[10px] text-neutral-400 font-semibold">{member.winLoss}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-black text-neutral-800 block">{member.pts} pts</span>
                              <span className="text-[10px] text-emerald-600 font-bold">Thắng {member.pct}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Feature Introduction Card */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary-light text-primary">
                        <Activity size={20} />
                      </div>
                      <div>
                        <h4 className="font-black text-neutral-900 text-sm">Ghi nhận tỉ số tự động</h4>
                        <p className="text-neutral-500 text-xs font-medium mt-1 leading-relaxed">
                          Chỉ cần quét QR sân đấu, hệ thống tự động lưu kết quả vào hồ sơ cá nhân và CLB.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-orange-50 text-secondary">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <h4 className="font-black text-neutral-900 text-sm">Xếp hạng điểm kỹ năng</h4>
                        <p className="text-neutral-500 text-xs font-medium mt-1 leading-relaxed">
                          Áp dụng công thức Elo chuẩn để tính toán trình độ kỹ năng của mỗi người chơi sau mỗi trận đấu.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Group creation trigger form */}
                <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm self-start">
                  <h3 className="font-black text-lg text-neutral-900 mb-2">Thành lập Hội / Nhóm mới</h3>
                  <p className="text-neutral-500 text-xs font-medium mb-6">
                    Xây dựng ngôi nhà số cho các đồng đội của bạn chỉ trong 30 giây.
                  </p>

                  {groupSuccess ? (
                    <div className="text-center py-8 bg-primary-light/30 rounded-2xl border border-dashed border-primary/20">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle2 size={24} />
                      </div>
                      <h4 className="font-black text-neutral-900 text-sm mb-1">Thành lập CLB thành công!</h4>
                      <p className="text-neutral-500 text-[10px] px-4 font-semibold mb-4 leading-normal">
                        Mã tham gia CLB của bạn đã được khởi tạo. Hãy chia sẻ mã này để đồng đội tham gia!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleCreateClub} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-1 px-1">
                          Tên câu lạc bộ / Nhóm
                        </label>
                        <input
                          type="text"
                          placeholder="VD: Cầu Lông Đêm Sài Gòn"
                          value={groupName}
                          onChange={(e) => setGroupName(e.target.value)}
                          required
                          className="w-full h-11 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-1 px-1">
                          Môn thể thao chính
                        </label>
                        <select
                          value={groupSport}
                          onChange={(e) => setGroupSport(e.target.value)}
                          className="w-full h-11 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-xs"
                        >
                          <option value="Pickleball">Pickleball</option>
                          <option value="Badminton">Badminton (Cầu lông)</option>
                          <option value="Football">Football (Bóng đá)</option>
                          <option value="Tennis">Tennis</option>
                          <option value="Basketball">Basketball (Bóng rổ)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-1 px-1">
                          Mô tả hoạt động (Không bắt buộc)
                        </label>
                        <textarea
                          placeholder="Mô tả tôn chỉ, lịch sinh hoạt của nhóm..."
                          value={groupDesc}
                          onChange={(e) => setGroupDesc(e.target.value)}
                          rows={3}
                          className="w-full rounded-xl p-3 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-xs resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full h-11 bg-primary text-white rounded-xl font-black hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2 text-xs shadow-md shadow-primary/10"
                      >
                        <Trophy size={16} />
                        Khởi tạo CLB & Lấy mã mời
                      </button>
                    </form>
                  )}

                  {/* Joined clubs sidebar listing */}
                  <div className="mt-8 pt-6 border-t border-neutral-100">
                    <h4 className="text-xs font-black text-neutral-400 uppercase tracking-wider mb-3">Câu lạc bộ của bạn</h4>
                    <div className="space-y-2">
                      {myClubs.map((club) => (
                        <div key={club.code} className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                          <div>
                            <span className="text-xs font-black text-neutral-800 block">{club.name}</span>
                            <span className="text-[9px] text-neutral-400 font-bold">{club.sport} • {club.members} thành viên</span>
                          </div>
                          <span className="bg-white border border-neutral-200 text-[10px] px-2 py-0.5 rounded font-mono font-bold text-neutral-600">
                            {club.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal dialog for Slot Join Details */}
      <AnimatePresence>
        {selectedSlot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSlot(null)}
              className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-lg p-6 relative z-10 shadow-2xl border border-neutral-100 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    selectedSlot.sport === 'Pickleball' ? 'bg-amber-100 text-amber-700' :
                    selectedSlot.sport === 'Badminton' ? 'bg-emerald-100 text-emerald-700' :
                    selectedSlot.sport === 'Football' ? 'bg-blue-100 text-blue-700' :
                    selectedSlot.sport === 'Tennis' ? 'bg-rose-100 text-rose-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {selectedSlot.sport}
                  </span>
                  <h3 className="text-xl font-black text-neutral-900 mt-2 leading-tight">
                    {selectedSlot.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedSlot(null)}
                  className="w-8 h-8 rounded-full bg-neutral-50 text-neutral-400 hover:text-neutral-800 transition-colors flex items-center justify-center text-lg font-black"
                >
                  ×
                </button>
              </div>

              {joinSuccess ? (
                <div className="text-center py-10 bg-emerald-50/50 rounded-2xl border border-dashed border-primary/20 my-6">
                  <div className="w-14 h-14 bg-primary-light text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="font-black text-neutral-900 text-lg mb-1">Gửi yêu cầu ghép sân thành công!</h4>
                  <p className="text-neutral-500 text-xs px-6 font-medium">
                    Host <strong>{selectedSlot.host}</strong> sẽ kiểm duyệt và liên hệ lại cho bạn qua SĐT/Zalo sớm nhất!
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-3.5 bg-neutral-50 p-4 rounded-2xl border border-neutral-100 text-sm font-medium text-neutral-600 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-neutral-400" />
                      <span>{selectedSlot.date} | {selectedSlot.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="text-neutral-400 mt-0.5" />
                      <span>{selectedSlot.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-neutral-400" />
                      <span>Đang có {selectedSlot.joined}/{selectedSlot.maxSpots} người tham gia (Còn {selectedSlot.maxSpots - selectedSlot.joined} slot)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame size={16} className="text-neutral-400" />
                      <span>Yêu cầu trình độ: <strong>{selectedSlot.level}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={16} className="text-neutral-400" />
                      <span>Chi phí: <strong className="text-neutral-800">{selectedSlot.cost}</strong></span>
                    </div>
                  </div>

                  <form onSubmit={handleJoinSubmit} className="space-y-4">
                    <h4 className="text-sm font-black text-neutral-900 uppercase tracking-wider mb-2">Đăng ký tham gia ngay</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-1.5 px-1">
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          placeholder="Họ tên của bạn"
                          value={joinName}
                          onChange={(e) => setJoinName(e.target.value)}
                          required
                          className="w-full h-11 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-xs"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-1.5 px-1">
                          Số điện thoại (Zalo)
                        </label>
                        <input
                          type="tel"
                          placeholder="VD: 090 123 4567"
                          value={joinPhone}
                          onChange={(e) => setJoinPhone(e.target.value)}
                          required
                          className="w-full h-11 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-wider text-neutral-400 mb-1.5 px-1">
                        Trình độ của bạn
                      </label>
                      <select
                        value={joinLevel}
                        onChange={(e) => setJoinLevel(e.target.value)}
                        className="w-full h-11 rounded-xl px-4 border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-xs text-neutral-700"
                      >
                        <option value="Beginner">Người mới chơi (Beginner)</option>
                        <option value="Intermediate">Trung bình (Intermediate)</option>
                        <option value="Advanced">Khá / Giỏi (Advanced)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-12 bg-primary text-white rounded-xl font-black hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/10 mt-6"
                    >
                      Xác nhận ghép slot
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
