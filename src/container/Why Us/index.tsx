import Image from "next/image";
import React from "react";

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <div className="container flex flex-col items-center gap-16 w-full">
      <h1 className="subheading text-center">
        Why Choose{" "}
        <span className="p-4 rounded text-white shadow-sm bg-primary-800 ">
          InventoryPro
        </span>
      </h1>
      <p className="body max-w-md text-center">
        Our platform is designed with your success in mind. With a focus on
        scalability, performance, and user-friendly design, we offer the best
        solution for managing your inventory efficiently.
      </p>
      <div>
        <h2 className="subheading text-center text-xl">Top Brands Trust Us</h2>
        <div className="flex gap-16 items-center justify-around">
          <Image
            src="/images/bal-removebg-preview.png"
            alt="bal_logo"
            width={150}
            height={150}
          />
          <Image
            src="/images/R.png"
            alt="addidas_logo"
            width={150}
            height={150}
          />
          <Image
            src="/images/gucci-removebg-preview.png"
            alt="guccie_logo"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
