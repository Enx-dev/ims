import React from "react";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section>
      <div>
        <h1>Main Heading</h1>
        <h2>sub Heading</h2>
        <div>
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
      <div>
        <Image
          src="/images/IMS_1.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HeroSection;
