import Image from "next/image";
import React from "react";
import generateStars from "@/lib/generateStars";

interface ITes {
  image: string;
  name: string;
  review: string;
  rating: number;
  company: string;
}

const TestimonialCard = ({ company, image, name, rating, review }: ITes) => {
  const stars = generateStars(rating);
  return (
    <div className="shadow-md rounded-md p-4 space-y-2">
      <Image
        className="rounded-[33333px]"
        src={`/images/${image}`}
        alt={name}
        width={100}
        height={100}
      />
      <div>
        <h1 className="smallerheading">{name}</h1>
        <h2 className="italic text-sm font-light text-primary-800">
          {company}
        </h2>
      </div>
      <p className="body">{review}</p>
      <div className="text-lg font-semibold text-primary-900 flex gap-1">
        {stars.map((Star) => (
          <Star key={name} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
