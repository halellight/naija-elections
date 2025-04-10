import Link from "next/link"

export const metadata = {
  title: "About Us | Nigeria Elections",
  description: "Learn about the Nigeria Elections information portal, our mission, and what we do.",
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="mb-4">
            Nigeria Elections is dedicated to providing comprehensive, accurate, and accessible information about
            Nigeria's electoral system, political landscape, and democratic processes. We believe that an informed
            citizenry is essential for a functioning democracy, and we aim to contribute to Nigeria's democratic
            development by making electoral information available to all.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">What We Do</h2>
          <p className="mb-4">Our platform offers a range of resources and information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Electoral Information:</strong> Detailed guides on Nigeria's electoral system, voting processes,
              and electoral calendar
            </li>
            <li>
              <strong>Political Education:</strong> Comprehensive profiles of political parties, movements, and key
              political figures
            </li>
            <li>
              <strong>Civic Education:</strong> Resources on Nigeria's constitution, government structure, and citizens'
              rights and responsibilities
            </li>
            <li>
              <strong>Historical Context:</strong> Information about Nigeria's political history and the evolution of
              its democratic institutions
            </li>
            <li>
              <strong>Election Monitoring:</strong> During election periods, we provide updates on electoral
              preparations, voting, and results
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Accuracy</h3>
              <p>
                We are committed to providing factual, well-researched information. We verify our content through
                multiple sources and update it regularly to ensure it remains current and accurate.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Impartiality</h3>
              <p>
                We maintain political neutrality and present information without partisan bias. We strive to give fair
                coverage to all political parties and viewpoints within Nigeria's democratic space.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Accessibility</h3>
              <p>
                We believe electoral information should be accessible to all Nigerians. We present complex political and
                electoral concepts in clear, understandable language.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Transparency</h3>
              <p>
                We are open about our methodologies, sources, and any limitations in our information. We promptly
                correct errors when they are identified.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
          <p className="mb-4">
          Naija Elections is currently run by one person with a focus on political awareness, civic education, and digital media. The goal is to provide clear, accessible information about Nigeria’s political landscape and encourage informed civic participation.
          </p>
          <p className="mb-4">
            We collaborate with electoral experts, academics, civil society organizations, and other stakeholders to
            ensure the quality and relevance of our content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our History</h2>
          <p className="mb-4">
            Naija Elections was established in 2025 in response to the growing need for reliable, accessible
            information about Nigeria's electoral processes ahead of the 2023 general elections. Since then, we have
            expanded our scope to cover broader aspects of Nigeria's democracy and political system.
          </p>
          <p className="mb-4">
            Our platform continues to evolve as we respond to user feedback and the changing information needs of
            Nigerian voters and citizens interested in the country's democratic development.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="mb-4">
            We welcome feedback, corrections, and suggestions from our users. If you have questions or comments about
            our content or would like to collaborate with us, please{" "}
            <Link href="/contact" className="text-green-600 hover:text-green-800">
              contact us
            </Link>
            .
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
