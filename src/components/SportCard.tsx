/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export interface SportCardProps {
  /** Display name of the sport */
  name: string;
  /** Short tagline shown below the name (e.g. "Sân đơn và đôi · Trong nhà và ngoài trời") */
  tagline: string;
  /** Icon element for the sport */
  icon: ReactNode;
  /** Tailwind background colour class for the icon bubble */
  iconBgClass: string;
  /** Optional badge label (e.g. "Đang hot") */
  badge?: string;
}

/**
 * SportCard — informational card for one sport type in the MKT-004 Sports Section.
 *
 * Displays sport name, tagline and icon. An optional badge can highlight
 * trending or featured sports. Content is passed by the caller so that
 * each sport task (4.2–4.6) can supply its own copy without touching
 * the card structure.
 */
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
      <div
        className={`w-14 h-14 ${iconBgClass} rounded-xl flex items-center justify-center mb-5 relative z-10`}
      >
        {icon}
      </div>

      {/* Text */}
      <h3 className="text-lg font-bold mb-1.5 relative z-10">{name}</h3>
      <p className="text-sm text-neutral-600 leading-relaxed relative z-10">{tagline}</p>
    </motion.div>
  );
}
