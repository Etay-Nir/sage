'use client';

import HeroSection from '@/components/sections/HeroSection';
import CryptoChallengeSection from '@/components/sections/CryptoChallengeSection';
import AboutSection from '@/components/sections/AboutSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import ContactSection from '@/components/sections/ContactSection';
import TrustSection from '@/components/sections/TrustSection';

export default function Page() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CryptoChallengeSection />
      <AboutSection />
      <HowItWorksSection />
      <AdvantagesSection />
      <TrustSection />
      <ContactSection />
    </div>
  );
}
