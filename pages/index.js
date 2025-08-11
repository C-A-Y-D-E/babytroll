import { Rubik_Bubbles, Rubik_Doodle_Shadow } from "next/font/google";
import Head from "next/head";
import Hero from "@/components/Hero";

const rubikBubbles = Rubik_Bubbles({
  variable: "--font-rubik-bubbles",
  subsets: ["latin"],
  weight: ["400"],
});

const rubikDoodle = Rubik_Doodle_Shadow({
  variable: "--font-rubik-doodle",
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
      <main
        className={`${rubikBubbles.variable} ${rubikDoodle.variable} w-full`}
      >
        <Hero />
      </main>
    </>
  );
}
