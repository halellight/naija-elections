import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function DemocracyMovementsPage() {
  const movements = [
    {
      id: "independence",
      name: "Nigerian Independence Movement",
      period: "1940s-1960",
      leaders: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Ahmadu Bello", "Herbert Macaulay"],
      description:
        "The Nigerian Independence Movement was a nationalist movement that sought to end British colonial rule in Nigeria. The movement gained momentum after World War II and was led by prominent figures such as Nnamdi Azikiwe, Obafemi Awolowo, and Ahmadu Bello. Their efforts culminated in Nigeria gaining independence on October 1, 1960.",
      achievements: [
        "Attainment of independence from British colonial rule on October 1, 1960",
        "Formation of political parties that represented various regional interests",
        "Development of a constitutional framework for an independent Nigeria",
        "Raising political consciousness among Nigerians",
      ],
      legacy:
        "The independence movement laid the foundation for Nigeria as a sovereign nation and established the initial political structures that would shape the country's future. The leaders of this movement are revered as founding fathers of modern Nigeria.",
    },
    {
      id: "pro-democracy",
      name: "Pro-Democracy Movement",
      period: "1980s-1999",
      leaders: ["Wole Soyinka", "Gani Fawehinmi", "Beko Ransome-Kuti", "Ken Saro-Wiwa", "Alao Aka-Bashorun"],
      description:
        "The Pro-Democracy Movement emerged during the military dictatorships of the 1980s and 1990s, particularly during the regimes of Ibrahim Babangida and Sani Abacha. The movement fought against military rule and advocated for democratic governance, human rights, and civil liberties. It included civil society organizations, labor unions, student groups, and pro-democracy activists.",
      achievements: [
        "Resistance against the annulment of the June 12, 1993 presidential election",
        "International pressure on military regimes through advocacy",
        "Eventual transition to civilian rule in 1999",
        "Establishment of democratic institutions and practices",
      ],
      legacy:
        "The pro-democracy movement played a crucial role in ending military rule in Nigeria and establishing the current democratic dispensation known as the Fourth Republic. Many of the principles and values championed by the movement continue to influence Nigerian politics today.",
    },
    {
      id: "endsars",
      name: "EndSARS Movement",
      period: "2017-2020",
      leaders: ["Youth-led, decentralized leadership"],
      description:
        "The EndSARS movement began as a campaign against police brutality, specifically targeting the Special Anti-Robbery Squad (SARS), a unit of the Nigerian Police Force accused of human rights abuses. The movement gained significant momentum in October 2020 when nationwide protests erupted, led primarily by young Nigerians. The protests expanded beyond police brutality to address broader issues of governance, accountability, and youth representation.",
      achievements: [
        "Disbandment of the SARS unit by the federal government",
        "Increased awareness about police brutality and human rights",
        "Establishment of judicial panels to investigate police abuses",
        "Demonstration of youth political engagement and mobilization capacity",
      ],
      legacy:
        "The EndSARS movement represents a significant moment in Nigeria's recent political history, highlighting the power of youth-led activism and social media in driving political change. It has raised important questions about governance, accountability, and the relationship between citizens and the state.",
    },
    {
      id: "bring-back-our-girls",
      name: "Bring Back Our Girls Movement",
      period: "2014-Present",
      leaders: ["Oby Ezekwesili", "Aisha Yesufu", "Hadiza Bala Usman"],
      description:
        "The Bring Back Our Girls movement emerged in response to the abduction of 276 schoolgirls from Chibok, Borno State, by Boko Haram terrorists in April 2014. The movement began as a social media campaign with the hashtag #BringBackOurGirls and evolved into a sustained advocacy effort for the rescue of the kidnapped girls and broader issues of security and education in Nigeria.",
      achievements: [
        "Global awareness about the Chibok girls' abduction and Boko Haram insurgency",
        "Pressure on the Nigerian government to prioritize the rescue of the girls",
        "Recovery of some of the abducted girls through negotiations and military operations",
        "Advocacy for improved security and educational access in northeastern Nigeria",
      ],
      legacy:
        "The Bring Back Our Girls movement demonstrated the power of sustained advocacy and the role of women in leading social movements in Nigeria. It highlighted issues of security, education, and the protection of vulnerable populations in conflict zones.",
    },
    {
      id: "civil-society",
      name: "Civil Society Organizations",
      period: "1980s-Present",
      leaders: ["Various leaders across different organizations"],
      description:
        "Civil Society Organizations (CSOs) have played a crucial role in Nigeria's democratic development. These organizations, including human rights groups, professional associations, labor unions, and community-based organizations, have advocated for good governance, human rights, electoral reform, and social justice. They serve as watchdogs, holding the government accountable and promoting citizen participation in governance.",
      achievements: [
        "Monitoring of elections and advocacy for electoral reforms",
        "Documentation of human rights abuses and advocacy for justice",
        "Public interest litigation to challenge unconstitutional actions",
        "Civic education and promotion of democratic values",
        "Policy advocacy on various social, economic, and political issues",
      ],
      legacy:
        "Civil Society Organizations continue to play a vital role in Nigeria's democracy, serving as a bridge between citizens and the state. They provide platforms for citizen engagement and contribute to policy formulation and implementation across various sectors.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nigerian Democracy Movements</h1>

      <p className="mb-8 text-lg text-center text-gray-400">
        Nigeria's journey to democracy has been shaped by various movements and collective actions. These movements have
        played crucial roles in the country's political evolution, from colonial rule to the present day.
      </p>

      <div className="space-y-8">
        {movements.map((movement) => (
          <Card key={movement.id} className="p-6 ">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-64">
                  <Image
                    src={`/placeholder.svg?height=250&width=250&text=${movement.name}`}
                    alt={movement.name}
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <p>
                    <span className="font-semibold">Period:</span> {movement.period}
                  </p>
                  <p>
                    <span className="font-semibold">Key Leaders:</span>
                  </p>
                  <ul className="list-disc pl-5">
                    {movement.leaders.map((leader, index) => (
                      <li key={index}>{leader}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-[#008751] mb-2">{movement.name}</h2>
                <p className="mb-4">{movement.description}</p>

                <h3 className="font-semibold text-[#008751] mt-4">Key Achievements:</h3>
                <ul className="list-disc pl-5 mt-2 mb-4">
                  {movement.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>

                <h3 className="font-semibold text-[#008751] mt-4">Legacy:</h3>
                <p className="mt-2">{movement.legacy}</p>

                <Link
                  href={`/movements/${movement.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-[#008751] text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

