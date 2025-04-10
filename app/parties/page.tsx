import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function PoliticalPartiesPage() {
  const parties = [
    {
      id: "apc",
      name: "All Progressives Congress (APC)",
      founded: "2013",
      ideology: "Progressive, Center-left",
      chairperson: "Abdullahi Ganduje",
      description:
        "The All Progressives Congress (APC) was formed in February 2013 as a merger of Nigeria's three biggest opposition parties – the Action Congress of Nigeria (ACN), the Congress for Progressive Change (CPC), the All Nigeria Peoples Party (ANPP), and a faction of the All Progressives Grand Alliance (APGA). The party has been in power at the federal level since 2015 when Muhammadu Buhari won the presidential election.",
      keyFigures: ["Bola Ahmed Tinubu", "Muhammadu Buhari", "Abdullahi Ganduje", "Kashim Shettima"],
      electoralHistory:
        "The APC won the 2015 and 2019 presidential elections with Muhammadu Buhari as its candidate, and the 2023 presidential election with Bola Ahmed Tinubu as its candidate. The party currently controls the presidency and has a majority in both the Senate and House of Representatives.",
    },
    {
      id: "pdp",
      name: "People's Democratic Party (PDP)",
      founded: "1998",
      ideology: "Conservative, Center-right",
      chairperson: "Umar Damagum (Acting)",
      description:
        "The People's Democratic Party (PDP) was formed in 1998 following the death of military dictator Sani Abacha. The party ruled Nigeria from 1999 to 2015, winning four consecutive presidential elections. The PDP presents itself as a center-right party that favors free-market policies with limited government regulation.",
      keyFigures: ["Atiku Abubakar", "Goodluck Jonathan", "Olusegun Obasanjo", "Umar Damagum"],
      electoralHistory:
        "The PDP won every presidential election from 1999 to 2011, with Olusegun Obasanjo (1999, 2003), Umaru Musa Yar'Adua (2007), and Goodluck Jonathan (2011) as its candidates. The party lost power in 2015 and has remained in opposition since then.",
    },
    {
      id: "lp",
      name: "Labour Party (LP)",
      founded: "2002",
      ideology: "Social democracy, Progressive",
      chairperson: "Julius Abure",
      description:
        "The Labour Party was established in 2002 as the Party for Social Democracy (PSD) before changing its name to Labour Party in 2004. The party gained significant prominence during the 2023 general elections when Peter Obi, a former governor of Anambra State, ran as its presidential candidate and garnered substantial support, particularly among young voters.",
      keyFigures: ["Peter Obi", "Julius Abure", "Datti Baba-Ahmed"],
      electoralHistory:
        "The Labour Party experienced a surge in popularity during the 2023 presidential election with Peter Obi as its candidate. While it did not win the presidency, the party secured several seats in both the Senate and House of Representatives, establishing itself as a significant political force in Nigeria.",
    },
    {
      id: "others",
      name: "New Nigeria People's Party (NNPP)",
      founded: "2021",
      ideology: "Populist, Reformist",
      chairperson: "Ajuji Ahmed",
      description:
        "The New Nigeria People's Party (NNPP) was registered in 2021 and gained prominence when former Kano State Governor Rabiu Kwankwaso joined the party as its presidential candidate for the 2023 elections. The party advocates for political reforms and presents itself as an alternative to the two dominant parties.",
      keyFigures: ["Rabiu Kwankwaso", "Ajuji Ahmed"],
      electoralHistory:
        "The NNPP participated in its first presidential election in 2023 with Rabiu Kwankwaso as its candidate. While it did not win the presidency, the party secured some seats in the National Assembly and has a strong presence in Kano State.",
    },
    {
      id: "others",
      name: "All Progressives Grand Alliance (APGA)",
      founded: "2003",
      ideology: "Progressive, Regionalist",
      chairperson: "Victor Oye",
      description:
        "The All Progressives Grand Alliance (APGA) was formed in 2003 and has been most successful in Anambra State, where it has held the governorship since 2006. The party was initially associated with Igbo interests but has attempted to broaden its appeal across Nigeria.",
      keyFigures: ["Peter Obi (former member)", "Willie Obiano", "Charles Soludo", "Victor Oye"],
      electoralHistory:
        "APGA has maintained control of Anambra State since 2006, with Peter Obi, Willie Obiano, and Charles Soludo serving as governors. The party has also won some seats in the National Assembly but has not been competitive in presidential elections.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nigerian Political Parties</h1>

      <p className="mb-8 text-lg text-center text-gray-400">
        Nigeria's political landscape is shaped by a variety of parties, each with its own ideology and history.
        Nigeria operates a multi-party system with several registered political parties. Below are the major political
        parties that have significant influence on Nigeria's political landscape.
      </p>

      <div className="space-y-8">
        {parties.map((party) => (
          <Card key={party.id} className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/4">
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=${party.name}`}
                    alt={party.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <p>
                    <span className="font-semibold">Founded:</span> {party.founded}
                  </p>
                  <p>
                    <span className="font-semibold">Ideology:</span> {party.ideology}
                  </p>
                  <p>
                    <span className="font-semibold">Chairperson:</span> {party.chairperson}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-3/4">
                <h2 className="text-2xl font-bold text-[#008751] mb-2">{party.name}</h2>
                <p className="mb-4">{party.description}</p>

                <h3 className="font-semibold text-[#008751] mt-4">Key Figures:</h3>
                <ul className="list-disc pl-5 mt-2 mb-4">
                  {party.keyFigures.map((figure, index) => (
                    <li key={index}>{figure}</li>
                  ))}
                </ul>

                <h3 className="font-semibold text-[#008751] mt-4">Electoral History:</h3>
                <p className="mt-2">{party.electoralHistory}</p>

                <Link
                  href={`/parties/${party.id}`}
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

