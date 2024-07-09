import Image from "next/image";
import Link from "next/link";
import heroImg from "./../Images/heroImage.jpg";

function Hero() {
  return (
    <div className="relative bg-secondaryBackground dark:bg-backgroundDark pt-[120px] pb-[110px] lg:pt-[150px]  ">
      <div className="container mx-auto  ">
        <div className="flex flex-wrap items-center mx-4 p-9">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content md:flex flex-col items-center justify-center">
              <h1 className=" mb-5 text-4xl font-bold !leading-[1.208] sm:text-[42px] lg:text-[40px] xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-gray-700">
                About Transunity
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                Welcome to Transunity, where language barriers dissolve and
                global connections flourish. At Translantic, we are more than
                just a translation agency; we are your dedicated partner in
                multilingual communication. Our team of certified linguists and
                cultural experts work tirelessly to deliver precise,
                contextually accurate translations that resonate with your
                audience. Whether you need business documents, creative content,
                or technical manuals translated, we ensure that your message is
                conveyed with clarity and cultural nuance. Join us on a journey
                where words bridge worlds and your global potential is unlocked.
              </p>
              <ul className="flex flex-wrap  gap-4">
                <li className="flex ">
                  <Link
                    href="/Contactus"
                    className="inline-flex bg-blue-600 p-2 text-white m-auto rounded-md justify-center py-3 px-5 text-base font-medium"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <Image
                  src={heroImg}
                  alt="hero"
                  className="max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[5%]"
                />
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    np
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
                {/* <img
                  src={Stars}
                  alt="stars"
                  className="z-20 w-28 absolute mt-[-105%] right-[-5%] bottom-[5] opacity-70"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
