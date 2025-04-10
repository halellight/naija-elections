import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function PresidentsPage() {
  const presidents = [
    {
      id: 1,
      name: "Bola Ahmed Tinubu",
      term: "2023-Present",
      party: "All Progressives Congress (APC)",
      description:
        "The 16th President of Nigeria, elected in the 2023 general election. Tinubu, a former Lagos State Governor, campaigned on a platform of economic reforms and national unity. His presidency has focused on economic restructuring, security challenges, and international relations.",
      achievements: [
        "Economic reforms aimed at stabilizing the Nigerian economy",
        "Diplomatic initiatives to strengthen Nigeria's position in Africa",
        "Infrastructure development projects across the country",
      ],
    },
    {
      id: 2,
      name: "Muhammadu Buhari",
      term: "2015-2023",
      party: "All Progressives Congress (APC)",
      description:
        "Served two terms as President, focusing on anti-corruption, security, and economic reforms. Buhari, a former military leader, returned to power as a civilian president with a mandate to fight corruption and insecurity. His administration faced significant challenges including economic recession, security threats from Boko Haram, and the COVID-19 pandemic.",
      achievements: [
        "Anti-corruption initiatives and recovery of looted funds",
        "Military campaigns against Boko Haram insurgency",
        "Agricultural sector reforms and diversification efforts",
        "Infrastructure development including railways and roads",
      ],
    },
    {
      id: 3,
      name: "Goodluck Ebele Jonathan",
      term: "2010-2015",
      party: "People's Democratic Party (PDP)",
      description:
        "Became President following the death of Umaru Yar'Adua, then won the 2011 election. Jonathan's presidency was marked by economic growth but also increasing security challenges from Boko Haram. He is widely recognized for his peaceful handover of power after losing the 2015 election, a significant moment for Nigerian democracy.",
      achievements: [
        "Peaceful transition of power after electoral defeat",
        "Economic reforms leading to Nigeria becoming Africa's largest economy",
        "Educational initiatives including establishment of new federal universities",
        "Electoral reforms to improve democratic processes",
      ],
    },
    {
      id: 4,
      name: "Umaru Musa Yar'Adua",
      term: "2007-2010",
      party: "People's Democratic Party (PDP)",
      description:
        "His presidency was cut short by illness and eventual death in office. Yar'Adua was known for his commitment to the rule of law and his seven-point agenda for national development. His administration initiated the amnesty program for Niger Delta militants, which significantly reduced unrest in the oil-producing region.",
      achievements: [
        "Niger Delta amnesty program reducing militancy in the region",
        "Electoral reform initiatives",
        "Commitment to rule of law and due process",
        "Efforts to improve power infrastructure",
      ],
    },
    {
      id: 5,
      name: "Olusegun Obasanjo",
      term: "1999-2007",
      party: "People's Democratic Party (PDP)",
      description:
        "First President of Nigeria's Fourth Republic, serving two terms after the return to democracy. Obasanjo, who had previously ruled as a military leader in the 1970s, returned as a civilian president to guide Nigeria's transition to democracy. His administration focused on economic reforms, anti-corruption efforts, and reestablishing Nigeria's international standing.",
      achievements: [
        "Debt relief negotiations reducing Nigeria's external debt",
        "Economic reforms including banking sector consolidation",
        "Creation of anti-corruption agencies (EFCC and ICPC)",
        "Telecommunications sector liberalization leading to mobile phone revolution",
        "Restoration of Nigeria's international reputation after military rule",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Presidents of Nigeria</h1>

      <div className="space-y-8">
        {presidents.map((president) => (
          <Card key={president.id} className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="bg-gray-200 w-48 h-48 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=${president.name}`}
                    alt={president.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="text-2xl font-bold text-[#008751]">{president.name}</h2>
                <p className="text-lg text-black font-semibold">{president.term}</p>
                <p className="text-gray-600 mb-4">Party: {president.party}</p>
                <p className="mb-4">{president.description}</p>

                <h3 className="font-semibold text-[#008751] mt-4">Key Achievements:</h3>
                <ul className="list-disc pl-5 mt-2">
                  {president.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

