"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function CompanySelector() {
  const [selected, setSelected] = useState<null | "system" | "consulting">(null);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      // After animation ends, either hide selector or route
      const timeout = setTimeout(() => {
        if (selected === "consulting") {
          router.push("/contact");
        } else {
          // Hide selector to reveal homepage behind it
          setIsVisible(false);
        }
      }, 800); // match duration of animations

      return () => clearTimeout(timeout);
    }
  }, [selected, router]);

  // Blinking animation variants for text
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
          className="fixed inset-0 z-50 flex"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="bg-black text-white flex justify-center items-center cursor-pointer"
            onClick={() => setSelected("system")}
            initial={{ width: "50%" }}
            animate={{
              width: selected === "system" ? "100%" : selected ? "0%" : "50%",
            }}
            exit={{ width: "0%" }}
            transition={{ duration: 0.7 }}
            style={{ overflow: "hidden" }}
          >
            {selected !== "consulting" && (
              <motion.span
                style={{ pointerEvents: "none" }}
                variants={blinkingText}
                animate={selected === "system" ? "solid" : "blink"}
              >
                Artus System
              </motion.span>
            )}
          </motion.div>

          <motion.div
            className="bg-white text-black flex justify-center items-center cursor-pointer"
            onClick={() => setSelected("consulting")}
            initial={{ width: "50%" }}
            animate={{
              width: selected === "consulting" ? "100%" : selected ? "0%" : "50%",
            }}
            exit={{ width: "0%" }}
            transition={{ duration: 0.7 }}
            style={{ overflow: "hidden" }}
          >
            {selected !== "system" && (
              <motion.span
                style={{ pointerEvents: "none" }}
                variants={blinkingText}
                animate={selected === "consulting" ? "solid" : "blink"}
              >
                Artus Consulting
              </motion.span>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
