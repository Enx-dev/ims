import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="flex container justify-between w-full items-center  ">
      <div className="w-full text-accent space-y-6">
        <h1 className="text-7xl font-bold">
          Inventory<span className="text-primary-800">Pro</span>
        </h1>
        <h2 className="text-2xl italic font-light leading-8">
          Elevate Your Inventory{" "}
          <span className="text-primary-800">Management</span> Game
        </h2>
        <div className="space-x-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
      <div className="w-max relative rounded-lg">
        <Image
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
