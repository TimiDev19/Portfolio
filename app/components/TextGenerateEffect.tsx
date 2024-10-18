"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // You can include the weights you need
    variable: '--font-inter', // Define a custom variable for Tailwind or inline CSS usage
});

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  
  // Trigger the animation whenever the component becomes visible
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is visible
    triggerOnce: false, // Set to false to trigger every time it's in view
  });

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (inView) {
      // Start the animation whenever the component becomes visible
      animate(
        scope.current.querySelectorAll("span"), // Animate all span elements (words)
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2), // Staggered animation for each word
        }
      );
    } else {
      // Optionally reset the animation when it leaves the viewport
      animate(
        scope.current.querySelectorAll("span"),
        {
          opacity: 0,
          filter: filter ? "blur(10px)" : "none",
        },
        {
          duration: 0.5, // Quick reset animation when leaving
        }
      );
    }
  }, [inView, animate, duration, filter, scope]);

  const renderWords = () => {
    return (
      <div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={idx}
            className="text-white  opacity-0"
            style={{
              display: "inline-block",
              marginRight: "5px", // Add space between words
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div ref={ref} className={`text-white text-center text-2xl w-[90%] lg:w-[85%] lg:text-4xl m-auto leading-snug tracking-wide ${inter.className}`}>
          {renderWords()} {/* Render animated words */}
        </div>
      </div>
    </div>
  );
};
