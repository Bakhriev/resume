import type { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IContainer {
  className?: string;
  children: React.ReactNode;
}

export const Container: FC<IContainer> = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        `max-w-[1280px] w-full mx-auto px-[15px] ${className}`,
      )}
    >
      {children}
    </div>
  );
};
