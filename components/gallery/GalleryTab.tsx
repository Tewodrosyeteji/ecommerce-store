import { Image as ImageType } from "@/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
type GallayTabProps = {
  image: ImageType;
};

const GalleryTab: React.FC<GallayTabProps> = ({ image }) => {
  return (
    <Tab className="flex items-center justify-center bg-white rounded-md aspect-square cursor-pointer relative">
      {({ selected }) => (
        <div>
          <span className="absolute aspect-square rounded-md overflow-hidden h-full w-full inset-0">
            <Image
              fill
              src={image?.url}
              alt="image"
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute rounded-md inset-0 ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
