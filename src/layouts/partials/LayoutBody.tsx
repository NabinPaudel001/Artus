"use client";

import { usePathname } from "next/navigation";
import Header from "@/partials/Header";
import Footer from "@/partials/Footer";
import Providers from "@/partials/Providers";

export default function LayoutBody({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/";

  return (
    <Providers>
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </Providers>
  );
}
