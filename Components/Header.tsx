import React from "react";
import HeroRightSvg from "./SVG/HeroRightSvg";
import HeroLeftSvg from "./SVG/HeroLeftSvg";
import Link from "next/link";

function Header() {
  return (
    <section className="relative bg-background dark:bg-backgroundDark pt-32 pb-20 lg:pt-48 lg:pb-44 md:h-[100vh]">
      <HeroRightSvg className="absolute right-0 top-0 opacity-30 md:opacity-100" />

      <HeroLeftSvg className="absolute left-0 bottom-0 opacity-30 md:opacity-100" />

      <div className="flex  items-center justify-center text-center flex-col z-10 relative leading-snug">
        <h1 className="max-w-4xl font-bold text-3xl md:text-5xl leading-snug mb-12">
          TransUnity: Bridging Cultures, Empowering Communities
        </h1>
        <p className="mx-auto text-center max-w-3xl px-4 md:px-0 font-medium text-base md:text-xl text-gray-600 dark:text-gray-200 leading-relaxed">
          Welcome to TransUnity, your gateway to seamless cross-cultural
          communication. We blend expert linguists with advanced technology to
          deliver accurate, culturally sensitive translations. Join our vibrant
          community today and discover the power of language to connect,
          inspire, and transform. At TransUnity, unity in diversity is our way
          of life. Experience a world where language bridges gaps, not creates
          them. Start your journey with us now!
        </p>
        <div className=" my-4 flex  gap-3">
          <button className="bg-blue-600 px-2 py-3 rounded-md text-white">
            <Link href="/About">About Us</Link>
          </button>
          <button className="bg-blue-600 px-2 py-3 rounded-md text-white">
            <Link href="/Contactus">Get Started</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
