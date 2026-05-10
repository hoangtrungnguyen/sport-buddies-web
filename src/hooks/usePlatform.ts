/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Platform = 'ios' | 'android' | 'other';

/**
 * Detects the current platform from `navigator.userAgent`.
 *
 * Returns:
 *  - 'ios'     — iPhone, iPad, or iPod touch
 *  - 'android' — Android device
 *  - 'other'   — desktop browser or unrecognised user agent
 */
export function usePlatform(): Platform {
  const ua = navigator.userAgent;

  if (/iphone|ipad|ipod/i.test(ua)) {
    return 'ios';
  }

  if (/android/i.test(ua)) {
    return 'android';
  }

  return 'other';
}
