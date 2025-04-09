import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function ProDemocracyMovementPage() {
  const movementInfo = {
    name: "Pro-Democracy Movement",
    period: "1980s-1999",
    background:
      "The Pro-Democracy Movement in Nigeria emerged during the military dictatorships of the 1980s and 1990s, particularly during the regimes of Ibrahim Babangida (1985-1993) and Sani Abacha (1993-1998). The movement was a response to the authoritarian rule, human rights abuses, and the suppression of democratic aspirations by these military regimes. It gained significant momentum following the annulment of the June 12, 1993 presidential election, which was widely believed to have been won by business tycoon M.K.O. Abiola.",

    keyEvents: [
      {
        year: "1993",
        event: "Annulment of June 12 Presidential Election",
        description:
          "General Ibrahim Babangida annulled the presidential election of June 12, 1993, widely considered to be the freest and fairest election in Nigeria's history. This action sparked widespread protests and civil disobedience across the country.",
      },
      {
        year: "1994",
        event: "Formation of NADECO",
        description:
          "The National Democratic Coalition (NADECO) was formed as a pro-democracy group to campaign for the restoration of democracy and the validation of the June 12 election results.",
      },
      {
        year: "1994-1995",
        event: "General Strikes and Protests",
        description:
          "Labor unions, led by the Nigeria Labour Congress (NLC) and the Petroleum and Natural Gas Senior Staff Association of Nigeria (PENGASSAN), organized strikes that paralyzed the economy, particularly the oil sector.",
      },
      {
        year: "1995",
        event: "Execution of Ken Saro-Wiwa and the Ogoni Nine",
        description:
          "Environmental activist Ken Saro-Wiwa and eight other Ogoni activists were executed by the Abacha regime, leading to international condemnation and Nigeria's suspension from the Commonwealth.",
      },
      {
        year: "1998",
        event: "Death of Sani Abacha",
        description:
          "The sudden death of General Sani Abacha in June 1998 paved the way for a transition to civilian rule under General Abdulsalami Abubakar.",
      },
      {
        year: "1999",
        event: "Return to Civilian Rule",
        description:
          "Nigeria returned to civilian rule with the election of Olusegun Obasanjo as president, marking the beginning of the Fourth Republic.",
      },
    ],

    keyFigures: [
      {
        name: "Wole Soyinka",
        role: "Nobel Laureate and Activist",
        contribution:
          "Used his international profile to draw attention to human rights abuses in Nigeria and advocated for democratic governance. He was forced into exile during the Abacha regime.",
      },
      {
        name: "Gani Fawehinmi",
        role: "Human Rights Lawyer",
        contribution:
          "Filed numerous lawsuits challenging the military government's actions and defended pro-democracy activists. He was repeatedly detained and harassed by the military regimes.",
      },
      {
        name: "Beko Ransome-Kuti",
        role: "Medical Doctor and Activist",
        contribution:
          "Co-founded the Campaign for Democracy (CD) and the Committee for the Defense of Human Rights (CDHR). He was imprisoned multiple times for his activism.",
      },
      {
        name: "Ken Saro-Wiwa",
        role: "Environmental Activist",
        contribution:
          "Led the Movement for the Survival of the Ogoni People (MOSOP) against environmental degradation in the Niger Delta. He was executed by the Abacha regime in 1995.",
      },
      {
        name: "Kudirat Abiola",
        role: "Pro-Democracy Activist",
        contribution:
          "Advocated for the validation of her husband M.K.O. Abiola's election victory and the restoration of democracy. She was assassinated in 1996, allegedly on the orders of the Abacha regime.",
      },
    ],

    organizations: [
      {
        name: "National Democratic Coalition (NADECO)",
        description:
          "A coalition of pro-democracy groups formed in 1994 to campaign for the restoration of democracy and the validation of the June 12 election results.",
      },
      {
        name: "Campaign for Democracy (CD)",
        description:
          "A civil society organization that organized protests, strikes, and civil disobedience against military rule.",
      },
      {
        name: "Committee for the Defense of Human Rights (CDHR)",
        description:
          "A human rights organization that documented human rights abuses and advocated for democratic governance.",
      },
      {
        name: "Civil Liberties Organization (CLO)",
        description:
          "A human rights organization that provided legal assistance to victims of human rights abuses and advocated for civil liberties.",
      },
      {
        name: "Movement for the Survival of the Ogoni People (MOSOP)",
        description:
          "An environmental and human rights organization that campaigned against environmental degradation in Ogoniland and for the rights of the Ogoni people.",
      },
    ],

    tactics: [
      "Mass protests and demonstrations in major cities across Nigeria",
      "Civil disobedience campaigns, including stay-at-home orders and boycotts",
      "General strikes organized by labor unions to paralyze the economy",
      "International advocacy to pressure the military regime through sanctions and diplomatic isolation",
      "Underground publications and radio broadcasts to counter government propaganda",
      "Legal challenges to military decrees and human rights abuses",
      "Formation of coalitions and alliances among various pro-democracy groups",
    ],

    legacy:
      "The Pro-Democracy Movement played a crucial role in ending military rule in Nigeria and establishing the current democratic dispensation known as the Fourth Republic. The movement's sacrifices and struggles helped to instill democratic values and a culture of civic engagement in Nigerian society. Many of the activists who were part of the movement later became political leaders, civil servants, and civil society leaders in the Fourth Republic. The movement also highlighted the importance of civil society organizations in promoting democracy and human rights. However, some critics argue that the democratic transition of 1999 did not fully address the structural issues that enabled military rule, and that the Fourth Republic has not fully realized the democratic aspirations of the pro-democracy movement.",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/movements" className="text-[#008751] hover:underline flex items-center gap-2">
          ← Back to Democracy Movements
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-1/3">
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-64 border-2 border-[#008751]">
            <Image
              src="/placeholder.svg?height=250&width=250&text=Pro-Democracy+Movement"
              alt="Pro-Democracy Movement"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          <Card className="mt-6 p-6 border-2 border-[#008751]">
            <h3 className="font-bold text-lg mb-4 text-[#008751]">Movement Information</h3>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Name:</span> {movementInfo.name}
              </p>
              <p>
                <span className="font-semibold">Period:</span> {movementInfo.period}
              </p>
              <p>
                <span className="font-semibold">Focus:</span> Restoration of democracy and end of military rule
              </p>
              <p>
                <span className="font-semibold">Key Demand:</span> Validation of June 12, 1993 election results
              </p>
            </div>
          </Card>

          <Card className="mt-6 p-6 border-2 border-[#008751]">
            <h3 className="font-bold text-lg mb-4 text-[#008751]">Tactics and Strategies</h3>
            <ul className="list-disc pl-5 space-y-2">
              {movementInfo.tactics.map((tactic, index) => (
                <li key={index}>{tactic}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-6 text-[#008751]">{movementInfo.name}</h1>

          <Card className="p-6 mb-8 border-2 border-[#008751]">
            <h2 className="text-xl font-bold mb-4 text-[#008751]">Background</h2>
            <p>{movementInfo.background}</p>
          </Card>

          <Card className="p-6 mb-8 border-2 border-[#008751]">
            <h2 className="text-xl font-bold mb-4 text-[#008751]">Key Events</h2>
            <div className="space-y-4">
              {movementInfo.keyEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-[#008751] pl-4">
                  <h3 className="font-semibold text-lg">
                    {event.year}: {event.event}
                  </h3>
                  <p>{event.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 mb-8 border-2 border-[#008751]">
            <h2 className="text-xl font-bold mb-4 text-[#008751]">Key Figures</h2>
            <div className="space-y-4">
              {movementInfo.keyFigures.map((figure, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4 pb-4 border-b last:border-b-0">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <span className="text-gray-500">Photo</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{figure.name}</h3>
                    <p className="text-[#008751] font-medium">{figure.role}</p>
                    <p className="mt-2">{figure.contribution}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 mb-8 border-2 border-[#008751]">
            <h2 className="text-xl font-bold mb-4 text-[#008751]">Key Organizations</h2>
            <div className="space-y-4">
              {movementInfo.organizations.map((org, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{org.name}</h3>
                  <p>{org.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-2 border-[#008751]">
            <h2 className="text-xl font-bold mb-4 text-[#008751]">Legacy</h2>
            <p>{movementInfo.legacy}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}

