import Link from "next/link"

export const metadata = {
  title: "Other Political Parties | Nigeria Elections",
  description:
    "Explore Nigeria's diverse political landscape beyond the major parties, including regional and emerging parties.",
}

export default function OtherPartiesPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Other Political Parties in Nigeria</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="mb-4">
            While the All Progressives Congress (APC), People's Democratic Party (PDP), and Labour Party currently
            dominate Nigeria's political landscape, the country has a diverse array of other political parties. These
            parties range from those with significant regional influence to newer parties seeking to establish
            themselves as alternatives to the major players.
          </p>
          <p className="mb-4">
            Nigeria's multi-party democracy has seen fluctuations in the number of registered parties. Following the
            2018 Electoral Act, the Independent National Electoral Commission (INEC) deregistered many parties that
            failed to meet certain criteria, reducing the number from 91 to 18. However, court rulings later reinstated
            some parties, and new registrations have occurred.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Significant Regional and Specialized Parties</h2>

          <div className="mb-5 border-b pb-4">
            <h3 className="text-xl font-medium mb-2">All Progressives Grand Alliance (APGA)</h3>
            <p className="mb-2">
              <strong>Founded:</strong> 2002
            </p>
            <p className="mb-2">
              <strong>Ideology:</strong> Progressive, regionalist
            </p>
            <p className="mb-2">
              <strong>Stronghold:</strong> Southeastern Nigeria, particularly Anambra State
            </p>
            <p className="mb-2">
              APGA has maintained control of Anambra State since 2006, with governors Peter Obi (2006-2014), Willie
              Obiano (2014-2022), and Charles Soludo (2022-present). The party has positioned itself as representing
              Igbo interests while maintaining a national outlook. Its symbol is the cockerel (rooster).
            </p>
          </div>

          <div className="mb-5 border-b pb-4">
            <h3 className="text-xl font-medium mb-2">New Nigeria Peoples Party (NNPP)</h3>
            <p className="mb-2">
              <strong>Founded:</strong> 2021 (Reformed)
            </p>
            <p className="mb-2">
              <strong>Ideology:</strong> Populist, nationalist
            </p>
            <p className="mb-2">
              <strong>Key Figure:</strong> Rabiu Kwankwaso, former Governor of Kano State
            </p>
            <p className="mb-2">
              The NNPP gained prominence in the 2023 elections with Rabiu Kwankwaso as its presidential candidate. The
              party has a strong following in northern Nigeria, particularly Kano State, where it won the governorship
              in 2023 (though this was later overturned by the courts). Its symbol is a basket of fruits.
            </p>
          </div>

          <div className="mb-5 border-b pb-4">
            <h3 className="text-xl font-medium mb-2">Social Democratic Party (SDP)</h3>
            <p className="mb-2">
              <strong>Founded:</strong> 1989 (Original), 2013 (Revived)
            </p>
            <p className="mb-2">
              <strong>Ideology:</strong> Social democracy, progressive
            </p>
            <p className="mb-2">
              The SDP has historical significance as the party under which MKO Abiola won the annulled June 12, 1993
              presidential election. The revived SDP has positioned itself as a progressive alternative to the major
              parties. In recent elections, it has won some legislative seats and local government positions.
            </p>
          </div>

          <div className="mb-5 border-b pb-4">
            <h3 className="text-xl font-medium mb-2">African Democratic Congress (ADC)</h3>
            <p className="mb-2">
              <strong>Founded:</strong> 2005
            </p>
            <p className="mb-2">
              <strong>Ideology:</strong> Center, liberal
            </p>
            <p className="mb-2">
              The ADC gained prominence when it was adopted by former President Olusegun Obasanjo's Coalition for
              Nigeria Movement in 2018. The party has attracted some prominent politicians and has won legislative seats
              at both federal and state levels.
            </p>
          </div>

          <div className="mb-5 border-b pb-4">
            <h3 className="text-xl font-medium mb-2">Young Progressives Party (YPP)</h3>
            <p className="mb-2">
              <strong>Founded:</strong> 2017
            </p>
            <p className="mb-2">
              <strong>Ideology:</strong> Progressive, youth-oriented
            </p>
            <p className="mb-2">
              The YPP has positioned itself as a platform for young Nigerians seeking political participation. The party
              gained attention when it won a Senate seat in Anambra State in the 2019 elections. It appeals primarily to
              educated youth and advocates for political inclusion of younger Nigerians.
            </p>
          </div>

          <div className="mb-5 border-b pb-4">
            <h3 className="text-xl font-medium mb-2">Peoples Redemption Party (PRP)</h3>
            <p className="mb-2">
              <strong>Founded:</strong> 1978 (Original), 2002 (Revived)
            </p>
            <p className="mb-2">
              <strong>Ideology:</strong> Democratic socialism, left-wing
            </p>
            <p className="mb-2">
              The PRP is one of Nigeria's oldest political parties, originally founded by Aminu Kano. It has a socialist
              orientation and has historically had support in northern Nigeria, particularly Kano and Kaduna states. The
              party advocates for the interests of the working class and peasantry.
            </p>
          </div>

          <div className="mb-5">
            <h3 className="text-xl font-medium mb-2">Zenith Labour Party (ZLP)</h3>
            <p className="mb-2">
              <strong>Founded:</strong> 2018
            </p>
            <p className="mb-2">
              <strong>Ideology:</strong> Center-left
            </p>
            <p className="mb-2">
              The ZLP gained prominence when former Ondo State Governor Olusegun Mimiko joined the party after leaving
              the Labour Party. It has had some electoral success at the state level, particularly in Ondo State.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Historical Parties of Significance</h2>
          <p className="mb-4">
            Several parties that are no longer active played important roles in Nigeria's political history:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Action Group (AG):</strong> Led by Chief Obafemi Awolowo in the First Republic (1960-1966), it was
              dominant in Western Nigeria
            </li>
            <li>
              <strong>Northern People's Congress (NPC):</strong> Led by Sir Ahmadu Bello in the First Republic, it was
              the dominant party in Northern Nigeria
            </li>
            <li>
              <strong>
                National Council of Nigeria and the Cameroons/National Council of Nigerian Citizens (NCNC):
              </strong>{" "}
              Led by Dr. Nnamdi Azikiwe, it was strong in Eastern Nigeria during the First Republic
            </li>
            <li>
              <strong>Unity Party of Nigeria (UPN):</strong> Led by Chief Obafemi Awolowo in the Second Republic
              (1979-1983)
            </li>
            <li>
              <strong>National Party of Nigeria (NPN):</strong> The ruling party during the Second Republic under
              President Shehu Shagari
            </li>
            <li>
              <strong>Congress for Progressive Change (CPC):</strong> Founded by Muhammadu Buhari, it later merged with
              other parties to form the APC in 2013
            </li>
            <li>
              <strong>Action Congress of Nigeria (ACN):</strong> Led by Bola Tinubu, it was one of the parties that
              merged to form the APC
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Challenges Facing Smaller Parties</h2>
          <p className="mb-4">
            Minor political parties in Nigeria face numerous challenges that limit their electoral competitiveness:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Financial Constraints:</strong> Limited funding compared to the major parties, affecting their
              ability to campaign effectively
            </li>
            <li>
              <strong>Media Coverage:</strong> Difficulty in securing media attention, which tends to focus on the major
              parties
            </li>
            <li>
              <strong>Electoral System:</strong> The first-past-the-post system tends to favor larger parties
            </li>
            <li>
              <strong>Infrastructure:</strong> Weak organizational structures and limited presence across the country
            </li>
            <li>
              <strong>Personality Politics:</strong> Nigerian politics often revolves around strong personalities rather
              than party platforms
            </li>
            <li>
              <strong>Regulatory Hurdles:</strong> Requirements to maintain registration, including performance
              thresholds in elections
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Role in Nigeria's Democracy</h2>
          <p className="mb-4">
            Despite their electoral challenges, smaller parties play several important roles in Nigeria's democratic
            system:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Representation of Diverse Interests:</strong> They provide platforms for groups and viewpoints
              that may not be represented by the major parties
            </li>
            <li>
              <strong>Policy Innovation:</strong> They often introduce new policy ideas and approaches that may
              eventually be adopted by larger parties
            </li>
            <li>
              <strong>Political Inclusion:</strong> They create opportunities for political participation for citizens
              who feel alienated from the major parties
            </li>
            <li>
              <strong>Coalition Building:</strong> They can play crucial roles in forming coalitions, particularly at
              the state level
            </li>
            <li>
              <strong>Democratic Contestation:</strong> Their participation ensures that elections remain competitive
              and that the major parties do not take voters for granted
            </li>
            <li>
              <strong>Training Ground:</strong> They often serve as political training grounds for emerging leaders who
              may later join larger parties
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Future Prospects</h2>
          <p className="mb-4">The future of Nigeria's smaller political parties will be shaped by several factors:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Electoral Reforms:</strong> Potential changes to the electoral system that might create more
              opportunities for smaller parties
            </li>
            <li>
              <strong>Generational Shift:</strong> The growing political engagement of younger Nigerians who may be more
              open to alternatives to the established parties
            </li>
            <li>
              <strong>Issue-Based Politics:</strong> A potential shift toward more issue-based rather than
              identity-based politics
            </li>
            <li>
              <strong>Digital Campaigning:</strong> The increasing importance of social media and digital platforms,
              which can reduce the cost of political communication
            </li>
            <li>
              <strong>Coalition Strategies:</strong> The potential for strategic alliances and coalitions among smaller
              parties to increase their collective impact
            </li>
            <li>
              <strong>Regional Consolidation:</strong> The possibility of parties focusing on building strong regional
              bases before expanding nationally
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
