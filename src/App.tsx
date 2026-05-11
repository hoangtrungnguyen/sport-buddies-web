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
import AppLandingSection from './components/AppLandingSection';
import AgentSection from './components/AgentSection';

export default function App() {
  const [section, setSection] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [section]);

  const renderSection = () => {
    switch (section) {
      case 'home':
        return <HomeSection />;
      case 'owner':
        return <OwnerSection />;
      case 'about':
        return <AppLandingSection />;
      case 'agent':
        return <AgentSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-light selection:text-primary">
      <Navbar currentSection={section} setSection={setSection} />
      
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
