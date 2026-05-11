/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export interface SportCardProps {
  name: string;
  tagline: string;
  icon: ReactNode;
  iconBgClass: string;
  badge?: string;
}

export default function SportCard({ name, tagline, icon, iconBgClass, badge }: SportCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group overflow-hidden"
    >
      {/* Decorative background circle */}
      <div className="absolute -right-6 -top-6 w-28 h-28 bg-primary-light/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Badge */}
      {badge && (
        <span className="absolute top-4 right-4 bg-secondary-container text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-wider uppercase z-10">
          {badge}
        </span>
      )}

      {/* Icon */}
      <div className={`w-14 h-14 ${iconBgClass} rounded-xl flex items-center justify-center mb-5 relative z-10`}>
        {icon}
      </div>

      {/* Text */}
      <h3 className="text-lg font-bold mb-1.5 relative z-10">{name}</h3>
      <p className="text-sm text-neutral-600 leading-relaxed relative z-10">{tagline}</p>
    </motion.div>
  );
}
