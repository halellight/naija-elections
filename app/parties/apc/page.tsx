import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function APCPage() {
  const partyInfo = {
    name: "All Progressives Congress (APC)",
    slogan: "Justice, Peace and Unity",
    founded: "February 6, 2013",
    headquarters: "Abuja, Nigeria",
    ideology: ["Progressive", "Center-left", "Big tent"],
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
          "The All Progressives Congress was formed in February 2013 as a merger of Nigeria's three biggest opposition parties – the Action Congress of Nigeria (ACN), the Congress for Progressive Change (CPC), the All Nigeria Peoples Party (ANPP), and a faction of the All Progressives Grand Alliance (APGA). The merger was aimed at creating a strong opposition party capable of challenging the then-ruling People's Democratic Party (PDP).",
      },
      {
        period: "2014: First Convention",
        description:
          "The party held its first national convention in June 2014, where it elected its national officers and began preparations for the 2015 general elections.",
      },
      {
        period: "2015: Electoral Victory",
        description:
          "In the 2015 general elections, the APC won a historic victory, with its presidential candidate, Muhammadu Buhari, defeating incumbent President Goodluck Jonathan. This marked the first time in Nigeria's history that an opposition party defeated a ruling party in a presidential election.",
      },
      {
        period: "2019: Re-election",
        description:
          "The APC consolidated its position in the 2019 general elections, with President Buhari winning re-election for a second term. The party also maintained its majority in both chambers of the National Assembly.",
      },
      {
        period: "2022-2023: Leadership Transition",
        description:
          "The party underwent a leadership transition with Abdullahi Adamu becoming the national chairman in March 2022. In 2023, Bola Ahmed Tinubu, one of the party's founding members, was elected as the party's presidential candidate and subsequently won the 2023 presidential election.",
      },
    ],
    keyFigures: [
      {
        name: "Bola Ahmed Tinubu",
        position: "President of Nigeria (2023-present)",
        description:
          "A founding member of the APC and former Governor of Lagos State (1999-2007). Tinubu is widely regarded as one of the key architects of the merger that formed the APC.",
      },
      {
        name: "Muhammadu Buhari",
        position: "Former President of Nigeria (2015-2023)",
        description:
          "A former military head of state who became the first APC president. Buhari's administration focused on fighting corruption, improving security, and diversifying the economy.",
      },
      {
        name: "Abdullahi Ganduje",
        position: "National Chairman",
        description: "Former Governor of Kano State who became the party's national chairman in 2023.",
      },
      {
        name: "Kashim Shettima",
        position: "Vice President of Nigeria (2023-present)",
        description:
          "Former Governor of Borno State who was selected as Tinubu's running mate for the 2023 presidential election.",
      },
    ],
    ideology:
      "The APC describes itself as a progressive party that believes in social democracy, social justice, and the welfare of the Nigerian people. The party's manifesto emphasizes economic development, security, anti-corruption, and good governance. However, as a big-tent party, it encompasses a wide range of political views and ideologies.",
    electoralPerformance: [
      {
        election: "2015 General Election",
        performance:
          "Won the presidency with Muhammadu Buhari as candidate. Secured majority in both the Senate and House of Representatives.",
      },
      {
        election: "2019 General Election",
        performance:
          "Retained the presidency with Buhari winning re-election. Maintained majority in both chambers of the National Assembly.",
      },
      {
        election: "2023 General Election",
        performance:
          "Won the presidency with Bola Tinubu as candidate. Maintained majority in both the Senate and House of Representatives.",
      },
    ],
    challenges:
      "Despite its electoral successes, the APC has faced internal challenges, including factional disputes, defections, and ideological differences among its members. The party has also faced criticism for its handling of economic issues, security challenges, and governance. As a ruling party, the APC's performance is constantly under scrutiny, and its ability to address Nigeria's complex challenges will determine its long-term success and popularity.",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/parties" className="text-[#008751] hover:underline flex items-center gap-2">
          ← Back to Political Parties
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-1/3">
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-64 border-2 border-[#008751]">
            <Image
              src="/placeholder.svg?height=250&width=250&text=APC+Logo"
              alt="APC Logo"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          <Card className="mt-6 p-6 border-2 border-[#008751]">
            <h3 className="font-bold text-lg mb-4 text-[#008751]">Party Information</h3>
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
              <p>
                <span className="font-semibold">Secretary:</span> {partyInfo.secretary}
              </p>
              <p>
                <span className="font-semibold">Governorships:</span> {partyInfo.governorships}
              </p>
              <p>
                <span className="font-semibold">National Assembly:</span> {partyInfo.nationalAssembly}
              </p>
              <p>
                <span className="font-semibold">Colors:</span> {partyInfo.colors}
              </p>
              <p>
                <span className="font-semibold">Website:</span> {partyInfo.website}
              </p>
            </div>
          </Card>
        </div>

        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-6 text-[#008751]">{partyInfo.name}</h1>

          <Card className="p-6 mb-8 border-2 border-[#008751]">
            <h2 className="text-xl font-bold mb-4 text-[#008751]">Party History</h2>
            <div className="space-y-4">
              {partyInfo.history.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{item.period}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 mb-8 border-2 border-[#008751]">
            <h2 className="text-xl font-bold mb-4 text-[#008751]">Key Figures</h2>
            <div className="space-y-4">
              {partyInfo.keyFigures.map((figure, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4 pb-4 border-b last:border-b-0">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <span className="text-gray-500">Photo</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{figure.name}</h3>
                    <p className="text-[#008751] font-medium">{figure.position}</p>
                    <p className="mt-2">{figure.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 mb-8 border-2 border-[#008751]">
            <h2 className="text-xl font-bold mb-4 text-[#008751]">Ideology and Platform</h2>
            <p>{partyInfo.ideology}</p>
          </Card>

          <Card className="p-6 mb-8 border-2 border-[#008751]">
            <h2 className="text-xl font-bold mb-4 text-[#008751]">Electoral Performance</h2>
            <div className="space-y-4">
              {partyInfo.electoralPerformance.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{item.election}</h3>
                  <p>{item.performance}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-2 border-[#008751]">
            <h2 className="text-xl font-bold mb-4 text-[#008751]">Challenges and Criticisms</h2>
            <p>{partyInfo.challenges}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}

