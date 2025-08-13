import { Slackey } from "next/font/google";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Token from "@/components/Token";
import Partners from "@/components/Partners";
import Join from "@/components/Join";

const slackey = Slackey({
  variable: "--font-slackey",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Baby Troll</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={` ${slackey.variable} w-full`}>
        <Hero />
        <About />
        <Token />
        <Partners />
        <Join />
      </main>
    </>
  );
}
