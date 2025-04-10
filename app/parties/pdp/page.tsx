import Link from "next/link"

export const metadata = {
  title: "People's Democratic Party (PDP) | Nigeria Elections",
  description: "Learn about Nigeria's People's Democratic Party (PDP), its history, ideology, and leadership.",
}

export default function PDPPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">People's Democratic Party (PDP)</h1>

      <div className="space-y-6">
        <section>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Party Profile</h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Founded:</strong> August 1998
                  </li>
                  <li>
                    <strong>Ideology:</strong> Conservative, Center-right
                  </li>
                  <li>
                    <strong>Symbol:</strong> Umbrella
                  </li>
                  <li>
                    <strong>Colors:</strong> Green, White, and Red
                  </li>
                  <li>
                    <strong>Current National Chairman:</strong> Iliya Damagum (Acting)
                  </li>
                  <li>
                    <strong>Status:</strong> Main opposition party at the federal level
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500">PDP Logo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Formation and History</h2>
          <p className="mb-4">
            The People's Democratic Party (PDP) was formed in 1998 during Nigeria's transition from military to civilian
            rule. It emerged as a broad coalition of political groups and individuals united by the goal of establishing
            democratic governance after years of military dictatorship.
          </p>
          <p className="mb-4">
            The party was officially registered on July 28, 1998, and held its first national convention in August 1998,
            where Chief Solomon Lar was elected as the party's first National Chairman. The PDP positioned itself as a
            center-right party committed to national unity, economic liberalization, and democratic principles.
          </p>
          <p className="mb-4">
            Key founding members included former military leaders, business elites, and politicians from across
            Nigeria's geopolitical zones, including Alex Ekwueme, Atiku Abubakar, Adamu Ciroma, Olusegun Obasanjo, and
            many others who had been active in previous democratic experiments or opposed to military rule.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Electoral History</h2>
          <p className="mb-4">
            The PDP dominated Nigeria's political landscape for 16 consecutive years (1999-2015), winning every
            presidential election during that period:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>1999 Elections:</strong> Olusegun Obasanjo won the presidency, and the party secured majorities in
              both chambers of the National Assembly and most state governorships
            </li>
            <li>
              <strong>2003 Elections:</strong> Obasanjo was re-elected for a second term, and the PDP maintained its
              dominance in the legislature and at the state level
            </li>
            <li>
              <strong>2007 Elections:</strong> Umaru Musa Yar'Adua was elected president, continuing the PDP's hold on
              power despite widespread allegations of electoral irregularities
            </li>
            <li>
              <strong>2011 Elections:</strong> Goodluck Jonathan, who had succeeded Yar'Adua following his death in
              office, won election in his own right
            </li>
            <li>
              <strong>2015 Elections:</strong> The PDP lost the presidency to the All Progressives Congress (APC)
              candidate, Muhammadu Buhari, marking the first time an incumbent president was defeated in Nigeria
            </li>
            <li>
              <strong>2019 and 2023 Elections:</strong> The party remained in opposition, with its candidates Atiku
              Abubakar and later Atiku Abubakar again losing to the APC
            </li>
          </ul>
          <p className="mb-4">
            Despite losing federal power, the PDP has maintained a significant presence in Nigerian politics,
            controlling several state governments and forming a substantial opposition bloc in the National Assembly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Ideology and Policy Positions</h2>
          <p className="mb-4">
            The PDP identifies as a center-right, conservative party. Its policy positions have generally included:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Economic Policy:</strong> Emphasis on free-market principles, privatization of state-owned
              enterprises, and economic liberalization
            </li>
            <li>
              <strong>Governance:</strong> Support for federalism and decentralization of power, though critics argue
              the party centralized power during its time in office
            </li>
            <li>
              <strong>Foreign Policy:</strong> Promotion of regional integration and international cooperation,
              particularly during the Obasanjo administration
            </li>
            <li>
              <strong>Social Policy:</strong> Generally conservative on social issues, with strong ties to traditional
              and religious institutions
            </li>
            <li>
              <strong>National Unity:</strong> Emphasis on maintaining Nigeria's unity while accommodating its diversity
              through the informal "zoning" system for rotating power between regions
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Major Achievements</h2>
          <p className="mb-4">During its 16 years in power, the PDP administration recorded several achievements:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Debt Relief:</strong> Secured $18 billion debt relief from the Paris Club in 2005-2006, reducing
              Nigeria's external debt burden
            </li>
            <li>
              <strong>Telecommunications Revolution:</strong> Liberalized the telecommunications sector, leading to
              massive growth in mobile phone access
            </li>
            <li>
              <strong>Banking Reforms:</strong> Implemented banking consolidation that strengthened Nigeria's financial
              sector
            </li>
            <li>
              <strong>Economic Growth:</strong> Presided over periods of significant economic growth, particularly in
              the non-oil sectors
            </li>
            <li>
              <strong>Democratic Stability:</strong> Maintained civilian rule for 16 consecutive years, the longest in
              Nigeria's post-independence history
            </li>
            <li>
              <strong>Niger Delta Amnesty Program:</strong> Implemented the amnesty program that significantly reduced
              militancy in the oil-producing region
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Challenges and Criticisms</h2>
          <p className="mb-4">The PDP has faced numerous challenges and criticisms over the years:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Corruption:</strong> Widespread allegations of corruption during its time in power, with several
              high-profile scandals
            </li>
            <li>
              <strong>Electoral Malpractices:</strong> Accusations of rigging and manipulation of elections,
              particularly in 2003 and 2007
            </li>
            <li>
              <strong>Internal Democracy:</strong> Struggles with internal party democracy and imposition of candidates
            </li>
            <li>
              <strong>Policy Implementation:</strong> Criticism for failing to translate economic growth into meaningful
              poverty reduction and infrastructure development
            </li>
            <li>
              <strong>Security Challenges:</strong> The emergence and growth of Boko Haram during its tenure, along with
              other security challenges
            </li>
            <li>
              <strong>Factional Disputes:</strong> Experienced several internal crises, including a major split in 2013
              when seven governors and other leaders formed the "New PDP" faction, which later joined the APC
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Figures</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-1">Olusegun Obasanjo</h3>
              <p>
                Former military head of state who became Nigeria's first PDP president (1999-2007). His administration
                focused on economic reforms, anti-corruption efforts, and improving Nigeria's international standing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Umaru Musa Yar'Adua</h3>
              <p>
                Former governor of Katsina State who served as president from 2007 until his death in 2010. His brief
                presidency was marked by his "Seven-Point Agenda" and emphasis on the rule of law.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Goodluck Jonathan</h3>
              <p>
                Vice President who succeeded Yar'Adua and later won election in 2011. His administration focused on
                economic growth, electoral reforms, and education. He conceded defeat in the 2015 election, setting a
                precedent for peaceful transitions of power.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Atiku Abubakar</h3>
              <p>
                Vice President under Obasanjo (1999-2007) and multiple-time presidential candidate. He has been a
                central figure in the party despite temporarily leaving to join the APC before returning to the PDP.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Iliya Damagum</h3>
              <p>
                Current Acting National Chairman of the PDP, who took over after the suspension of Iyorchia Ayu amid
                internal party crises.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Current Status and Future Outlook</h2>
          <p className="mb-4">
            As of 2023, the PDP remains Nigeria's main opposition party at the federal level, though it controls several
            state governments. The party faces several challenges and opportunities:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Internal Reconciliation:</strong> Working to resolve internal conflicts, particularly following
              the 2023 election and the G5 crisis involving five governors who opposed the party's presidential
              candidate
            </li>
            <li>
              <strong>Opposition Politics:</strong> Developing effective strategies to hold the ruling APC accountable
              and present itself as a viable alternative
            </li>
            <li>
              <strong>Electoral Strategy:</strong> Rebuilding its support base and addressing the challenge posed by
              emerging parties like the Labour Party
            </li>
            <li>
              <strong>Ideological Clarity:</strong> Articulating a clear, consistent ideology and policy platform that
              resonates with Nigerian voters
            </li>
            <li>
              <strong>Leadership Transition:</strong> Managing generational transition within the party leadership
            </li>
            <li>
              <strong>2027 Elections:</strong> Preparing for the next general elections with the aim of returning to
              power at the federal level
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
