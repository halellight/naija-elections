import Link from "next/link"

export const metadata = {
  title: "Pro-Democracy Movement | Nigeria Elections",
  description: "Explore Nigeria's pro-democracy movement and the struggle against military rule.",
}

export default function ProDemocracyMovementPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Nigeria's Pro-Democracy Movement</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Historical Context</h2>
          <p className="mb-4">
            Nigeria's pro-democracy movement emerged in response to prolonged military rule that dominated the country's
            political landscape from the mid-1960s through the 1990s. Following independence in 1960, Nigeria's
            democratic experiment was short-lived, with the military first seizing power in January 1966. This began a
            cycle of military coups and brief civilian interludes that would last for decades.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">The Second Republic and Its Collapse (1979-1983)</h2>
          <p className="mb-4">
            After 13 years of military rule, Nigeria returned to civilian governance in 1979 with the election of
            President Shehu Shagari. However, this Second Republic was plagued by corruption, economic mismanagement,
            and political instability. On December 31, 1983, the military, led by Major General Muhammadu Buhari,
            overthrew the civilian government, citing widespread corruption and economic decline.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">The Babangida Era (1985-1993)</h2>
          <p className="mb-4">
            In August 1985, General Ibrahim Babangida seized power in a palace coup. His administration initiated a
            transition program to civilian rule but repeatedly extended the timeline. Key developments during this
            period included:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Political Bureau (1986):</strong> Established to recommend a political system for Nigeria's
              transition to democracy
            </li>
            <li>
              <strong>Two-Party System:</strong> Creation of two government-sponsored parties—the Social Democratic
              Party (SDP) and National Republican Convention (NRC)
            </li>
            <li>
              <strong>Transition Program:</strong> A complex, phased transition that included local, state, and national
              elections
            </li>
            <li>
              <strong>June 12, 1993 Presidential Election:</strong> Widely considered Nigeria's freest and fairest
              election, won by business tycoon Moshood Abiola of the SDP
            </li>
            <li>
              <strong>Annulment Crisis:</strong> Babangida's annulment of the June 12 election results, which triggered
              widespread protests and a political crisis
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">The Abacha Regime (1993-1998)</h2>
          <p className="mb-4">
            Following the June 12 crisis and a brief Interim National Government, General Sani Abacha seized power in
            November 1993. The Abacha regime was characterized by severe political repression, human rights abuses, and
            corruption. This period saw the pro-democracy movement reach its peak as various groups mobilized against
            military dictatorship:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>NADECO:</strong> The National Democratic Coalition, formed in 1994, became the leading
              pro-democracy organization
            </li>
            <li>
              <strong>Campaign for Democracy (CD):</strong> Organized protests and civil disobedience against military
              rule
            </li>
            <li>
              <strong>Human Rights Violations:</strong> Detention of political opponents, assassination of activists,
              and suppression of press freedom
            </li>
            <li>
              <strong>Execution of the Ogoni Nine:</strong> The 1995 execution of activist Ken Saro-Wiwa and eight other
              Ogoni activists sparked international outrage and sanctions
            </li>
            <li>
              <strong>Self-Succession Plan:</strong> Abacha's attempt to transform himself into a civilian president
              through a controlled transition process
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Pro-Democracy Organizations</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-1">National Democratic Coalition (NADECO)</h3>
              <p>
                Formed in May 1994, NADECO brought together former politicians, civil society leaders, and pro-democracy
                activists. It demanded the recognition of the June 12 election results, the installation of M.K.O.
                Abiola as president, and a return to democratic governance. Key leaders included Anthony Enahoro,
                Abraham Adesanya, and Bola Tinubu.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Campaign for Democracy (CD)</h3>
              <p>
                Established in 1991, CD organized mass protests, strikes, and civil disobedience campaigns against
                military rule. Led by Dr. Beko Ransome-Kuti, CD played a crucial role in mobilizing popular resistance
                to the annulment of the June 12 election.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Civil Liberties Organization (CLO)</h3>
              <p>
                Founded in 1987, CLO documented human rights abuses, provided legal aid to political detainees, and
                advocated for civil liberties. Olisa Agbakoba was a prominent leader of this organization.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Committee for the Defense of Human Rights (CDHR)</h3>
              <p>
                Established in 1989, CDHR focused on human rights advocacy and education. It was led by Dr. Osagie
                Obayuwana and other activists who documented abuses and campaigned for democratic governance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Movement for the Survival of the Ogoni People (MOSOP)</h3>
              <p>
                While primarily focused on environmental justice and resource control, MOSOP under Ken Saro-Wiwa became
                an important component of the broader pro-democracy movement, highlighting the connection between
                political rights and resource justice.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Pro-Democracy Leaders</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-1">Moshood Kashimawo Olawale (M.K.O.) Abiola</h3>
              <p>
                The presumed winner of the June 12, 1993 presidential election, Abiola became a symbol of the
                pro-democracy struggle. After declaring himself president in 1994, he was arrested and detained until
                his death in custody in 1998.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Gani Fawehinmi</h3>
              <p>
                A renowned human rights lawyer who used the courts to challenge military decrees and defend political
                detainees. Fawehinmi was repeatedly arrested and detained for his activism.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Beko Ransome-Kuti</h3>
              <p>
                A medical doctor and leader of the Campaign for Democracy, Ransome-Kuti organized protests against
                military rule and was imprisoned multiple times.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Wole Soyinka</h3>
              <p>
                Nobel laureate and writer who used his international profile to draw attention to Nigeria's political
                crisis. Soyinka fled into exile during the Abacha regime after being charged with treason.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Kudirat Abiola</h3>
              <p>
                Wife of M.K.O. Abiola who became a prominent pro-democracy activist after her husband's detention. She
                was assassinated in 1996, allegedly on the orders of the Abacha regime.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">International Dimension</h2>
          <p className="mb-4">The pro-democracy movement had significant international dimensions:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Radio Kudirat:</strong> Pro-democracy radio station broadcasting from outside Nigeria
            </li>
            <li>
              <strong>NADECO Abroad:</strong> Exiled pro-democracy activists who lobbied foreign governments and
              international organizations
            </li>
            <li>
              <strong>International Sanctions:</strong> Nigeria faced diplomatic isolation and economic sanctions,
              particularly after the execution of the Ogoni Nine
            </li>
            <li>
              <strong>Commonwealth Suspension:</strong> Nigeria was suspended from the Commonwealth in 1995
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Transition to Democracy (1998-1999)</h2>
          <p className="mb-4">
            The sudden death of General Abacha in June 1998 created an opening for democratic transition:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>General Abdulsalami Abubakar:</strong> Abacha's successor who initiated a swift transition to
              civilian rule
            </li>
            <li>
              <strong>Release of Political Prisoners:</strong> Many detained pro-democracy activists were freed
            </li>
            <li>
              <strong>Death of M.K.O. Abiola:</strong> Abiola died in custody in July 1998 under controversial
              circumstances
            </li>
            <li>
              <strong>1999 Elections:</strong> Former military head of state Olusegun Obasanjo was elected president,
              ending 16 years of continuous military rule
            </li>
            <li>
              <strong>May 29, 1999:</strong> Inauguration of the Fourth Republic, now commemorated as Democracy Day
              (though later changed to June 12)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Legacy and Continuing Relevance</h2>
          <p className="mb-4">The pro-democracy movement left several enduring legacies:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Established civil society as a critical component of Nigeria's democratic landscape</li>
            <li>Created a culture of resistance to authoritarian tendencies in governance</li>
            <li>Highlighted the importance of free and fair elections, as symbolized by the June 12 experience</li>
            <li>Demonstrated the power of coalition-building across ethnic, regional, and ideological lines</li>
            <li>
              In 2018, President Muhammadu Buhari officially recognized June 12 as Democracy Day, acknowledging the
              significance of the pro-democracy struggle
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
