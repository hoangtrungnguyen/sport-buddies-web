/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ReactNode } from 'react';

export interface SportCardProps {
  /** DB sport_types value — used by callers as React key and future filter ID */
  sportKey: string;
  name: string;
  tagline: string;
  icon: ReactNode;
  iconBg: string;
  details: Array<{ label: string; value: string }>;
}

/**
 * Displays one sport type in the MKT-004 Sports section.
 * `sportKey` is intentionally not destructured in the render body —
 * it is a caller-facing identifier (React key, future filter) only.
 */
export default function SportCard({ name, tagline, icon, iconBg, details }: SportCardProps) {

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6"
    >
      {/* Icon */}
      <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center shrink-0`}>
        {icon}
      </div>

      {/* Name + tagline */}
      <div>
        <h3 className="text-xl font-black mb-1">{name}</h3>
        <p className="text-sm text-neutral-600 leading-relaxed">{tagline}</p>
      </div>

      {/* Detail rows */}
      {details.length > 0 && (
        <dl className="space-y-2">
          {details.map(({ label, value }, idx) => (
            <div key={`${name}-${idx}`} className="flex items-center justify-between text-sm">
              <dt className="text-neutral-500">{label}</dt>
              <dd className="font-semibold text-neutral-800">{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </motion.div>
  );
}
