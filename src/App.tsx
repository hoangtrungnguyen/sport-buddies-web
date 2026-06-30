/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import OwnerSection from './components/OwnerSection';
import PricingSection from './components/PricingSection';
import DashboardSection from './components/DashboardSection';
import CreateGroupSection from './components/CreateGroupSection';

const pathToSection: Record<string, string> = {
  '/': 'home',
  '/cho-chu-san': 'owner',
  '/bang-gia': 'pricing',
  '/dashboard': 'dashboard',
  '/create-group': 'create-group',
};

const sectionToPath: Record<string, string> = {
  'home': '/',
  'owner': '/cho-chu-san',
  'pricing': '/bang-gia',
  'dashboard': '/dashboard',
  'create-group': '/create-group',
};

export default function App() {
  const [section, setSection] = useState(() => pathToSection[window.location.pathname] ?? 'home');

  const navigate = (s: string) => {
    setSection(s);
    window.history.pushState(null, '', sectionToPath[s] ?? '/');
  };

  useEffect(() => {
    const onPop = () => setSection(pathToSection[window.location.pathname] ?? 'home');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update document title
    if (section === 'pricing') {
      document.title = 'Bảng giá dành cho chủ sân | SportBuddies';
    } else if (section === 'owner') {
      document.title = 'Dành cho chủ sân | SportBuddies';
    } else if (section === 'dashboard') {
      document.title = 'Dashboard Chủ Sân | SportBuddies';
    } else if (section === 'create-group') {
      document.title = 'Lập hội & Kết nối thể thao | SportBuddies';
    } else {
      document.title = 'SportBuddies - Đặt sân thể thao tại TP.HCM';
    }
  }, [section]);

  const renderSection = () => {
    switch (section) {
      case 'home':
        return <HomeSection />;
      case 'owner':
        return <OwnerSection />;
      case 'pricing':
        return <PricingSection onNavigate={navigate} />;
      case 'dashboard':
        return <DashboardSection />;
      case 'create-group':
        return <CreateGroupSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-light selection:text-primary">
      <Navbar currentSection={section} setSection={navigate} />
      
      <main className="flex-grow">
        <motion.div
          key={section}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderSection()}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
