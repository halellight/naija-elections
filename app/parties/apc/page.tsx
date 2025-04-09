import Image from "next/image"
import Link from "next/link"

export default function APCPage() {
  const partyInfo = {
    name: "All Progressives Congress (APC)",
    slogan: "Justice, Peace and Unity",
    founded: "February 6, 2013",
    headquarters: "Abuja, Nigeria",
    ideology: ["Progressive", "Center-left", "Big tent"], // Make sure this is an array
    chairperson: "Abdullahi Ganduje",
    secretary: "Ajibola Basiru",
    governorships: "21 out of 36 states",
    nationalAssembly: "Majority in both Senate and House of Representatives",
    colors: "Green, White, Blue, and Red",
    website: "www.officialapcng.com",
    history: [
      {
        period: "2013: Formation",
        description:
          "The All Progressives Congress was formed in February 2013 as a merger of Nigeria's three biggest opposition parties."
      },
      {
        period: "2015: Electoral Victory",
        description:
          "In the 2015 general elections, the APC won a historic victory, with its presidential candidate, Muhammadu Buhari, defeating incumbent President Goodluck Jonathan."
      },
      {
        period: "2023: Leadership Transition",
        description:
          "Bola Ahmed Tinubu, one of the party's founding members, was elected as the party's presidential candidate and subsequently won the 2023 presidential election."
      }
    ],
    keyFigures: [
      {
        name: "Bola Ahmed Tinubu",
        position: "President of Nigeria (2023-present)",
        description: "A founding member of the APC and former Governor of Lagos State."
      },
      {
        name: "Muhammadu Buhari",
        position: "Former President of Nigeria (2015-2023)",
        description: "A former military head of state who became the first APC president."
      }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/parties" className="text-ng-green hover:underline flex items-center gap-2">
          ← Back to Political Parties
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-1/3">
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-64 border-2 border-ng-green">
            <Image
              src="/placeholder.svg?height=250&width=250&text=APC+Logo"
              alt="APC Logo"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          <div className="mt-6 p-6 border-2 border-ng-green rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-ng-green">Party Information</h3>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Full Name:</span> {partyInfo.name}
              </p>
              <p>
                <span className="font-semibold">Slogan:</span> {partyInfo.slogan}
              </p>
              <p>
                <span className="font-semibold">Founded:</span> {partyInfo.founded}
              </p>
              <p>
                <span className="font-semibold">Headquarters:</span> {partyInfo.headquarters}
              </p>
              <p>
                <span className="font-semibold">Ideology:</span> {partyInfo.ideology.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Chairperson:</span> {partyInfo.chairperson}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-6 text-ng-green">{partyInfo.name}</h1>

          <div className="p-6 mb-8 border-2 border-ng-green rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-ng-green">Party History</h2>
            <div className="space-y-4">
              {partyInfo.history.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{item.period}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 mb-8 border-2 border-ng-green rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-ng-green">Key Figures</h2>
            <div className="space-y-4">
              {partyInfo.keyFigures.map((figure, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4 pb-4 border-b last:border-b-0">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <span className="text-gray-500">Photo</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{figure.name}</h3>
                    <p className="text-ng-green font-medium">{figure.position}</p>
                    <p className="mt-2">{figure.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
