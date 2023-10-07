import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="flex container justify-between w-full items-center  ">
      <div className="w-full text-accent space-y-6">
        <h1 id="hero_text" className="text-7xl font-bold">
          Inventory<span className="text-primary-800">Pro</span>
        </h1>
        <h2 id="hero_text" className="text-2xl italic font-light leading-8">
          Elevate Your Inventory{" "}
          <span className="text-primary-800">Management</span> Game
        </h2>
        <div id="btn_group" className="space-x-4 origin-center">
          <Button id="hero_btn" size="lg">
            Get Started
          </Button>
          <Button id="hero_btn" size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
      <div
        id="hero_image_layer"
        className="w-max relative rounded-lg overflow-clip">
        <Image
          id="hero_image"
          className="rounded-lg shadow-md shadow-secondary-100"
          src="/images/IMS_1.jpg"
          alt="Hero_Image"
          width={700}
          height={750}
          quality={90}
        />
      </div>
    </section>
  );
};

export default HeroSection;
