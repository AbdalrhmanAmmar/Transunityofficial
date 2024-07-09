import React from "react";
import HeroRightSvg from "./SVG/HeroRightSvg";
import HeroLeftSvg from "./SVG/HeroLeftSvg";
import { SiCalendly } from "react-icons/si";

function ContactForm() {
  return (
    <section className="relative bg-background dark:bg-backgroundDark pt-32 pb-20 lg:pt-48 lg:pb-44 md:h-[100vh]">
      <HeroRightSvg className="absolute right-0 top-0 opacity-30 md:opacity-100" />

      <HeroLeftSvg className="absolute left-0 bottom-0 opacity-30 md:opacity-100" />

      <div className="flex  items-center justify-center  flex-col z-10 relative ">
        {/* Fix this error */}
        <a
          href="https://calendly.com/transunity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50  flex gap-x-5">
            <SiCalendly size={25} />
            Contact Us with Google Calendar
          </button>
        </a>
      </div>
    </section>
  );
}

export default ContactForm;
