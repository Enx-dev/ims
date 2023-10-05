/**

 *
 * Sure, here are some specific features and benefits of our inventory management software:

Features:

*   Centralized inventory management: You can track your entire inventory across all locations in one place.
*   Real-time inventory updates: The software updates inventory levels in real-time, so you always have accurate information.
*   Purchase order management: You can easily create and manage purchase orders, ensuring that you always have the right amount of inventory on hand.
*   Automated ordering: The software can automatically generate purchase orders based on your inventory levels and reorder points.
*   Barcode scanning: You can use a barcode scanner to quickly and accurately receive, transfer, and count inventory.
*   Reporting and analytics: You can generate reports and analyze your inventory data to identify trends and make informed decisions.
*   Integrations: The software integrates with popular ecommerce platforms, accounting software, and shipping carriers.



 */

import Image from "next/image";
import React from "react";
import data from "./data/benefits.json";
import ListItem from "./components/ListItem";

const AboutSection = () => {
  return (
    <section className="z-10 container space-y-8">
      <h2 className="prose-h1:prose subheading">
        Effortless Inventory Management for Every Business
      </h2>
      <div className="flex justify-between items-stretch">
        <div className="w-max">
          <Image
            className="rounded-lg shadow-md shadow-secondary-100"
            src="/images/IMS_4.jpg"
            alt="Hero_Image"
            width={500}
            height={500}
            quality={100}
          />
        </div>
        <div className="w-full body max-w-xl">
          <p className="my-4">
            Say goodbye to inventory headaches. Our cutting-edge Inventory
            Management Software is designed to help businesses of all sizes
            optimize inventory, reduce costs, and boost profitability. Whether
            you&apos;re a startup or an enterprise.
          </p>
          <div>
            <h3 className="text-xl text-accent font-semibold">Benefits</h3>
            <ul className="space-y-2">
              {data.map((item) => (
                <ListItem key={item.id} label={item.label} text={item.text} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
