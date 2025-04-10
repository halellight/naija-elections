import Link from "next/link"

export default function ElectoralSystemPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-ng-black text-center">Nigerian Electoral System</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
          <p>Nigeria operates a democratic electoral system based on <strong>universal adult suffrage</strong>, where citizens aged 18 and above have the right to vote. The country uses a 
                <strong> first-past-the-post (FPTP)</strong> system for most elections, such as 
                <em> gubernatorial</em> and <em> National Assembly</em> elections, where the candidate with the highest number of votes wins, regardless of whether they secure an absolute majority.
            </p>

            <p>
                However, for <strong>presidential elections</strong>, Nigeria follows a 
                <strong> modified two-round system</strong>.
            </p>
                <p className="mt-4 mb-4">
                To win in the first round, a candidate must:
                </p>
            <ol className="list-decimal font-semibold mt-4 mb-4 pl-6">
                <li>Receive the highest number of votes nationwide, and</li>
                <li>Secure at least 25% of the votes in at least two-thirds of Nigeria’s 36 states and the Federal Capital Territory (FCT).</li>
            </ol>

            <p>
                If no candidate meets these requirements, a <strong>run-off election</strong> is held between the two leading candidates.
            </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">The Independent National Electoral Commission (INEC)</h2>
          <p>
            The Independent National Electoral Commission (INEC) is the constitutional body responsible for organizing and conducting elections in Nigeria. Established in 1998, INEC's responsibilities include:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Organizing and conducting all elections for federal, state, and local government positions</li>
            <li>Registering political parties and monitoring their operations</li>
            <li>Maintaining the national voter register</li>
            <li>Delimiting electoral constituencies</li>
            <li>Conducting voter education and promoting civic awareness</li>
            <li>Announcing election results</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Electoral Process</h2>
          <p>
            Nigeria's electoral process involves several stages:
          </p>
          <ol className="list-decimal pl-6 my-4">
            <li><strong>Voter Registration:</strong> Eligible citizens register with INEC to obtain a Permanent Voter's Card (PVC).</li>
            <li><strong>Party Primaries:</strong> Political parties conduct internal elections to select their candidates.</li>
            <li><strong>Campaign Period:</strong> Candidates and parties campaign to gain voter support.</li>
            <li><strong>Election Day:</strong> Voters cast their ballots at designated polling units.</li>
            <li><strong>Vote Counting and Collation:</strong> Votes are counted at polling units and results are collated at ward, local government, state, and national levels.</li>
            <li><strong>Declaration of Results:</strong> INEC announces the official results.</li>
          </ol>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Elections</h2>
          <p>
            Nigeria conducts several types of elections:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li><strong>Presidential Elections:</strong> Held every four years to elect the President and Vice President.</li>
            <li><strong>National Assembly Elections:</strong> To elect members of the Senate and House of Representatives.</li>
            <li><strong>Gubernatorial Elections:</strong> To elect state governors and deputy governors.</li>
            <li><strong>State House of Assembly Elections:</strong> To elect members of state legislatures.</li>
            <li><strong>Local Government Elections:</strong> To elect local government chairpersons and councilors.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Electoral Reforms</h2>
          <p>
            Nigeria has implemented several electoral reforms to improve the credibility and transparency of its elections:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li><strong>Electoral Act 2022:</strong> Introduced electronic transmission of results, early release of election funds to INEC, and restrictions on political appointees participating in primaries.</li>
            <li><strong>Biometric Voter Registration:</strong> Introduction of biometric data collection to prevent multiple registrations.</li>
            <li><strong>Smart Card Readers:</strong> Used to authenticate voter cards and prevent fraud.</li>
            <li><strong>INEC Result Viewing Portal (IReV):</strong> Allows for real-time viewing of polling unit results.</li>
            <li><strong>Bimodal Voter Accreditation System (BVAS):</strong> Introduced to improve voter authentication using fingerprints and facial recognition.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Challenges</h2>
          <p>
            Despite reforms, Nigeria's electoral system still faces several challenges:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Electoral violence and intimidation</li>
            <li>Vote buying and selling</li>
            <li>Logistical challenges in remote areas</li>
            <li>Technical failures of electronic systems</li>
            <li>Delayed judicial resolution of electoral disputes</li>
            <li>Low voter turnout</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Future Directions</h2>
          <p>
            Future electoral reforms in Nigeria may focus on:
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Full electronic voting</li>
            <li>Diaspora voting for Nigerians abroad</li>
            <li>Strengthening the independence of INEC</li>
            <li>Improving the speed and efficiency of electoral tribunals</li>
            <li>Enhancing civic education and voter participation</li>
          </ul>

          <div className="mt-8 border-t pt-6">
            <Link href="/learn" className="text-green-600 hover:text-green-800 font-medium">
                ← Back to Political Guides
            </Link>
          </div>
        </div>
      </div>
    );
  }