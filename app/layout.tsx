import type { Metadata } from "next";
import "./globals.css";
import { ElementProvider } from "@/components/context/ElementContext";

export const metadata: Metadata = {
  title: "Quiz Builder",
  description: "Build your own quiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ElementProvider>
        <body className="antialiased">{children}</body>
      </ElementProvider>
    </html>
  );
}
