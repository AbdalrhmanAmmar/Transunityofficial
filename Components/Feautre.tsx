import React from "react";
import service1 from "./Images/s1.png";
import service3 from "./Images/s3.png";
import service4 from "./Images/s4.png";
import service5 from "./Images/s5.png";

import ServiceImg1 from "./Images/ServiceImg1.jpg";
import ServiceImg2 from "./Images/ServiceImg2.jpg";
import Image from "next/image";
import { FaJournalWhills } from "react-icons/fa";

function Feautre() {
  return (
    <div className="max-w-screen  font-poppins  ">
      <section className="bg:secondaryBackground dark:bg-secondaryBackgroundDark dark:text-white">
        <div className=" max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:textDark">
              Discover the Transunity Advantage
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:textDark">
              Unlock seamless global communication with Transunity. From expert
              translation to real-time interpreting, we empower your
              international success.
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#3b59e1bd] dark:bg-blue-600">
                      <Image src={service1} width={50} height={50} alt="" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:textdark">
                      Document Translation
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Unlock seamless global communication with our expert
                      document translation service. Ensure accurate, culturally
                      sensitive translations for business or personal needs.
                      Bridge language barriers and expand your reach
                      effortlessly with our reliable solutions.
                    </p>
                  </div>
                </div>
                <div className="flex"></div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#3b59e1bd] dark:bg-blue-600">
                      <Image src={service3} width={50} height={50} alt="" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Localization Services
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Expand your global presence with our Localization
                      Services. We adapt your content to resonate with diverse
                      cultures and languages, ensuring it feels native to each
                      audience. Reach new markets and connect authentically
                      worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Image
                src={ServiceImg1}
                alt=""
                width={1000}
                height={1000}
                className="taos:transalate-x-[200px] taos:opacity-0 hover:translate-y-2 transition ease-in-out duration-150 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#3b59e1bd] dark:bg-blue-600">
                        <Image src={service4} width={50} height={50} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Website Transaltion
                      </h4>
                      <p className="mt-2 dark:text-gray-600">
                        Transform your online presence with our Website
                        Translation services. We expertly translate and localize
                        your site, ensuring it appeals to diverse audiences
                        globally. Engage more visitors and grow your
                        international reach effortlessly.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#3b59e1bd] dark:bg-blue-600">
                        <Image src={service5} width={50} height={50} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Personal Transltion
                      </h4>
                      <p className="mt-2 dark:text-gray-600">
                        Get accurate and sensitive translations for your
                        personal documents with our Personal Translation
                        services. From letters to certificates, we ensure your
                        translations are precise and culturally appropriate.
                        Trust us for seamless, reliable personal communication
                        across languages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <Image
                  src={ServiceImg2}
                  alt=""
                  className="taos:transalate-x-[200px] taos:opacity-0 hover:translate-y-2 transition ease-in-out duration-150 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feautre;
