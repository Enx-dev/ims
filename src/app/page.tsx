"use client";
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
import useIsomorphicLayoutEffect from "@/helpers/useIsmophicLayout";
import { use, useRef } from "react";
import { Sine, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CSSPlugin } from "gsap";

export default function Home() {
  const ctx = useRef<any>(null);
  const about = useRef<HTMLDivElement>(null);
  const feats = useRef<HTMLDivElement>(null);
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CSSPlugin);

    let con = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power1.out" } })
        .fromTo(
          "#hero_text",
          { opacity: 0, y: -100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
            stagger: { amount: 0.5 },
          }
        )
        .fromTo(
          "#hero_image_layer",
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 1 },
          "<"
        )
        .fromTo(
          "#hero_btn",
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 0.5, stagger: { amount: 0.3 } },
          "<0.5"
        )
        .to("#hero_image", { scale: 1.1, duration: 2 });

      let about_animation = gsap
        .timeline({ defaults: { ease: Sine.easeOut } })
        .fromTo("#about_img", { scale: 1 }, { scale: 1.15, duration: 2 })
        .fromTo(
          "#about_item",
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: { amount: 0.5, ease: Sine.easeOut },
          },
          "<"
        );
      ScrollTrigger.create({
        trigger: about.current,
        animation: about_animation,
        start: "top center",
        end: "bottom center",
      });

      let feats_animation = gsap.fromTo(
        "#feat_item",
        { scale: 0.6, opacity: 0 },
        {
          keyframes: {
            "25%": { scale: 0.7, opacity: 0.3 },
            "50%": { scale: 0.8, opacity: 0.5 },
            "75%": { scale: 0.9, opacity: 0.7 },
            "100%": { scale: 1, opacity: 1 },
          },
          duration: 0.5,
          stagger: {
            amount: 0.5,
            grid: "auto",
            from: "center",
          },
          ease: "power1.in",
        }
      );

      ScrollTrigger.create({
        trigger: feats.current,
        animation: feats_animation,
        markers: true,
        start: "top center",
        end: "bottom center",
      });
    });

    return () => con.revert();
  }, [ctx]);
  return (
    <main ref={ctx} className="grid grid-flow-row-dense gap-28 pt-16">
      <HeroSection />
      <AboutSection ref={about} />
      <FeatureSection ref={feats} />
      <WhyUsSection />
      <Testimonials />
      <CTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
