import React, { useState } from "react";
import { motion } from "motion/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Token = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <motion.section
        className="w-full font-slackey overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full container mx-auto px-6 py-16 lg:py-20 max-w-[1300px]">
          <div className="w-full grid place-items-center gap-8 lg:gap-12 mx-auto text-center">
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl tracking-widest uppercase"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Tokenomics
            </motion.h1>
            <motion.div
              className="w-full flex flex-col justify-center items-center gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-full flex max-lg:flex-col justify-center items-center gap-8">
                <Box h1={`NAME & SYMBOL`} h2={`BABY TROLL`} />
                <Box h1={`TAX`} h2={`3% Mkt | DEv`} />
                <Box h1={`Total Supply`} h2={`420000T`} />
              </div>
              <div className="w-full max-w-[700px] flex max-lg:flex-col justify-center items-center gap-8">
                <Box h1={`LIQUIDITY`} h2={`100% LOCKED`} />
                <Box h1={`TEAM TOKENS`} h2={`0%`} />
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center items-center border-2 border-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="px-2 md:px-4 py-2 lg:px-8">
                <h2 className="md:tracking-widest text-[10px] md:text-xl lg:text-2xl">
                  0x46F69A68482ae252A489612C689Ba68087796c39
                </h2>
              </div>
              <CopyToClipboard
                text="0x46F69A68482ae252A489612C689Ba68087796c39"
                onCopy={handleCopy}
              >
                <button className="h-[35px] w-[35px] md:h-[60px] md:w-[70px] bg-[#EA422F] relative overflow-hidden">
                  {copied ? (
                    <motion.span
                      className="text-white text-[8px] md:text-xs font-bold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      Copied!
                    </motion.span>
                  ) : (
                    <img
                      className="w-full object-cover max-w-[20px] mx-auto md:max-w-[30px]"
                      src="copy.svg"
                      alt="Copy"
                    />
                  )}
                </button>
              </CopyToClipboard>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Token;

const Box = ({ h1, h2 }) => {
  return (
    <>
      <motion.div
        className="bg-black h-full w-full max-w-[350px] max-lg:mx-auto rounded-3xl p-10 space-y-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <h1 className="text-[#EA422F] text-xl md:text-2xl uppercase">{h1}</h1>
        <h2 className="text-white text-xl md:text-2xl">{h2}</h2>
      </motion.div>
    </>
  );
};
