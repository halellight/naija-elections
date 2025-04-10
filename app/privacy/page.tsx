import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Nigeria Elections",
  description: "Learn about how Nigeria Elections collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <p className="mb-4">
            <strong>Last Updated:</strong> April 10, 2025
          </p>
          <p className="mb-4">
            Nigeria Elections ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our website
            nigeriaelections.org (the "Website").
          </p>
          <p className="mb-4">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please
            do not access the Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p className="mb-4">We may collect information about you in various ways:</p>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Personal Data</h3>
            <p className="mb-2">Personally identifiable information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Fill out forms on our Website (such as contact forms)</li>
              <li>Subscribe to our newsletter</li>
              <li>Respond to surveys</li>
              <li>Participate in interactive features on our Website</li>
              <li>Correspond with us by email</li>
            </ul>
            <p className="mb-2">This information may include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Automatically Collected Information</h3>
            <p className="mb-2">
              When you visit our Website, our servers may automatically log standard data provided by your web browser.
              This may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Your computer's IP address</li>
              <li>Browser type and version</li>
              <li>Pages you visit</li>
              <li>Time and date of your visit</li>
              <li>Time spent on each page</li>
              <li>Referring website addresses</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Cookies and Similar Technologies</h3>
            <p className="mb-2">
              We may use cookies and similar tracking technologies to collect information about your interactions with
              our Website. Cookies are small data files that are placed on your device when you visit a website.
            </p>
            <p className="mb-2">We use cookies to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Enhance your experience on our Website</li>
              <li>Analyze Website usage</li>
              <li>Personalize content</li>
              <li>Remember your preferences</li>
            </ul>
            <p className="mb-2">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our Website.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="mb-2">We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Provide, operate, and maintain our Website</li>
            <li>Improve, personalize, and expand our Website</li>
            <li>Understand and analyze how you use our Website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, including responding to your inquiries and comments</li>
            <li>Send you emails about updates, information, or services</li>
            <li>Find and prevent fraud</li>
            <li>For compliance with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Disclosure of Your Information</h2>
          <p className="mb-4">We may share information we have collected in certain situations:</p>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">With Your Consent</h3>
            <p className="mb-2">We may disclose your personal information for any purpose with your consent.</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Service Providers</h3>
            <p className="mb-2">
              We may share your information with third-party vendors, service providers, contractors, or agents who
              perform services for us or on our behalf and require access to such information to do that work.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Legal Requirements</h3>
            <p className="mb-2">
              We may disclose your information where we are legally required to do so in order to comply with applicable
              law, governmental requests, a judicial proceeding, court order, or legal process.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">To Protect Rights</h3>
            <p className="mb-2">
              We may disclose your information where we believe it is necessary to investigate, prevent, or take action
              regarding potential violations of our policies, suspected fraud, situations involving potential threats to
              the safety of any person, or as evidence in litigation.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Security of Your Information</h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to help protect your personal information.
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data
            transmission can be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
          <p className="mb-2">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>The right to access personal information we hold about you</li>
            <li>The right to request correction of inaccurate personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to object to processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us using the information provided in the "Contact Us" section
            below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Children's Privacy</h2>
          <p className="mb-4">
            Our Website is not intended for children under 18 years of age. We do not knowingly collect personal
            information from children under 18. If you are a parent or guardian and believe your child has provided us
            with personal information, please contact us, and we will delete such information from our systems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
            Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="mb-4">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
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
