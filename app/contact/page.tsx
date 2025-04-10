import Link from "next/link"

export const metadata = {
  title: "Contact Us | Nigeria Elections",
  description: "Get in touch with the Nigeria Elections team for inquiries, feedback, or collaboration opportunities.",
}

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="space-y-6">
        <section>
          <p className="mb-6">
            We value your feedback, questions, and suggestions. Please use the form below to get in touch with our team,
            and we'll respond as soon as possible.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
          <form
  action="https://formsubmit.co/praiseibec@gmail.com"
  method="POST"
  className="space-y-4"
>
  {/* disable CAPTCHA */}
  <input type="hidden" name="_captcha" value="false" />

  {/* optional: redirect to thank you page after submission */}
  <input type="hidden" name="_next" value="https://nigeriaelections.org/thank-you" />

  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
        First Name*
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
        required
      />
    </div>
    <div>
      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
        Last Name*
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
        required
      />
    </div>
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
      Email Address*
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
      required
    />
  </div>

  <div>
    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
      Subject*
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
      required
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
      Message*
    </label>
    <textarea
      id="message"
      name="message"
      rows={5}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
      required
    ></textarea>
  </div>

  <div>
    <button
      type="submit"
      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
      Send Message
    </button>
  </div>
</form>

          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Email</h3>
              <p className="mb-2">For general inquiries:</p>
              <p className="text-green-600">praiseibec@gmail.com</p>
       
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Social Media</h3>
              <p className="mb-2">Connect with us on social media:</p>
              <div className="space-y-1">
                <p>X: @_halel</p>
                <p>Facebook: Coming Soon</p>
                <p>Instagram: Coming Soon</p>
                <p>LinkedIn: Praise Ibe</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Collaboration Opportunities</h2>
          <p className="mb-4">
            We are open to collaborations with organizations and individuals working in the areas of democracy, civic
            education, electoral processes, and related fields. If you're interested in partnering with us, please
            contact us with details about your organization and proposed collaboration.
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
