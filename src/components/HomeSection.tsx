/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from './sections/HeroSection';
import StatsBar from './StatsBar';
import HowItWorksSection from './sections/HowItWorksSection';
import WhyChooseSection from './sections/WhyChooseSection';
import FeaturedCourtsSection from './sections/FeaturedCourtsSection';
import SportsSection from './SportsSection';
import AppScreenshotsSection from './AppScreenshotsSection';
import PwaInstallSection from './PwaInstallSection';
import CTASection from './sections/CTASection';

export default function HomeSection() {
  return (
    <>
      <HeroSection />
      <StatsBar courtCount={52} bookingCount={1840} />
      <HowItWorksSection />
      <WhyChooseSection />
      <FeaturedCourtsSection />
      <SportsSection />
      <AppScreenshotsSection />
      <PwaInstallSection />
      <CTASection />
    </>
  );
}
