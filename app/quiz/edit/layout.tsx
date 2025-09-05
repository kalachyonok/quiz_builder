import { Header } from "@/components/header";
import { Toaster } from "sonner";

export default function BuilderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Toaster position="top-center" richColors />
      <Header />
      {children}
    </div>
  );
}
