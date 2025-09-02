"use client";

import Link from "next/link";
import { Orbitron } from "next/font/google";
import { cn } from "@/lib/utils";
import { QuizTitle } from "./QuizTitle";
import { usePathname } from "next/navigation";

const orbitron = Orbitron({
  weight: "700",
  subsets: ["latin"],
});

export const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="border-b border-gray-300">
      <div className="flex justify-between p-8 items-center">
        <div className="h-11">
          <Link href="/" className={cn(`${orbitron.className} text-2xl`)}>
            Quiz Builder
          </Link>
        </div>
        {isHome ? null : <QuizTitle />}
      </div>
    </header>
  );
};
