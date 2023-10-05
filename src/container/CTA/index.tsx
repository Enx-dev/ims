import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const CTA = (props: Props) => {
  return (
    <section className="container h-[30vh] " id="CTA">
      <div className="flex items-center shadow-md justify-around p-8 rounded-[30px] bg-accent h-full bg-cta-texture bg-cover bg-no-repeat ">
        <h1 className="text-3xl font-semibold text-white">
          Ready to Optimize Your Inventory?
        </h1>
        <div>
          <Button variant="secondary" size="xl">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
