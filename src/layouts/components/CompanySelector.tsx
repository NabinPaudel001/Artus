"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CompanySelector() {
  const [selected, setSelected] = useState<null | "system" | "consulting">(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Detect screen size
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (selected) {
      const timeout = setTimeout(() => {
        if (selected === "consulting") {
          router.push("/contact");
        } else {
          setIsVisible(false);
        }
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [selected, router]);

  const blinkingText = {
    blink: {
      opacity: [1, 0.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
    solid: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

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
              <motion.div
                className="flex flex-col items-center gap-4"
                style={{ pointerEvents: "none" }}
                variants={blinkingText}
                animate={selected === "system" ? "solid" : "blink"}
              >
                <Image
                  src="/images/logo.svg"
                  alt="Artus System Logo"
                  width={150}
                  height={150}
                  className="mb-2"
                />
                <span className="btn bg-red-800 text-white font-semibold">
                  Artus Systems
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Artus Consulting */}
          <motion.div
            className="bg-gradient-to-br from-[#1b1b1b] via-[#7f1d1d] to-[#dc2626] text-white flex flex-col justify-center items-center cursor-pointer w-full md:w-1/2 h-1/2 md:h-full"
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
              <motion.div
                className="flex flex-col items-center gap-4"
                style={{ pointerEvents: "none" }}
                variants={blinkingText}
                animate={selected === "consulting" ? "solid" : "blink"}
              >
                <Image
                  src="/images/artus.svg"
                  alt="Artus Consulting Logo"
                  width={150}
                  height={150}
                  className="mb-2"
                />
                <span className="btn bg-white text-red-600 font-semibold">
                  Artus Consulting
                </span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
