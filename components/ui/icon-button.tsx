import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";
import { UnscopedEmitHelper } from "typescript";

type IconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center shadow-md border p-2 bg-white hover:scale-110 transition ",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
