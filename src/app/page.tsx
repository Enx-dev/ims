import {
  AboutSection,
  FeatureSection,
  HeroSection,
  WhyUsSection,
  Testimonials,
} from "@/container";

import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-flow-row-dense gap-16 pt-16">
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <WhyUsSection />
      <Testimonials />
    </main>
  );
}
