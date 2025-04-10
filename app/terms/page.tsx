import Link from "next/link"

export const metadata = {
  title: "Terms of Service | Nigeria Elections",
  description: "Read the terms and conditions governing your use of the Nigeria Elections website.",
}

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <div className="space-y-6">
        <section>
          <p className="mb-4">
            <strong>Last Updated:</strong> April 10, 2025
          </p>
          <p className="mb-4">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the
            nigeriaelections.org website (the "Service") operated by Nigeria Elections ("us", "we", or "our").
          </p>
          <p className="mb-4">
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
            These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
          <p className="mb-4">
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of
            the terms, then you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Use of the Service</h2>
          <p className="mb-4">
            The Naija Elections website is designed to provide information about Nigeria's electoral system, political
            landscape, and democratic processes. You agree to use the Service only for lawful purposes and in accordance
            with these Terms.
          </p>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Use the Service in any way that violates any applicable national or international law or regulation</li>
            <li>
              Use the Service to transmit or procure the sending of any advertising or promotional material, including
              any "junk mail", "chain letter", "spam", or any other similar solicitation
            </li>
            <li>
              Impersonate or attempt to impersonate Nigeria Elections, a Nigeria Elections employee, another user, or
              any other person or entity
            </li>
            <li>
              Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which,
              as determined by us, may harm Nigeria Elections or users of the Service or expose them to liability
            </li>
            <li>
              Use the Service in any manner that could disable, overburden, damage, or impair the site or interfere with
              any other party's use of the Service
            </li>
            <li>
              Use any robot, spider, or other automatic device, process, or means to access the Service for any purpose,
              including monitoring or copying any of the material on the Service
            </li>
            <li>
              Use any manual process to monitor or copy any of the material on the Service or for any other unauthorized
              purpose without our prior written consent
            </li>
            <li>
              Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the
              server on which the Service is stored, or any server, computer, or database connected to the Service
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property
            of Nigeria Elections and its licensors. The Service is protected by copyright, trademark, and other laws of
            both Nigeria and foreign countries. Our trademarks and trade dress may not be used in connection with any
            product or service without the prior written consent of Nigeria Elections.
          </p>
          <p className="mb-4">
            Content published on the Service (digital downloads, images, texts, graphics, logos) is the property of
            Nigeria Elections or its content creators and protected by international copyright laws. The entire
            compilation of the content found on the Service is the exclusive property of Nigeria Elections, with
            copyright authorship for this compilation by Nigeria Elections.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">User Content</h2>
          <p className="mb-4">
            Our Service may allow you to post, link, store, share and otherwise make available certain information,
            text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that
            you post to the Service, including its legality, reliability, and appropriateness.
          </p>
          <p className="mb-4">
            By posting User Content to the Service, you grant us the right and license to use, modify, publicly perform,
            publicly display, reproduce, and distribute such content on and through the Service. You retain any and all
            of your rights to any User Content you submit, post, or display on or through the Service and you are
            responsible for protecting those rights.
          </p>
          <p className="mb-4">You represent and warrant that:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              The User Content is yours (you own it) or you have the right to use it and grant us the rights and license
              as provided in these Terms
            </li>
            <li>
              The posting of your User Content on or through the Service does not violate the privacy rights, publicity
              rights, copyrights, contract rights, or any other rights of any person
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Links To Other Web Sites</h2>
          <p className="mb-4">
            Our Service may contain links to third-party web sites or services that are not owned or controlled by
            Nigeria Elections.
          </p>
          <p className="mb-4">
            Nigeria Elections has no control over, and assumes no responsibility for, the content, privacy policies, or
            practices of any third-party web sites or services. You further acknowledge and agree that Nigeria Elections
            shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be
            caused by or in connection with the use of or reliance on any such content, goods, or services available on
            or through any such web sites or services.
          </p>
          <p className="mb-4">
            We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or
            services that you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your access immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach the Terms.
          </p>
          <p className="mb-4">
            Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
            account, you may simply discontinue using the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall Nigeria Elections, nor its directors, employees, partners, agents, suppliers, or
            affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Your access to or use of or inability to access or use the Service</li>
            <li>Any conduct or content of any third party on the Service</li>
            <li>Any content obtained from the Service</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Disclaimer</h2>
          <p className="mb-4">
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
            basis. The Service is provided without warranties of any kind, whether express or implied, including, but
            not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement,
            or course of performance.
          </p>
          <p className="mb-4">
            Nigeria Elections, its subsidiaries, affiliates, and its licensors do not warrant that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>The Service will function uninterrupted, secure, or available at any particular time or location</li>
            <li>Any errors or defects will be corrected</li>
            <li>The Service is free of viruses or other harmful components</li>
            <li>The results of using the Service will meet your requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the laws of Nigeria, without regard to its
            conflict of law provisions.
          </p>
          <p className="mb-4">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
            rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
            provisions of these Terms will remain in effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole discretion.
          </p>
          <p className="mb-4">
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by
            the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
          <p className="mb-2">Email: praiseibec@gmail.com</p>
          <p className="mb-2">
            Or visit our{" "}
            <Link href="/contact" className="text-green-600 hover:text-green-800">
              Contact Page
            </Link>
          </p>
        </section>

        <div className="mt-8 border-t pt-6">
          <Link href="/" className="text-green-600 hover:text-green-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
