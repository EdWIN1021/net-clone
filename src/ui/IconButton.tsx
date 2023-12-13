import React from "react";
import { twMerge } from "tailwind-merge";

const IconButton: React.FC<{
  children: React.ReactNode;
  className: string;
}> = ({ children, className }) => {
  return (
    <button
      className={twMerge(
        "flex items-center gap-[1vw] whitespace-nowrap rounded px-[1vw] py-[0.5vw]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
