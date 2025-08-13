import React from "react";
import { motion } from "motion/react";

const Join = () => {
  return (
    <>
      <motion.section
        className="font-slackey"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full container mx-auto px-6 pt-16 pb-8 max-w-[1300px]">
          <div className="w-full space-y-12 text-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl tracking-widest text-center">
                Join the Troll Army
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl tracking-wider">
                Don't just watch — troll with us.
              </h2>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://t.me/babytrollbsc"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full max-w-[65px] object-cover"
                  src="tele.png"
                />
              </motion.a>
              <motion.a
                href="https://x.com/BabyTroll_BNB"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img className="w-full max-w-[65px] object-cover" src="x.png" />
              </motion.a>
            </motion.div>

            <img src="footer.png" className="w-full object-cover" />
            <motion.h2
              className="md:text-lg tracking-widest"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              © 2025 All rights reserved
            </motion.h2>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Join;
