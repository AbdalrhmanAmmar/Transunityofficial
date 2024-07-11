import { IoIosBriefcase } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

function Offer() {
  return (
    <div className="min-h-screen p-4 bg-secondaryBackground dark:bg-secondaryBackgroundDark">
      <div className="text-center my-4 flex flex-col space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          What We Offer
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          In this section, you can learn more about the services Transunity
          offers to its clients. We are always ready to provide you with quality
          translation, interpreting, and educational services.
        </p>
        <div className="bg-white dark:bg-gray-700 rounded-md grid lg:grid-cols-4 md:grid-cols-2 text-black dark:text-white shadow-lg">
          <div className="flex flex-col space-y-3 justify-start text-center border-r-2 border-gray-300 dark:border-gray-600 h-full py-16 sm:border-b-2 sm:border-gray-300 dark:sm:border-gray-600 hover:bg-indigo-100 dark:hover:bg-indigo-600 transition-colors duration-300">
            <span className="flex justify-center text-center">
              <IoDocumentText size={35} />
            </span>
            <h3 className="text-lg font-semibold">Translation Services</h3>
            <ul className="flex flex-col space-y-2">
              <li>Advertising translation</li>
              <li>Software and technology translation</li>
              <li>Financial Translation</li>
              <li>Literary Translation</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3 justify-start text-center border-r-2 border-gray-300 dark:border-gray-600 h-full py-16 hover:bg-purple-100 dark:hover:bg-purple-600 transition-colors duration-300">
            <span className="flex justify-center text-center">
              <IoIosBriefcase size={35} />
            </span>
            <h3 className="text-lg font-semibold">Interpreting Services</h3>
            <ul className="flex flex-col space-y-2">
              <li>Interpreting</li>
              <li>Business and conference interpreting</li>
              <li>Sight and telephone translation</li>
              <li>Video and audio translation</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3 justify-start text-center border-r-2 border-gray-300 dark:border-gray-600 h-full py-16 hover:bg-pink-100 dark:hover:bg-pink-600 transition-colors duration-300">
            <span className="flex justify-center text-center">
              <FaMap size={35} />
            </span>
            <h3 className="text-lg font-semibold">Content Services</h3>
            <ul className="flex flex-col space-y-2">
              <li>Transcription</li>
              <li>Proofreading and quality assessment</li>
              <li>Content summarization and categorization</li>
              <li>Ads review and sentiment analysis</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3 justify-start text-center h-full py-16 hover:bg-teal-100 dark:hover:bg-teal-600 transition-colors duration-300">
            <span className="flex justify-center text-center">
              <AiOutlineGlobal size={35} />
            </span>
            <h3 className="text-lg font-semibold"> Community Services</h3>
            <ul className="flex flex-col space-y-2">
              <li className="">community management</li>
              <li className="">
                we hire the community manager and <br /> we spread the business
                in the arab world
              </li>
              <li className="">Event Coordination and Promotion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
