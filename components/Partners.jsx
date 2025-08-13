import React from "react";
import { motion } from "motion/react";

const Partners = () => {
  return (
    <>
      <motion.section
        className="w-full bg-black font-slackey"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full container mx-auto px-6 py-16 lg:py-20 max-w-[1300px]">
          <div className="w-full space-y-10">
            <motion.h1
              className="text-4xl lg:text-5xl text-white xl:text-6xl tracking-widest uppercase text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              PARTNERS
            </motion.h1>
            <motion.div
              className="w-full grid grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Links
                href="https://www.dextools.io/app/en/gainers"
                img="dextools.png"
              />
              <Links href="https://coinmarketcap.com/" img="cmc.png" />
              <Links href="https://www.coingecko.com/" img="cg.png" />
              <Links href="https://dexscreener.com/" img="dexscr.png" />
              <Links href="https://www.pinksale.finance/" img="ps.png" />
              <Links href="https://www.dexview.com/" img="dexview.png" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Partners;

const Links = ({ href, img }) => {
  return (
    <>
      <motion.a
        href={href}
        target="_blank"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
      >
        <img
          className="w-full object-cover max-w-[120px] md:max-w-[200px] lg:max-w-[250px]"
          src={img}
          alt="Partner logo"
        />
      </motion.a>
    </>
  );
};
