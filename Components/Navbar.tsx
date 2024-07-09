"use client";
import ThemeSwitch from "@/Theme/ThemeSwitch";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ImgLogo from "./Images/Logo.png";
import useScroll from "@/hooks/useScroll";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const Pathname = usePathname();

  const scrolled = useScroll();
  const [toggle, settoggle] = useState<boolean>(false);
  const onClickToggle = () => {
    settoggle(!toggle);
    console.log("first");
  };
  const Navigate = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/Contactus" },
  ];

  return (
    <>
      <nav
        className={`${
          scrolled
            ? "fixed backdrop-blur-sm py-2 shadow-sm bg-opacity-70 dark:bg-opacity-70"
            : "absolute bg-transparent dark:bg-transparent py-4"
        } inset-x-0 top-0 z-50  lg:pr-0 bg-background dark:bg-backgroundDark`}
      >
        <div className="lg:max-w-screen-xl w-[full] flex flex-wrap items-center justify-between mx-auto p-4   ">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={ImgLogo} className="w-10 h-8" alt="Transunity Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Transunity
            </span>
          </Link>
          <div className="flex md:order-2 i space-x-3 md:space-x-5 rtl:space-x-reverse">
            <span className="text-black dark:text-white flex items-center m-auto space-x-3 text-2xl">
              <ThemeSwitch />
            </span>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={onClickToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {/* <li>
                <Link
                  href="/"
                  // className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  className={`px-4 py-3 rounded-2xl ${
                    Pathname === "/"
                      ? "text-white bg-[#3b59e1bd] dark:bg-blue-600 dark:text-white "
                      : "hover:text-white hover:bg-[#3b59e1bd] dark:hover:bg-blue-600 dark:hover:text-white"
                  }`.trim()}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className={`px-4 py-3 rounded-2xl ${
                    Pathname === "/About"
                      ? "text-white bg-[#3b59e1bd] dark:bg-blue-600 dark:text-white "
                      : "hover:text-white hover:bg-[#3b59e1bd] dark:hover:bg-blue-600 dark:hover:text-white"
                  }`.trim()}
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${
                    Pathname === "/contact"
                      ? "text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      : "text-green-500"
                  }`}
                >
                  Contact
                </Link>
              </li> */}
              {Navigate.map((link) => {
                return (
                  <li key={link.name}>
                    <Link
                      className={`px-4 py-3 rounded-2xl ${
                        Pathname === link.href
                          ? "text-white bg-[#3b59e1bd] dark:bg-blue-600 dark:text-white "
                          : "hover:text-white hover:bg-[#3b59e1bd] dark:hover:bg-blue-600 dark:hover:text-white"
                      }`}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* mobile view */}
        <div className={`${toggle ? "block" : "hidden"}`}>
          <ul className=" flex flex-col justify-center items-center space-y-6 backdrop-blur-sm py-2 shadow-sm bg-opacity-30 dark:bg-opacity-70 bg-background dark:bg-backgroundDark  ">
            {/* <li>
              <Link href="/" onClick={onClickToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" onClick={onClickToggle}>
                About
              </Link>
            </li>
            <li>
              <Link href="/Services" onClick={onClickToggle}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/Contact" onClick={onClickToggle}>
                Contact
              </Link>
            </li> */}

            {Navigate.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    className={`px-10 py-3 rounded-2xl ${
                      Pathname === link.href
                        ? "text-white bg-[#3b59e1bd] dark:bg-blue-600 dark:text-white "
                        : "hover:text-white hover:bg-[#3b59e1bd] dark:hover:bg-blue-600 dark:hover:text-white"
                    }`}
                    href={link.href}
                    onClick={onClickToggle}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
