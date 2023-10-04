"use client";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import React from "react";

type Props = {};

const Dropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DialogTrigger>
        <HamburgerMenuIcon className="md:hidden block w-8 h-8 text-primary-900" />
      </DialogTrigger>
      <DialogContent className="w-2/3 px-2 right-0">
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Dropdown;
