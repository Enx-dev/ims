import React from "react";
import GridItems from "./components/GridItems";
import data from "./data/features.json";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

interface IFeatures {}

const FeaturesSection = forwardRef<HTMLDivElement>(function Features(
  props,
  ref
) {
  return (
    <section
      ref={ref}
      className=" container  space-y-8 subheading antialiased flex flex-col items-center"
      id="Features">
      <h1 className="subheading text-center subpixel-antialiased subheading-accent">
        Key Features
      </h1>
      <div className="grid grid-cols-3 grid-flow-row gap-4">
        {data.map((item) => (
          <GridItems label={item.label} text={item.text} key={item.id} />
        ))}
      </div>
      <Button variant="outline" size="lg">
        Learn more
      </Button>
    </section>
  );
});

export default FeaturesSection;
