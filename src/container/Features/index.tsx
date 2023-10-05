import React from "react";
import GridItems from "./components/GridItems";
import data from "./data/features.json";
import { Button } from "@/components/ui/button";

interface IFeatures {}

const FeaturesSection = ({}: IFeatures) => {
  return (
    <section
      className=" container fancy_shadow  space-y-8 subheading antialiased flex flex-col items-center bg-secondary-50/25 shadow-2xl overflow-y-hidden shadow-secondary-50/50"
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
};

export default FeaturesSection;
