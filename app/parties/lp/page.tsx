import Link from "next/link"

export const metadata = {
  title: "Labour Party | Nigeria Elections",
  description:
    "Learn about Nigeria's Labour Party, its history, ideology, and recent rise to prominence in Nigerian politics.",
}

export default function LabourPartyPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Labour Party</h1>

      <div className="space-y-6">
        <section>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Party Profile</h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Founded:</strong> 2002 (as Party for Social Democracy)
                  </li>
                  <li>
                    <strong>Renamed:</strong> Labour Party in 2004
                  </li>
                  <li>
                    <strong>Ideology:</strong> Social democracy, Progressive
                  </li>
                  <li>
                    <strong>Symbol:</strong> Father, Mother, and Child (Family)
                  </li>
                  <li>
                    <strong>Colors:</strong> Red, Green, and White
                  </li>
                  <li>
                    <strong>Current National Chairman:</strong> Julius Abure
                  </li>
                  <li>
                    <strong>Status:</strong> Third major party in Nigerian politics
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500">Labour Party Logo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Formation and History</h2>
          <p className="mb-4">
            The Labour Party was originally founded in 2002 as the Party for Social Democracy (PSD). In 2004, it was
            renamed the Labour Party when the Nigerian Labour Congress (NLC) decided to establish a political platform
            to represent the interests of workers and ordinary citizens.
          </p>
          <p className="mb-4">
            The party was conceived as a political alternative to the dominant parties, with a focus on social justice,
            workers' rights, and progressive policies. It was inspired by labour parties in other countries,
            particularly the British Labour Party, though it has developed its own distinct identity within the Nigerian
            context.
          </p>
          <p className="mb-4">
            For much of its history, the Labour Party remained a minor political force in Nigeria, with limited
            electoral success primarily at the local and state levels. However, the party gained significant national
            prominence during the 2023 election cycle when Peter Obi, a former governor of Anambra State, became its
            presidential candidate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Electoral History</h2>
          <p className="mb-4">The Labour Party's electoral performance has evolved over time:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>2007 Elections:</strong> The party's first major electoral outing, with limited success nationally
            </li>
            <li>
              <strong>2007-2015:</strong> Notable success in Ondo State, where Olusegun Mimiko was elected governor on
              the Labour Party platform in 2007 and re-elected in 2012
            </li>
            <li>
              <strong>2015-2019:</strong> Period of relative electoral decline as the party struggled to maintain
              relevance in a political landscape dominated by the APC and PDP
            </li>
            <li>
              <strong>2023 Elections:</strong> Dramatic rise to prominence with Peter Obi as presidential candidate,
              securing over 6 million votes and winning in several states, including Lagos, the nation's commercial
              capital
            </li>
          </ul>
          <p className="mb-4">
            The 2023 election marked a watershed moment for the Labour Party, as it emerged as a significant third force
            in Nigerian politics, particularly appealing to urban voters, youth, and those seeking an alternative to the
            two dominant parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Ideology and Policy Positions</h2>
          <p className="mb-4">
            The Labour Party identifies as a social democratic party with progressive values. Its policy positions
            include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Economic Policy:</strong> Advocacy for a mixed economy that balances market forces with state
              intervention to ensure equitable distribution of resources
            </li>
            <li>
              <strong>Labor Rights:</strong> Strong support for workers' rights, fair wages, and improved working
              conditions
            </li>
            <li>
              <strong>Social Welfare:</strong> Commitment to expanded social safety nets, healthcare access, and
              education for all Nigerians
            </li>
            <li>
              <strong>Governance:</strong> Emphasis on transparency, accountability, and reduction of government waste
              and corruption
            </li>
            <li>
              <strong>Production-Centered Economy:</strong> Under Peter Obi's leadership, the party has advocated for
              shifting from consumption to production, with emphasis on manufacturing, agriculture, and exports
            </li>
            <li>
              <strong>Youth Empowerment:</strong> Focus on policies that address youth unemployment, education, and
              inclusion in governance
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">The "Obidient" Movement</h2>
          <p className="mb-4">
            The 2023 election cycle saw the emergence of the "Obidient" movement, a grassroots phenomenon centered
            around Peter Obi's presidential candidacy:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Youth-Led:</strong> The movement was predominantly driven by young Nigerians, many participating
              in politics for the first time
            </li>
            <li>
              <strong>Social Media Mobilization:</strong> Extensive use of social media platforms for organizing,
              fundraising, and voter education
            </li>
            <li>
              <strong>Decentralized Structure:</strong> Operated largely through volunteer networks rather than
              traditional party structures
            </li>
            <li>
              <strong>Urban Concentration:</strong> Particularly strong in urban centers and among educated,
              middle-class voters
            </li>
            <li>
              <strong>Issue-Based Campaign:</strong> Focused on governance issues, economic policy, and anti-corruption
              rather than identity politics
            </li>
          </ul>
          <p className="mb-4">
            The "Obidient" movement transformed the Labour Party from a minor political player to a significant force in
            Nigerian politics, though questions remain about its sustainability beyond Peter Obi's candidacy and its
            ability to build lasting party structures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Figures</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-1">Peter Obi</h3>
              <p>
                Former Governor of Anambra State (2006-2014) who became the Labour Party's presidential candidate in
                2023 after leaving the PDP. His campaign, focused on fiscal responsibility, anti-corruption, and
                economic transformation, resonated particularly with young and urban voters.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Julius Abure</h3>
              <p>
                Current National Chairman of the Labour Party, who has led the party through its period of significant
                growth and electoral success in 2023.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Datti Baba-Ahmed</h3>
              <p>
                Economist, businessman, and former Senator who was Peter Obi's running mate in the 2023 presidential
                election. He is the founder of Baze University in Abuja.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Olusegun Mimiko</h3>
              <p>
                Former Governor of Ondo State (2009-2017) who was elected on the Labour Party platform, representing one
                of the party's earliest major electoral successes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Pat Utomi</h3>
              <p>
                Economist, professor, and entrepreneur who has been associated with the party and has been instrumental
                in shaping its economic policies and intellectual foundation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Challenges and Criticisms</h2>
          <p className="mb-4">Despite its recent rise, the Labour Party faces several challenges:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Party Structure:</strong> Relatively weak organizational structure and presence across the
              country, particularly in rural areas
            </li>
            <li>
              <strong>Internal Democracy:</strong> Tensions and leadership disputes that have sometimes led to factional
              conflicts
            </li>
            <li>
              <strong>Ideological Clarity:</strong> Questions about the party's ideological coherence, particularly as
              it has attracted members from various political backgrounds
            </li>
            <li>
              <strong>Personality-Centered Politics:</strong> Heavy reliance on Peter Obi's personal popularity rather
              than institutional strength
            </li>
            <li>
              <strong>Financial Resources:</strong> Limited financial resources compared to the two dominant parties
            </li>
            <li>
              <strong>Electoral Infrastructure:</strong> Challenges in fielding candidates and maintaining party agents
              across all electoral wards
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Current Status and Future Outlook</h2>
          <p className="mb-4">
            As of 2023, the Labour Party has established itself as a significant third force in Nigerian politics,
            particularly following its performance in the presidential election. The party's future prospects include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Party Building:</strong> Efforts to strengthen party structures across the country, particularly
              in areas where it performed well in 2023
            </li>
            <li>
              <strong>Legislative Presence:</strong> Working to leverage its elected representatives in the National
              Assembly and state legislatures to influence policy
            </li>
            <li>
              <strong>Coalition Building:</strong> Potential alliances with other opposition forces to present a
              stronger challenge to the ruling party
            </li>
            <li>
              <strong>Youth Engagement:</strong> Continuing to harness the energy of young voters who formed the core of
              the "Obidient" movement
            </li>
            <li>
              <strong>Policy Development:</strong> Refining and articulating clear policy alternatives on key issues
              facing Nigeria
            </li>
            <li>
              <strong>2027 Strategy:</strong> Preparing for the next electoral cycle with the aim of building on the
              momentum generated in 2023
            </li>
          </ul>
          <p className="mb-4">
            The Labour Party's ability to sustain and build upon its 2023 breakthrough will depend on how effectively it
            addresses these challenges and opportunities in the coming years.
          </p>
        </section>

        <div className="mt-8 border-t pt-6">
          <Link href="/parties" className="text-green-600 hover:text-green-800 font-medium">
            ← Back to Political Parties
          </Link>
        </div>
      </div>
    </div>
  )
}
