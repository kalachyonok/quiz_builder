import Link from "next/link";
import { Orbitron } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const orbitron = Orbitron({
  weight: "700",
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <header className="border-b border-gray-300">
      <div className="flex justify-between p-8">
        <div>
          <Link href="/" className={cn(`${orbitron.className} text-2xl`)}>
            Quiz Builder
          </Link>
        </div>
        <Button>User Info</Button>
      </div>
    </header>
  );
};
