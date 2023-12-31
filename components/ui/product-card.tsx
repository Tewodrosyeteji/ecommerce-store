"use client";
import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";

import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/usePreviewModal";
import useCart from "@/hooks/useCart";

type ProdctCardProps = {
  data: Product;
};

const ProductCard: React.FC<ProdctCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div
      onClick={handleClick}
      className="rounded-xl p-3 bg-white cursor-pointer space-y-4 group border "
    >
      <div className="rounded-xl bg-gray-100 aspect-square relative overflow-hidden ">
        <Image
          fill
          src={data?.images?.[0]?.url}
          alt="Images"
          className="aspect-square rounded-xl object-cover"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data?.name}</p>
        <p className="text-sm text-gray-500 ">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
