"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/Button";
import { useEffect, useState } from "react";

type Props = {};

const NavbarAction = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return false;
  }
  return (
    <div className="ml-auto flext items-center gap-x-4">
      <Button className="flex items-center bg-black rounded-full px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-medium ml-2 text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarAction;
