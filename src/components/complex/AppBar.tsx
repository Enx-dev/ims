import React from "react";
import { Button } from "../ui/button";
import Dropdown from "./Navbar/Dropdown";

type Props = {};

const AppBar = (props: Props) => {
  return (
    <header className="shadow-md sticky w-full">
      <nav className=" px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="">
          <h1 className="text-3xl text-primary-900 font-mono font-bold uppercase">
            Logo
          </h1>
        </div>
        <ul className=" hidden md:flex gap-6 text-lg text-accent child:relative font-medium capitalize child:after:w-0 child:cursor-pointer child-hover:after:w-full child:after:h-1 child:after:absolute child:after:bg-primary-900 child:after:transition-all child:after:duration-150 child:after:ease-in-out child:after:left-0 child:after:bottom-0 ">
          <li>contact</li>
          <li>about</li>
          <li>values</li>
          <li>features</li>
          <li>timeline</li>
        </ul>

        {/* <Dropdown /> */}
        <Button className="md:block hidden" size="lg">
          Register
        </Button>
      </nav>
    </header>
  );
};

export default AppBar;
