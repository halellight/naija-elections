import Link from "next/link"

export default function GovernmentStructure() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Government Structure in Nigeria</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Federal System Overview</h2>
          <p className="mb-4">
            Nigeria operates a federal system of government, distributing power between a central federal government and
            36 states plus the Federal Capital Territory (FCT). This system was adopted to accommodate Nigeria's diverse
            ethnic, religious, and cultural groups while maintaining national unity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Three Branches of Government</h2>

          <div className="mb-6 border-b pb-4">
            <h3 className="text-xl font-medium mb-2">The Executive Branch</h3>
            <p className="mb-3">
              The Executive Branch is responsible for implementing and enforcing laws. It consists of:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>The President:</strong> The head of state, head of government, and commander-in-chief of the
                armed forces. The President is elected for a four-year term and can serve a maximum of two terms.
              </li>
              <li>
                <strong>The Vice President:</strong> The President's deputy who assists in governance and can act in the
                President's absence.
              </li>
              <li>
                <strong>The Federal Executive Council (FEC):</strong> Composed of Ministers appointed by the President
                to head various federal ministries.
              </li>
            </ul>
            <p className="mb-3">
              <strong>At the state level:</strong> Each state has a Governor as the chief executive and a Deputy
              Governor, elected for a maximum of two four-year terms. The Governor appoints Commissioners who form the
              State Executive Council.
            </p>
            <p className="mb-3">
              <strong>At the local government level:</strong> Each Local Government Area (LGA) is headed by a
              Chairperson, who is supported by councilors representing different wards.
            </p>
          </div>

          <div className="mb-6 border-b pb-4">
            <h3 className="text-xl font-medium mb-2">The Legislative Branch</h3>
            <p className="mb-3">
              The Legislative Branch is responsible for making laws, overseeing the executive, and representing the
              people. It consists of:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>The National Assembly:</strong> Nigeria's bicameral legislature composed of:
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>
                    <strong>The Senate:</strong> The upper chamber with 109 members (three senators from each state and
                    one from the FCT)
                  </li>
                  <li>
                    <strong>The House of Representatives:</strong> The lower chamber with 360 members elected from
                    constituencies based on population
                  </li>
                </ul>
              </li>
              <li>
                <strong>State Houses of Assembly:</strong> Each of the 36 states has a unicameral legislature
                responsible for making laws at the state level.
              </li>
              <li>
                <strong>Local Government Legislative Councils:</strong> Each LGA has councilors who make bylaws for
                their local areas.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">The Judicial Branch</h3>
            <p className="mb-3">
              The Judicial Branch interprets laws and resolves disputes. Nigeria's judicial system is arranged
              hierarchically:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>The Supreme Court:</strong> The highest court and final court of appeal in Nigeria.
              </li>
              <li>
                <strong>The Court of Appeal:</strong> Hears appeals from the Federal High Court, State High Courts, and
                specialized courts.
              </li>
              <li>
                <strong>The Federal High Court:</strong> Has jurisdiction over federal matters.
              </li>
              <li>
                <strong>State High Courts:</strong> Each state has a High Court that handles most civil and criminal
                cases.
              </li>
              <li>
                <strong>Sharia Courts of Appeal:</strong> In states that have implemented Sharia law, these courts
                handle cases involving Islamic personal law.
              </li>
              <li>
                <strong>Customary Courts of Appeal:</strong> Handle cases involving customary law.
              </li>
              <li>
                <strong>Magistrate and Customary Courts:</strong> Lower courts that handle minor civil and criminal
                cases.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Federal, State, and Local Powers</h2>
          <p className="mb-4">
            The Nigerian Constitution defines the distribution of powers among the three tiers of government:
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Federal Government Powers</h3>
            <p className="mb-2">The Exclusive Legislative List includes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Defense and national security</li>
              <li>Foreign affairs and international relations</li>
              <li>Currency, banking, and monetary policy</li>
              <li>Immigration and citizenship</li>
              <li>Railways, highways, and aviation</li>
              <li>Nuclear energy and mining</li>
              <li>Police and other security services</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Concurrent Powers (Shared)</h3>
            <p className="mb-2">
              The Concurrent Legislative List includes areas where both federal and state governments can make laws:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Education</li>
              <li>Healthcare</li>
              <li>Agriculture</li>
              <li>Housing</li>
              <li>Transportation (except railways and aviation)</li>
              <li>Industrial development</li>
              <li>Environmental protection</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">State Government Powers</h3>
            <p className="mb-2">
              States have authority over areas not explicitly assigned to the federal government, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Urban and regional planning</li>
              <li>State roads and infrastructure</li>
              <li>Markets and public buildings</li>
              <li>Registration of births, deaths, and marriages</li>
              <li>Primary education (shared responsibility with local governments)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Local Government Powers</h3>
            <p className="mb-2">Local governments are responsible for grassroots governance, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Community development</li>
              <li>Primary healthcare</li>
              <li>Primary education (in conjunction with states)</li>
              <li>Maintenance of local roads and public facilities</li>
              <li>Sanitation and waste management</li>
              <li>Collection of local rates and taxes</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Checks and Balances</h2>
          <p className="mb-4">The Nigerian system incorporates checks and balances to prevent abuse of power:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Legislative oversight:</strong> The National Assembly can investigate government activities,
              approve or reject certain executive appointments, and control public spending through the budget process
            </li>
            <li>
              <strong>Judicial review:</strong> Courts can strike down laws and executive actions that violate the
              Constitution
            </li>
            <li>
              <strong>Impeachment:</strong> The legislature can remove the President, Vice President, Governors, or
              other officials for serious misconduct
            </li>
            <li>
              <strong>Veto power:</strong> The President can refuse to sign bills passed by the National Assembly,
              though the Assembly can override this with a two-thirds majority
            </li>
          </ul>
        </section>

        <div className="mt-8 border-t pt-6">
          <Link href="/learn" className="text-green-600 hover:text-green-800 font-medium">
            ← Back to Political Guides
          </Link>
        </div>
      </div>
    </div>
  )
}
