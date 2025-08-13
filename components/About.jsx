import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <>
      <motion.section
        className="w-full bg-[#EA422F] font-slackey"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full container mx-auto px-6 py-16 lg:py-20 max-w-[1300px]">
          <div className="w-full grid place-items-center gap-8 lg:gap-12 mx-auto text-white text-center">
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl tracking-widest"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About
            </motion.h1>
            <motion.div
              className="space-y-8 w-full max-w-[700px] mx-auto text-lg md:text-xl lg:text-2xl tracking-widest"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>They said the OG Troll was dead… but memes never die.</p>
              <p>
                From the depths of the internet's dankest corners, Baby Troll
                crawled <br /> out with one mission: <br /> 👉 to troll your
                bags to the moon.
              </p>
            </motion.div>
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://t.me/babytrollbsc"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full max-w-[50px] object-cover"
                  src="red_tele.png"
                />
              </motion.a>
              <motion.a
                href="https://x.com/BabyTroll_BNB"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  className="w-full max-w-[50px] object-cover"
                  src="red_x.png"
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
