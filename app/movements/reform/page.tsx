import Link from "next/link"

export const metadata = {
  title: "Reform Movements | Nigeria Elections",
  description: "Learn about Nigeria's political and social reform movements and their impact on governance.",
}

export default function ReformMovementsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Reform Movements in Nigeria</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="mb-4">
            Since Nigeria's return to democracy in 1999, various reform movements have emerged to address governance
            challenges, promote accountability, and advocate for systemic changes. These movements have played crucial
            roles in deepening democracy, fighting corruption, and pushing for better governance across different
            sectors.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Electoral Reform Movement</h2>
          <p className="mb-4">
            Electoral reform has been a central focus of civil society activism in Nigeria, driven by concerns about the
            integrity of elections and the need for a more transparent and credible electoral system.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Key Developments</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Electoral Reform Committee (2007):</strong> Headed by former Chief Justice Mohammed Uwais, this
                committee recommended comprehensive reforms to Nigeria's electoral system, including independent
                candidacy, electronic voting, and the establishment of an Electoral Offences Commission.
              </li>
              <li>
                <strong>Electoral Act Amendments:</strong> Successive amendments to the Electoral Act in 2010, 2015, and
                2022 have introduced reforms such as electronic voter registration, card readers, and electronic
                transmission of results.
              </li>
              <li>
                <strong>#NotTooYoungToRun Movement:</strong> A successful campaign that led to the reduction of age
                requirements for political offices, allowing younger Nigerians to run for elected positions.
              </li>
              <li>
                <strong>Situation Room:</strong> A coalition of civil society organizations that monitors elections,
                advocates for reforms, and promotes electoral integrity.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Impact and Achievements</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Introduction of biometric voter registration and verification</li>
              <li>Implementation of electronic result transmission systems</li>
              <li>Greater transparency in the electoral process</li>
              <li>Increased youth participation in politics</li>
              <li>Stronger legal framework for elections</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Anti-Corruption Movement</h2>
          <p className="mb-4">
            Nigeria's anti-corruption movement has focused on promoting transparency, accountability, and integrity in
            public service and business.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Key Organizations and Initiatives</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Transparency International Nigeria (Civil Society Legislative Advocacy Centre):</strong> The
                Nigerian chapter of Transparency International works to combat corruption through research, advocacy,
                and public education.
              </li>
              <li>
                <strong>BudgIT:</strong> A civic organization that simplifies public budgets and tracks government
                spending to promote fiscal transparency.
              </li>
              <li>
                <strong>Follow The Money:</strong> A grassroots movement that tracks government and international aid
                spending in rural communities.
              </li>
              <li>
                <strong>Say No Campaign:</strong> A coalition advocating against corruption, impunity, and violence in
                Nigeria.
              </li>
              <li>
                <strong>Open Government Partnership (OGP):</strong> Nigeria joined the OGP in 2016, committing to
                specific reforms to promote transparency, accountability, and citizen participation.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Impact and Achievements</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Implementation of the Treasury Single Account to prevent leakages in public finance</li>
              <li>Adoption of open contracting standards in public procurement</li>
              <li>Establishment of beneficial ownership registers for companies</li>
              <li>Greater public awareness about corruption and its effects</li>
              <li>Successful advocacy for the passage of key anti-corruption legislation</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Constitutional Reform Movement</h2>
          <p className="mb-4">
            Since 1999, there have been ongoing efforts to reform Nigeria's constitution to address structural
            imbalances, strengthen federalism, and improve governance.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Key Initiatives</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>National Political Reform Conference (2005):</strong> Convened by President Obasanjo to discuss
                constitutional reforms, though its recommendations were not implemented.
              </li>
              <li>
                <strong>National Conference (2014):</strong> A more comprehensive conference that produced over 600
                recommendations for constitutional and structural reforms.
              </li>
              <li>
                <strong>Constitution Review Committees:</strong> Both chambers of the National Assembly have established
                committees that periodically review the constitution and propose amendments.
              </li>
              <li>
                <strong>Restructuring Advocacy:</strong> Various groups have advocated for fundamental restructuring of
                Nigeria's federal system to grant greater autonomy to states and regions.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Key Reform Proposals</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Devolution of powers from the federal government to states</li>
              <li>Resource control and fiscal federalism</li>
              <li>State police and decentralized security architecture</li>
              <li>Judicial and electoral reforms</li>
              <li>Local government autonomy</li>
              <li>Gender equality and affirmative action</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Economic Reform Movement</h2>
          <p className="mb-4">
            Economic reform movements have advocated for policies to promote sustainable development, reduce poverty,
            and create a more inclusive economy.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Key Areas of Focus</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Subsidy Reform:</strong> Debates around fuel subsidies have been a major focus, with some groups
                advocating for removal and others for retention or reform.
              </li>
              <li>
                <strong>Tax Justice:</strong> Movements advocating for progressive taxation, closing loopholes, and
                ensuring that corporations pay their fair share.
              </li>
              <li>
                <strong>Financial Inclusion:</strong> Initiatives to expand access to banking and financial services for
                underserved populations.
              </li>
              <li>
                <strong>Trade Policy:</strong> Advocacy around Nigeria's trade policies, including the African
                Continental Free Trade Agreement (AfCFTA).
              </li>
              <li>
                <strong>Digital Economy:</strong> Movements promoting digital skills, infrastructure, and policies to
                support Nigeria's growing tech ecosystem.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Notable Economic Reform Initiatives</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Ease of Doing Business reforms to simplify business registration and operations</li>
              <li>Bank Verification Number (BVN) implementation to strengthen financial system integrity</li>
              <li>Treasury Single Account to consolidate government revenues</li>
              <li>Agricultural transformation initiatives to promote food security and rural development</li>
              <li>Power sector reforms to improve electricity generation and distribution</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Social Justice Movements</h2>
          <p className="mb-4">
            Various movements have emerged to address social inequalities, human rights abuses, and specific social
            issues in Nigeria.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Key Movements</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>#EndSARS Movement:</strong> A youth-led protest movement against police brutality, particularly
                the Special Anti-Robbery Squad (SARS), which gained national and international attention in 2020.
              </li>
              <li>
                <strong>Bring Back Our Girls:</strong> A global campaign that emerged after the 2014 abduction of
                schoolgirls from Chibok, advocating for their rescue and highlighting security challenges.
              </li>
              <li>
                <strong>Gender Equality Movement:</strong> Organizations advocating for women's rights, including the
                Gender and Equal Opportunities Bill and efforts to increase women's political representation.
              </li>
              <li>
                <strong>Disability Rights Movement:</strong> Advocacy that led to the passage of the Discrimination
                Against Persons with Disabilities (Prohibition) Act in 2018.
              </li>
              <li>
                <strong>Environmental Justice Movement:</strong> Groups advocating for environmental protection,
                particularly in the Niger Delta region affected by oil pollution.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Future Challenges and Opportunities</h2>
          <p className="mb-4">Nigeria's reform movements face several challenges and opportunities:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Implementation Gap:</strong> Bridging the gap between policy adoption and effective implementation
            </li>
            <li>
              <strong>Digital Mobilization:</strong> Leveraging technology and social media for greater citizen
              engagement and accountability
            </li>
            <li>
              <strong>Coalition Building:</strong> Forming broader coalitions across regional, ethnic, and ideological
              lines
            </li>
            <li>
              <strong>Youth Engagement:</strong> Harnessing the energy and creativity of Nigeria's large youth
              population
            </li>
            <li>
              <strong>International Partnerships:</strong> Building strategic alliances with global movements and
              organizations
            </li>
            <li>
              <strong>Institutional Reform:</strong> Strengthening key institutions to make reforms sustainable beyond
              individual administrations
            </li>
          </ul>
        </section>

        <div className="mt-8 border-t pt-6">
          <Link href="/movements" className="text-green-600 hover:text-green-800 font-medium">
            ← Back to Political Movements
          </Link>
        </div>
      </div>
    </div>
  )
}
