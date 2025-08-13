import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden font-slackey">
        <div className="w-full container  mx-auto px-6 py-16 max-w-[1300px]">
          <motion.div
            className="w-full h-full grid place-items-center gap-10 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-full max-w-[1100px] mx-auto flex justify-between items-center gap-5"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                className="w-full max-w-[50px] md:max-w-[100px] lg:max-w-[200px] xl:max-w-[220px] object-cover"
                src="left.png"
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  y: [0, -20, 0],
                }}
                transition={{
                  x: { duration: 0.8, delay: 0.4 },
                  opacity: { duration: 0.8, delay: 0.4 },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <motion.img
                className="w-full max-lg:mx-auto max-w-[200px] md:max-w-[400px] lg:max-w-[500px] object-cover"
                src="hero.png"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                className="w-full max-w-[50px] md:max-w-[100px] lg:max-w-[200px] xl:max-w-[220px]  object-cover"
                src="right.png"
                initial={{ x: 100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  y: [0, 20, 0],
                }}
                transition={{
                  x: { duration: 0.8, delay: 0.4 },
                  opacity: { duration: 0.8, delay: 0.4 },
                  y: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  },
                }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              />
            </motion.div>
            <motion.div
              className="w-full flex flex-col items-center gap-8 text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.h1
                className="text-5xl tracking-[5px] md:text-6xl lg:text-7xl xl:text-9xl uppercase xl:tracking-[12px]"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                Baby Troll
              </motion.h1>
              <div className="flex gap-5">
              <motion.a
                className="tracking-widest text-lg uppercase md:text-xl lg:text-2xl py-3 px-10 lg:px-16 border-2 border-black shadow-[8px_8px_8px_0px_rgba(0,0,0,1)]"
                href="https://pancakeswap.finance/swap?outputCurrency=0x46F69A68482ae252A489612C689Ba68087796c39"
                         rel="noopener noreferrer"
                target="_blank"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "12px 12px 12px 0px rgba(0,0,0,1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                buy 
              </motion.a>
              <motion.a
                className="tracking-widest text-lg uppercase md:text-xl lg:text-2xl py-3 px-10 lg:px-16 border-2 border-black shadow-[8px_8px_8px_0px_rgba(0,0,0,1)]"
                href="https://www.dextools.io/app/en/bnb/pair-explorer/0x328badf6d2516eb40002ef121b53e1b0679f12a3?t=1755057400619"
                rel="noopener noreferrer"
                target="_blank"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "12px 12px 12px 0px rgba(0,0,0,1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Chart 
              </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
