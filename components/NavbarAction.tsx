"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

type Props = {};

const NavbarAction = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return false;
  }
  return (
    <div className="ml-auto flext items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center bg-black rounded-full px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-medium ml-2 text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarAction;
