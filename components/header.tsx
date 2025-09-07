"use client";

import Link from "next/link";
import { Orbitron } from "next/font/google";
import { cn } from "@/lib/utils";
import { QuizTitle } from "./QuizTitle";

const orbitron = Orbitron({
  weight: "700",
  subsets: ["latin"],
});

export const Header = ({
  quizId,
  viewMode,
}: {
  quizId?: number;
  viewMode?: boolean;
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-300 bg-amber-50">
      <div className="flex justify-between p-8 items-center">
        <div className="h-11">
          <Link href="/" className={cn(`${orbitron.className} text-2xl`)}>
            Quiz Builder
          </Link>
        </div>
        <QuizTitle quizId={quizId} viewMode={viewMode} />
      </div>
    </header>
  );
};
