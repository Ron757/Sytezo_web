"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionProps } from "framer-motion";
import { Twitter, Linkedin, Instagram } from "lucide-react";

type MotionDivProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;

export default function LandingPage() {
  // State to track if user has scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Hook to track scroll position
  const { scrollY } = useScroll();

  // Create animated opacity and translation effects based on scroll
  const logoOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const contentOpacity = useTransform(scrollY, [100, 300], [0, 1]);
  const contentY = useTransform(scrollY, [100, 300], [50, 0]);

  // Add scroll event listener when component mounts
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-neutral-900 to-black text-white">
      <motion.div
        style={{
          opacity: logoOpacity,
          pointerEvents: isScrolled ? "none" : "auto",
        }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-20 bg-gradient-to-br from-black via-neutral-900 to-black"
      >
        <img
          src="/sytezo.png"
          alt="Sytezo"
          className="w-[100vw] h-[100vh] object-contain"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-20 text-2xl opacity-70"
        >
          ↓ Scroll Down
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          opacity: contentOpacity,
          y: contentY,
          visibility: isScrolled ? "visible" : "hidden",
        }}
        className="relative z-10 min-h-screen flex items-center justify-center pt-[100vh] pb-16 px-4"
      >
        <div className="flex flex-col justify-between min-h-full max-w-xl text-center">
          <h2
            className="text-4xl font-semibold mb-6"
            style={{ fontFamily: "Glacial Indifference" }}
          >
            Empowering productivity, enhancing well-being.
          </h2>

          <p
            className="text-xl mb-8 leading-relaxed"
            style={{ fontFamily: "Glacial Indifference" }}
          >
            We are building a series of products dedicated to productivity and
            mental well-being.
          </p>

          <div className="flex justify-center space-x-6 mt-12 z-50 relative">
            <a
              href="https://x.com/sytezo"
              className="text-white hover:text-blue-200 transition-colors duration-300"
              style={{ zIndex: 100 }}
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/sytezo/posts/?feedView=all"
              className="text-white hover:text-blue-200 transition-colors duration-300"
              style={{ zIndex: 100 }}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/sytezo.in/?hl=en"
              className="text-white hover:text-blue-200 transition-colors duration-300"
              style={{ zIndex: 100 }}
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
