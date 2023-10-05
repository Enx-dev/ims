import {
  AboutSection,
  FeatureSection,
  HeroSection,
  WhyUsSection,
  Testimonials,
  CTA,
  ContactSection,
  Footer,
} from "@/container";

import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-flow-row-dense gap-28 pt-16">
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <WhyUsSection />
      <Testimonials />
      <CTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
