/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export interface SportDetail {
  label: string;
  value: string;
}

export interface SportCardProps {
  /** DB sport_types key, e.g. "football", "badminton" */
  sportKey: string;
  name: string;
  tagline: string;
  description: string;
  details: SportDetail[];
  icon: ReactNode;
  /** Tailwind bg class for the icon area, e.g. "bg-primary-light" */
  accentBg: string;
  /** Tailwind text class for the icon colour, e.g. "text-primary" */
  accentText: string;
}

export default function SportCard({
  name,
  tagline,
  description,
  details,
  icon,
  accentBg,
  accentText,
}: SportCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl border border-neutral-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${accentBg} ${accentText}`}
      >
        {icon}
      </div>

      {/* Name & tagline */}
      <div>
        <h3 className="text-lg font-black text-neutral-900">{name}</h3>
        <p className="text-sm font-semibold text-neutral-600 mt-0.5">{tagline}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-600 leading-relaxed flex-1">{description}</p>

      {/* Detail rows */}
      {details.length > 0 && (
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-neutral-100 pt-4">
          {details.map(({ label, value }) => (
            <div key={label} className="flex flex-col">
              <dt className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                {label}
              </dt>
              <dd className="text-sm font-bold text-neutral-900">{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </motion.div>
  );
}
