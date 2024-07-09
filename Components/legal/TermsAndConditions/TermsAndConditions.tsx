import HeroLeftSvg from "@/Components/SVG/HeroLeftSvg";
import HeroRightSvg from "@/Components/SVG/HeroRightSvg";
import React from "react";

function TermsAndConditions() {
  return (
    <section className="relative bg-background dark:bg-backgroundDark pt-32 pb-20 lg:pt-48 lg:pb-44 md:h-[full]">
      <HeroRightSvg className="absolute right-0 top-0 opacity-30 md:opacity-100" />

      <HeroLeftSvg className="absolute left-0 bottom-0 opacity-30 md:opacity-100" />

      <div className="flex  items-center justify-center text-center flex-col z-10 relative leading-snug h-full">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
          <p className="mb-4">
            <strong>Effective Date:</strong> [Insert Date]
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-6">
            Welcome to TransUnity. These Terms & Conditions outline the rules
            and regulations for the use of TransUnity's website, located at{" "}
            <a
              href="http://www.transunity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              www.transunity.com
            </a>
            . By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use TransUnity if you do not agree to
            all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            2. Intellectual Property Rights
          </h2>
          <p className="mb-6">
            Unless otherwise stated, TransUnity and/or its licensors own the
            intellectual property rights for all material on TransUnity. All
            intellectual property rights are reserved. You may access this from
            TransUnity for your own personal use subjected to restrictions set
            in these terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Restrictions</h2>
          <p className="mb-4">
            You are specifically restricted from all of the following:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Publishing any website material in any other media</li>
            <li>
              Selling, sublicensing, and/or otherwise commercializing any
              website material
            </li>
            <li>Publicly performing and/or showing any website material</li>
            <li>
              Using this website in any way that is or may be damaging to this
              website
            </li>
            <li>
              Using this website in any way that impacts user access to this
              website
            </li>
            <li>
              Using this website contrary to applicable laws and regulations
            </li>
            <li>
              Engaging in any data mining, data harvesting, data extracting, or
              any other similar activity in relation to this website
            </li>
            <li>
              Using this website to engage in any advertising or marketing
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Your Content</h2>
          <p className="mb-6">
            In these Terms & Conditions, “Your Content” shall mean any audio,
            video, text, images, or other material you choose to display on this
            website. By displaying Your Content, you grant TransUnity a
            non-exclusive, worldwide, irrevocable, sublicensable license to use,
            reproduce, adapt, publish, translate, and distribute it in any and
            all media.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. No Warranties</h2>
          <p className="mb-6">
            This website is provided "as is," with all faults, and TransUnity
            expresses no representations or warranties of any kind related to
            this website or the materials contained on this website. Also,
            nothing contained on this website shall be interpreted as advising
            you.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            6. Limitation of Liability
          </h2>
          <p className="mb-6">
            In no event shall TransUnity, nor any of its officers, directors,
            and employees, be held liable for anything arising out of or in any
            way connected with your use of this website whether such liability
            is under contract. TransUnity, including its officers, directors,
            and employees, shall not be held liable for any indirect,
            consequential, or special liability arising out of or in any way
            related to your use of this website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Indemnification</h2>
          <p className="mb-6">
            You hereby indemnify to the fullest extent TransUnity from and
            against any and all liabilities, costs, demands, causes of action,
            damages, and expenses arising in any way related to your breach of
            any of the provisions of these Terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Severability</h2>
          <p className="mb-6">
            If any provision of these Terms is found to be invalid under any
            applicable law, such provisions shall be deleted without affecting
            the remaining provisions herein.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Variation of Terms</h2>
          <p className="mb-6">
            TransUnity is permitted to revise these Terms at any time as it sees
            fit, and by using this website you are expected to review these
            Terms on a regular basis.
          </p>

          <h2 className="text-2xl font-semibold mb-4">10. Assignment</h2>
          <p className="mb-6">
            TransUnity is allowed to assign, transfer, and subcontract its
            rights and/or obligations under these Terms without any
            notification. However, you are not allowed to assign, transfer, or
            subcontract any of your rights and/or obligations under these Terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4">11. Entire Agreement</h2>
          <p className="mb-6">
            These Terms constitute the entire agreement between TransUnity and
            you in relation to your use of this website, and supersede all prior
            agreements and understandings.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            12. Governing Law & Jurisdiction
          </h2>
          <p className="mb-6">
            These Terms will be governed by and interpreted in accordance with
            the laws of the State of [Your State], and you submit to the
            non-exclusive jurisdiction of the state and federal courts located
            in [Your State] for the resolution of any disputes.
          </p>

          <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, please
            contact us at:
          </p>
          <p className="mt-4">
            <strong>TransUnity</strong>
            <br />
            [Your Company Address]
            <br />
            Email:{" "}
            <a
              href="mailto:[Your Email Address]"
              className="text-blue-500 underline"
            >
              [Your Email Address]
            </a>
            <br />
            Phone: [Your Phone Number]
          </p>
        </div>
      </div>
    </section>
  );
}

export default TermsAndConditions;
