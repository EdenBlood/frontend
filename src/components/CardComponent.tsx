import type { ReactNode } from "react";

export function CardComponent({ children }: { children: ReactNode }) {
  return (
    <div className="w-1/2 bg-black rounded-xl p-5 flex flex-col gap-4 shadow-xl h-full relative">
      {children}
    </div>
  );
}
