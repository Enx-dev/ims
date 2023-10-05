import React from "react";
import TestimonialCard from "./components/TestimonialCard";
import data from "./data/testimonial.json";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section className="container space-y-8" id="Testimonials">
      <h1 className="subheading text-center">What Our Customers Say</h1>
      <div className="grid grid-cols-3 gap-3  snap-mandatory">
        {data.map((item) => (
          <TestimonialCard
            key={item.id}
            company={item.company}
            image={item.image}
            name={item.name}
            rating={item.rating}
            review={item.review}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
