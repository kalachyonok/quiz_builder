import { Header } from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz Builder Editor",
  description:
    "Create and edit quizzes easily with our interactive Quiz Builder Editor.",
};

export default function BuilderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
