import HeroLeftSvg from "@/Components/SVG/HeroLeftSvg";
import HeroRightSvg from "@/Components/SVG/HeroRightSvg";
import Link from "next/link";
import React from "react";

function PrivacyPolicy() {
  return (
    <section className="relative bg-background dark:bg-backgroundDark pt-32 pb-20 lg:pt-48 lg:pb-44 md:h-[full]">
      <HeroRightSvg className="absolute right-0 top-0 opacity-30 md:opacity-100" />

      <HeroLeftSvg className="absolute left-0 bottom-0 opacity-30 md:opacity-100" />

      <div className="flex  items-center justify-center text-center flex-col z-10 relative leading-snug h-full">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">
            <strong>Effective Date:</strong> [Insert Date]
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-6">
            Welcome to TransUnity. Your privacy is important to us. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            information when you visit our website,{" "}
            <a
              href="http://www.transunity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              www.transunity.com
            </a>
            . By using our website, you consent to the practices described in
            this policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p className="mb-4">
            <strong>Personal Information:</strong> We may collect personal
            information that you provide to us when you register on our website,
            subscribe to our newsletter, fill out a form, or interact with us in
            any other way. This may include your name, email address, phone
            number, and other contact details.
          </p>
          <p className="mb-6">
            <strong>Usage Data:</strong> We may automatically collect
            information about your interaction with our website, including IP
            addresses, browser type, referring/exit pages, and operating system.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            3. How We Use Your Information
          </h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc list-inside mb-6">
            <li>Provide and maintain our services</li>
            <li>Improve and personalize your experience</li>
            <li>
              Communicate with you, including sending updates and promotional
              materials
            </li>
            <li>
              Monitor and analyze usage patterns to enhance our website’s
              functionality and user experience
            </li>
            <li>
              Protect against fraud and ensure the security of our website
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            4. Sharing Your Information
          </h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except as described in this Privacy
            Policy. We may share your information with:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Service Providers:</strong> We may share your information
              with third-party service providers who assist us in operating our
              website, conducting our business, or serving our users.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required to do so by law or in response to valid
              requests by public authorities.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            5. Security of Your Information
          </h2>
          <p className="mb-6">
            We implement a variety of security measures to maintain the safety
            of your personal information. However, no method of transmission
            over the Internet, or method of electronic storage, is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc list-inside mb-6">
            <li>Access the personal information we hold about you</li>
            <li>
              Request the correction of inaccurate or incomplete information
            </li>
            <li>Request the deletion of your personal information</li>
            <li>Object to the processing of your personal information</li>
            <li>
              Withdraw your consent at any time where we rely on your consent to
              process your information
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            7. Cookies and Tracking Technologies
          </h2>
          <p className="mb-6">
            We use cookies and similar tracking technologies to track the
            activity on our website and hold certain information. You can
            instruct your browser to refuse all cookies or to indicate when a
            cookie is being sent.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
          <p className="mb-6">
            Our website may contain links to other sites that are not operated
            by us. We are not responsible for the content or privacy practices
            of these third-party sites.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p className="mb-6">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the effective date.
          </p>

          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
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

export default PrivacyPolicy;
