import React from "react";
import { motion } from "motion/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="w-full container h-screen mx-auto px-6 py-16 max-w-[1300px]">
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
                animate={{ scale: 1, opacity: 1,transition:{
                  duration: 1, delay: 0.6
                } }}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ scale: 1.05,transition:{
                  duration: 0.3,
                }  }}
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
              className="w-full flex flex-col items-center gap-5 text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.h1
                className="text-5xl tracking-[5px] md:text-6xl lg:text-7xl xl:text-9xl uppercase font-rubikDoodle xl:tracking-[14px]"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1}}
                transition={{ duration: 1, delay: 1 }}
                whileHover={{ scale: 1.05,transition:{
                  duration: 0.3,
           
                }  }}
              >
                Baby Troll
              </motion.h1>
              <motion.a
                className="font-rubikBubbles tracking-widest text-lg uppercase md:text-xl lg:text-2xl py-3 px-10 lg:px-16 border-2 border-black shadow-[8px_8px_8px_0px_rgba(0,0,0,1)]"
                href="https://www.pinksale.finance/launchpad/bsc/0x8A9bEf4A8984b1E6bDAdB0c71Dff765e3E48cA59"
                target="_blank"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
                transition={{ duration: 0.6, delay: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "12px 12px 12px 0px rgba(0,0,0,1)",
                  transition: {
                    duration: 0.3,
                  },
                }}
                whileTap={{ scale: 0.95 }}
              >
                buy presale
              </motion.a>
            </motion.div>
            <motion.div
              className="w-full flex max-lg:flex-col items-center lg:justify-between gap-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div
                className="flex items-center gap-4"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <motion.a
                  href="https://t.me/babytrollbsc"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="w-full max-w-[40px] object-cover"
                    src="tele.png"
                  />
                </motion.a>
                <motion.a
                  href="https://x.com/BabyTroll_BNB"
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="w-full max-w-[40px] object-cover"
                    src="x.png"
                  />
                </motion.a>
              </motion.div>
              <motion.h2
                className="text-lg font-rubikBubbles cursor-pointer"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <CopyToClipboard
                  text="0x46F69A68482ae252A489612C689Ba68087796c39"
                  onCopy={() => {
                    alert("Copied to clipboard");
                  }}
                >
                  <span>0x46F69A6...7796c39</span>
                </CopyToClipboard>
                {/* <span>0x46F69A6...7796c39</span> */}
              </motion.h2>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
