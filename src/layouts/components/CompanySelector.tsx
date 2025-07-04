"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CompanySelector() {
  const [selected, setSelected] = useState<null | "system" | "consulting">(null);
  const [isVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (selected) {
      const timeout = setTimeout(() => {
        if (selected === "consulting") {
          router.push("/consulting");
        } else if (selected === "system") {
          router.push("/systems");
        }
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [selected, router]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col md:flex-row"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Artus System */}
          <motion.div
            className="bg-white text-gray-800 flex flex-col justify-center items-center cursor-pointer w-full md:w-1/2 h-1/2 md:h-full"
            onClick={() => setSelected("system")}
            initial={{
              x: isMobile ? 0 : -100,
              y: isMobile ? -100 : 0,
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              width: selected === "system" ? "100%" : selected ? "0%" : "100%",
              height: selected === "system" ? "100%" : selected ? "0%" : "100%",
            }}
            exit={{
              x: isMobile ? 0 : -100,
              y: isMobile ? -100 : 0,
              opacity: 0,
              width: "0%",
              height: "0%",
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {selected !== "consulting" && (
              <div className="flex flex-col items-center gap-4 pointer-events-none">
                <Image
                  src="/images/artus-systems-logo.svg"
                  alt="Artus System Logo"
                  width={150}
                  height={150}
                  className="mb-2"
                />
                <span className="btn bg-red-800 text-white font-semibold">
                  Artus Systems
                </span>
              </div>
            )}
          </motion.div>

          {/* Artus Consulting */}
          <motion.div
            className="bg-gradient-to-br from-[#5a5a5a] via-[#9b1c1c] to-[#ef4444] text-white flex flex-col justify-center items-center cursor-pointer w-full md:w-1/2 h-1/2 md:h-full"
            onClick={() => setSelected("consulting")}
            initial={{
              x: isMobile ? 0 : 100,
              y: isMobile ? 100 : 0,
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              width: selected === "consulting" ? "100%" : selected ? "0%" : "100%",
              height: selected === "consulting" ? "100%" : selected ? "0%" : "100%",
            }}
            exit={{
              x: isMobile ? 0 : 100,
              y: isMobile ? 100 : 0,
              opacity: 0,
              width: "0%",
              height: "0%",
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {selected !== "system" && (
              <div className="flex flex-col items-center gap-4 pointer-events-none">
                <Image
                  src="/images/artus-consulting.svg"
                  alt="Artus Consulting Logo"
                  width={150}
                  height={150}
                  className="mb-2"
                />
                <span className="btn bg-white text-red-600 font-semibold">
                  Artus Consulting
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
