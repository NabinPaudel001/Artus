"use client"; // Mark this layout as client component so we can use useEffect

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LayoutBody from "@/partials/LayoutBody";

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  return <LayoutBody>{children}</LayoutBody>;
}
