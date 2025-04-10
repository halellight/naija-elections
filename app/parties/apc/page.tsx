import Link from "next/link"

export const metadata = {
  title: "All Progressives Congress (APC) | Nigeria Elections",
  description:
    "Learn about Nigeria's ruling party, the All Progressives Congress (APC), its history, ideology, and leadership.",
}

export default function APCPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">All Progressives Congress (APC)</h1>

      <div className="space-y-6">
        <section>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Party Profile</h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Founded:</strong> February 6, 2013
                  </li>
                  <li>
                    <strong>Ideology:</strong> Progressive, Center-left
                  </li>
                  <li>
                    <strong>Symbol:</strong> Broom
                  </li>
                  <li>
                    <strong>Colors:</strong> Green, White, Blue, and Red
                  </li>
                  <li>
                    <strong>Current National Chairman:</strong> Abdullahi Ganduje
                  </li>
                  <li>
                    <strong>Status:</strong> Ruling party at the federal level
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500">APC Logo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Formation and History</h2>
          <p className="mb-4">
            The All Progressives Congress (APC) was formed on February 6, 2013, through a merger of Nigeria's three
            largest opposition parties and a faction of a fourth:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Action Congress of Nigeria (ACN)</li>
            <li>Congress for Progressive Change (CPC)</li>
            <li>All Nigeria Peoples Party (ANPP)</li>
            <li>A faction of the All Progressives Grand Alliance (APGA)</li>
          </ul>
          <p className="mb-4">
            The merger was unprecedented in Nigerian politics and was driven by the desire to create a strong opposition
            platform capable of challenging the then-ruling People's Democratic Party (PDP), which had held power since
            Nigeria's return to democracy in 1999.
          </p>
          <p className="mb-4">
            Key figures in the formation of the APC included Bola Tinubu (former Lagos State Governor), Muhammadu Buhari
            (former military head of state), Atiku Abubakar (former Vice President), and several sitting governors from
            the merging parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Electoral Success</h2>
          <p className="mb-4">
            The APC achieved a historic victory in the 2015 general elections, with Muhammadu Buhari defeating incumbent
            President Goodluck Jonathan. This marked the first time in Nigeria's history that an opposition party
            defeated a ruling party at the federal level through the ballot box.
          </p>
          <p className="mb-4">Key electoral milestones include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>2015 Elections:</strong> Won the presidency and majority in both the Senate and House of
              Representatives
            </li>
            <li>
              <strong>2019 Elections:</strong> Retained the presidency and parliamentary majority for a second term
            </li>
            <li>
              <strong>2023 Elections:</strong> Won the presidency with Bola Tinubu as candidate, maintaining control of
              the federal government for a third consecutive term
            </li>
          </ul>
          <p className="mb-4">
            The party has also controlled a majority of state governorships since 2015, though the exact number has
            fluctuated due to off-cycle elections and defections.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Ideology and Policy Positions</h2>
          <p className="mb-4">
            The APC identifies as a progressive party with center-left leanings. Its policy positions have included:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Economic Policy:</strong> Focus on infrastructure development, diversification of the economy away
              from oil dependence, and social investment programs
            </li>
            <li>
              <strong>Anti-Corruption:</strong> Strong emphasis on fighting corruption and recovering looted funds
            </li>
            <li>
              <strong>Security:</strong> Commitment to tackling insurgency, banditry, and other security challenges
            </li>
            <li>
              <strong>Social Welfare:</strong> Implementation of social safety net programs like the Social Investment
              Programme, including N-Power, TraderMoni, and school feeding programs
            </li>
            <li>
              <strong>Federalism:</strong> Support for a stronger federal system with some devolution of powers to
              states
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Party Structure</h2>
          <p className="mb-4">
            The APC operates with a hierarchical structure at national, state, local government, and ward levels:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>National Executive Committee (NEC):</strong> The highest decision-making body of the party
            </li>
            <li>
              <strong>National Working Committee (NWC):</strong> Responsible for day-to-day administration of the party
            </li>
            <li>
              <strong>Board of Trustees (BoT):</strong> Advisory body comprising party elders and founding members
            </li>
            <li>
              <strong>State, Local Government, and Ward Executives:</strong> Replicate the national structure at lower
              levels
            </li>
            <li>
              <strong>Progressive Governors' Forum:</strong> Platform for APC governors to coordinate policies and
              positions
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Figures</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-1">Bola Ahmed Tinubu</h3>
              <p>
                Often referred to as the "National Leader" of the APC before becoming President, Tinubu was instrumental
                in the formation of the party and served as Governor of Lagos State from 1999 to 2007. He was elected as
                Nigeria's President in 2023.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Muhammadu Buhari</h3>
              <p>
                Former military head of state who became Nigeria's President under the APC from 2015 to 2023. Buhari was
                the presidential candidate of the CPC before the merger that formed the APC.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Abdullahi Ganduje</h3>
              <p>
                Current National Chairman of the APC and former Governor of Kano State. He succeeded Abdullahi Adamu as
                party chairman in 2023.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Kashim Shettima</h3>
              <p>
                Current Vice President of Nigeria and former Governor of Borno State. He was selected as Tinubu's
                running mate for the 2023 presidential election.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Challenges and Criticisms</h2>
          <p className="mb-4">Despite its electoral successes, the APC has faced several challenges and criticisms:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Internal Conflicts:</strong> The party has experienced factional disputes and power struggles at
              both national and state levels
            </li>
            <li>
              <strong>Policy Implementation:</strong> Critics argue that the party has struggled to fully implement its
              campaign promises, particularly in areas of economic development and security
            </li>
            <li>
              <strong>Ideological Coherence:</strong> As a merger of different political groups, the APC has sometimes
              been criticized for lacking a clear, consistent ideology
            </li>
            <li>
              <strong>Defections:</strong> The party has experienced both gains and losses through political defections,
              raising questions about the commitment of some members to its principles
            </li>
            <li>
              <strong>Governance Challenges:</strong> The APC-led federal government has faced criticism for its
              handling of economic challenges, security issues, and corruption allegations
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Current Status and Future Outlook</h2>
          <p className="mb-4">
            As of 2023, the APC remains Nigeria's ruling party at the federal level, with Bola Tinubu as President. The
            party faces several challenges and opportunities:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Policy Implementation:</strong> The Tinubu administration faces the challenge of implementing its
              "Renewed Hope" agenda amid economic challenges and security concerns
            </li>
            <li>
              <strong>Party Consolidation:</strong> The APC continues to work on strengthening its structures and
              resolving internal conflicts
            </li>
            <li>
              <strong>Opposition Politics:</strong> The party faces a reinvigorated opposition, particularly from the
              PDP and Labour Party
            </li>
            <li>
              <strong>2027 Elections:</strong> The APC will need to maintain unity and demonstrate policy successes to
              position itself for the next general elections
            </li>
          </ul>
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
