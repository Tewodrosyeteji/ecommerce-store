import React from "react";
import { Billboard as BillboardType } from "@/types";
type BillboardProps = {
  data: BillboardType;
};

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="rounded-xl p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div
        className="relative rounded-xl bg-cover aspect-square md:aspect-[2.4/1] overflow-hidden"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl max-w-xs sm:max-w-xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
