import Link from 'next/link';

export default function Constitution() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">The Nigerian Constitution</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Historical Background</h2>
          <p className="mb-4">
            Nigeria has operated under several constitutions since independence in 1960:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Independence Constitution (1960):</strong> Established a parliamentary system of government with the Queen of England as the head of state</li>
            <li><strong>Republican Constitution (1963):</strong> Replaced the monarchy with a Nigerian president as head of state</li>
            <li><strong>1979 Constitution:</strong> Introduced a presidential system of government after years of military rule</li>
            <li><strong>1999 Constitution:</strong> Current constitution, established after the transition from military to civilian rule</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">The 1999 Constitution</h2>
          <p className="mb-4">
            The 1999 Constitution was promulgated by the military government of General Abdulsalami Abubakar and came into effect on May 29, 1999, marking Nigeria's return to democratic rule. It draws heavily from the 1979 Constitution and was designed to establish a federal republic with powers shared between the federal, state, and local governments.
          </p>
          <p className="mb-4">
            The constitution has undergone several amendments (in 2010, 2011, and most recently in 2023) to address various issues and improve governance.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Provisions</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">System of Government</h3>
            <p>
              The Constitution establishes a presidential system of government with three branches:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Executive:</strong> Led by the President, who serves as both head of state and head of government</li>
              <li><strong>Legislature:</strong> Bicameral National Assembly consisting of the Senate and House of Representatives</li>
              <li><strong>Judiciary:</strong> Supreme Court, Court of Appeal, Federal High Court, and other courts</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Fundamental Human Rights</h3>
            <p className="mb-2">
              Chapter IV of the Constitution guarantees fundamental rights to all Nigerians, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Right to life</li>
              <li>Right to dignity of the human person</li>
              <li>Right to personal liberty</li>
              <li>Right to fair hearing</li>
              <li>Right to freedom of thought, conscience, and religion</li>
              <li>Right to freedom of expression</li>
              <li>Right to peaceful assembly and association</li>
              <li>Right to freedom from discrimination</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Federal Character</h3>
            <p>
              The Constitution establishes the principle of "federal character," which requires that national institutions reflect Nigeria's diverse ethnic, religious, and geographic composition to promote national unity and prevent domination by any one group.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Legislative Powers</h3>
            <p className="mb-2">
              The Constitution divides legislative powers between the federal and state governments:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Exclusive Legislative List:</strong> Contains 68 items on which only the National Assembly can legislate (e.g., defense, currency, foreign affairs)</li>
              <li><strong>Concurrent Legislative List:</strong> Items on which both federal and state governments can legislate (e.g., education, agriculture, health)</li>
              <li>Areas not specified in either list are generally reserved for state legislation</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">Constitutional Amendments</h2>
          <p className="mb-4">
            The Constitution can be amended through a process requiring:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Approval by at least two-thirds majority of members in both chambers of the National Assembly</li>
            <li>Approval by at least two-thirds of all State Houses of Assembly</li>
          </ul>
          <p className="mb-4">
            Major amendments since 1999 include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>First Amendment (2010):</strong> Changed the timeframe for conducting elections and resolved issues related to when the President can hand over power to the Vice President</li>
            <li><strong>Second Amendment (2010):</strong> Granted financial autonomy to the National Assembly and State Houses of Assembly</li>
            <li><strong>Third Amendment (2010):</strong> Adjusted the timeframe for the conduct of elections by INEC</li>
            <li><strong>Fourth Amendment (2017):</strong> Included provisions for independent candidates, financial autonomy for local governments, and reduced age requirements for political offices (Not Assent To)</li>
            <li><strong>Fifth Amendment (2023):</strong> Enhanced judiciary autonomy, local government autonomy, and electoral reforms</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">Ongoing Debates</h2>
          <p className="mb-4">
            There are ongoing debates about constitutional reform in Nigeria, including calls for:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Creation of more states</li>
            <li>Resource control and fiscal federalism</li>
            <li>Restructuring the federal system</li>
            <li>Judicial and electoral reforms</li>
            <li>Creation of state police</li>
            <li>Creation of a new constitution entirely, rather than amendments</li>
          </ul>
        </section>
        
        <div className="mt-8 border-t pt-6">
          <Link href="/learn" className="text-green-600 hover:text-green-800 font-medium">
            ← Back to Political Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
