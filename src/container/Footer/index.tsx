import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary-50/40 py- 8 fancy_shadow container min-h-[40vh] flex items-center justify-between">
      <h1 className="text-4xl font-bold">
        Inventory<span className="text-primary-800">Pro</span>
      </h1>
      <ul className="space-y-2 child:w-max text-lg text-accent child:relative font-medium capitalize child:after:w-0 child:cursor-pointer child-hover:after:w-full child:after:h-1 child:after:absolute child:after:bg-primary-900 child:after:transition-all child:after:duration-150 child:after:ease-in-out child:after:left-0 child:after:bottom-0 ">
        <li>contact</li>
        <li>about</li>
        <li>values</li>
        <li>features</li>
        <li>timeline</li>
      </ul>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </footer>
  );
};

export default Footer;
