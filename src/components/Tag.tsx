import type { FC } from "react";
import { twMerge } from "tailwind-merge";

interface ITag {
  className?: string;
  title: string;
}

export const Tag: FC<ITag> = ({ className, title }) => {
  return (
    <span
      className={twMerge(
        `border border-[#2a2a3a] text-[0.8rem] rounded-[8px] bg-[#1a1a24] px-[12px] py-[4px] ${className}`,
      )}
    >
      {title}
    </span>
  );
};
