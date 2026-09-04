import type { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IStatCard {
  className: string;
  title: string;
  text: string;
}

export const StatCard: FC<IStatCard> = ({ className, title, text }) => {
  return (
    <div
      className={twMerge(
        `flex flex-col items-center justify-center p-[32px] gap-2 border border-[#2a2a3a] rounded-2xl bg-[#12121a] ${className}`,
      )}
    >
      <span className="text-sky-300 text-2xl">{title}</span>
      <span>{text}</span>
    </div>
  );
};
