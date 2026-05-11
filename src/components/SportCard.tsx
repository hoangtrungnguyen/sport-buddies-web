/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export interface SportCardProps {
  /** Internal DB key matching `sport_types` values */
  sportKey: string;
  /** Display name of the sport */
  name: string;
  /** Short tagline shown below the name */
  tagline: string;
  /** One-paragraph description of the sport */
  description: string;
  /** Key details (e.g. court type, player count, format) */
  details: Array<{ label: string; value: string }>;
  /** Emoji or short symbol representing the sport */
  icon: string;
  /** Tailwind accent colour class for the card's top border / badge */
  accentClass: string;
  /** Tailwind background colour class for the icon bubble */
  iconBgClass: string;
}

/**
 * SportCard — informational card for one sport type.
 *
 * Content (name, tagline, description, details) is supplied by the caller so
 * that each sport-card task can fill in sport-specific copy without touching
 * this component's structure.
 */
export default function SportCard({
  name,
  tagline,
  description,
  details,
  icon,
  accentClass,
  iconBgClass,
}: SportCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      {/* Accent top bar */}
      <div className={`h-1.5 w-full ${accentClass}`} />

      <div className="p-7 flex flex-col gap-5 flex-1">
        {/* Icon + Name */}
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-2xl ${iconBgClass} flex items-center justify-center text-3xl shrink-0`}
            aria-hidden="true"
          >
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-black leading-tight">{name}</h3>
            <p className="text-sm text-primary font-semibold mt-0.5">{tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-600 leading-relaxed text-sm flex-1">{description}</p>

        {/* Key details */}
        {details.length > 0 && (
          <dl className="grid grid-cols-2 gap-3">
            {details.map(({ label, value }, idx) => (
              <div
                key={`${label}-${idx}`}
                className="bg-neutral-50 rounded-xl px-3 py-2.5 border border-neutral-100"
              >
                <dt className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
                  {label}
                </dt>
                <dd className="text-sm font-bold text-on-surface">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

    </motion.div>
  );
}
