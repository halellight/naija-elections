import Link from "next/link"

export const metadata = {
  title: "Independence Movement | Nigeria Elections",
  description: "Learn about Nigeria's independence movement and the struggle for freedom from colonial rule.",
}

export default function IndependenceMovementPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Nigeria's Independence Movement</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Historical Background</h2>
          <p className="mb-4">
            Nigeria's independence movement emerged in response to British colonial rule, which began formally in 1914
            when the Northern and Southern Protectorates were amalgamated to create the colony and protectorate of
            Nigeria. The struggle for independence spanned several decades and involved various nationalist
            organizations, political parties, and influential leaders.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Early Nationalist Activities (1920s-1930s)</h2>
          <p className="mb-4">
            The roots of Nigerian nationalism can be traced to the early 20th century, when Western-educated Nigerians
            began to question colonial policies and advocate for greater Nigerian participation in governance:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Nigerian National Democratic Party (NNDP):</strong> Founded in 1923 by Herbert Macaulay, often
              referred to as the "Father of Nigerian Nationalism," the NNDP was Nigeria's first political party and
              contested elections in Lagos.
            </li>
            <li>
              <strong>West African Students' Union (WASU):</strong> Established in 1925 by Ladipo Solanke in London,
              WASU provided a platform for African students to advocate for independence.
            </li>
            <li>
              <strong>Nigerian Youth Movement (NYM):</strong> Founded in 1934, the NYM expanded nationalist activities
              beyond Lagos and advocated for increased Nigerian representation in the colonial administration.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Post-World War II Nationalism (1940s-1950s)</h2>
          <p className="mb-4">
            The nationalist movement gained significant momentum after World War II, influenced by global anti-colonial
            movements and the Atlantic Charter's principles of self-determination:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>National Council of Nigeria and the Cameroons (NCNC):</strong> Founded in 1944 by Nnamdi Azikiwe
              and Herbert Macaulay, the NCNC became a leading nationalist organization with broad support across
              southern Nigeria.
            </li>
            <li>
              <strong>Action Group (AG):</strong> Formed in 1951 by Obafemi Awolowo, the AG advocated for a federal
              system of government and became dominant in the Western Region.
            </li>
            <li>
              <strong>Northern People's Congress (NPC):</strong> Established in 1949 by Ahmadu Bello, the NPC
              represented northern interests and initially took a more gradual approach to independence.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Leaders of the Independence Movement</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-1">Nnamdi Azikiwe (1904-1996)</h3>
              <p>
                Known as "Zik," Azikiwe was a prominent nationalist leader, journalist, and politician who became
                Nigeria's first indigenous Governor-General and later the first President of Nigeria. He founded the
                influential newspaper "The West African Pilot," which became a powerful tool for nationalist propaganda.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Obafemi Awolowo (1909-1987)</h3>
              <p>
                A lawyer, journalist, and politician, Awolowo led the Action Group and advocated for federalism and
                regional autonomy. He introduced free primary education and other progressive policies as Premier of the
                Western Region.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Ahmadu Bello (1910-1966)</h3>
              <p>
                The Sardauna of Sokoto and leader of the Northern People's Congress, Bello became the first Premier of
                Northern Nigeria and advocated for northern interests within the independence movement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Herbert Macaulay (1864-1946)</h3>
              <p>
                Considered the "Father of Nigerian Nationalism," Macaulay founded the Nigerian National Democratic Party
                and co-founded the NCNC. Though he died before independence, his early nationalist activities laid the
                groundwork for later movements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Michael Imoudu (1902-2005)</h3>
              <p>
                Known as "Labour Leader No. 1," Imoudu organized Nigeria's first general strike in 1945 and helped
                connect the labor movement with the broader independence struggle.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Funmilayo Ransome-Kuti (1900-1978)</h3>
              <p>
                A women's rights activist and nationalist, Ransome-Kuti founded the Abeokuta Women's Union and mobilized
                women against colonial taxation policies and for greater political representation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Constitutional Developments</h2>
          <p className="mb-4">
            The path to independence was marked by a series of constitutional reforms that gradually increased Nigerian
            participation in governance:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Richards Constitution (1946):</strong> Introduced regional assemblies and increased Nigerian
              representation in the Legislative Council
            </li>
            <li>
              <strong>Macpherson Constitution (1951):</strong> Created a more representative central legislature and
              strengthened regional governments
            </li>
            <li>
              <strong>Lyttleton Constitution (1954):</strong> Established a federal system with greater regional
              autonomy, laying the groundwork for the eventual structure of independent Nigeria
            </li>
            <li>
              <strong>Independence Constitution (1960):</strong> Provided the framework for Nigeria's independence as a
              sovereign nation within the Commonwealth
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">The Road to Independence</h2>
          <p className="mb-4">In the late 1950s, the momentum toward independence accelerated:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>1957:</strong> The Eastern and Western Regions achieved internal self-government
            </li>
            <li>
              <strong>1959:</strong> The Northern Region achieved internal self-government
            </li>
            <li>
              <strong>December 1959:</strong> Federal elections were held to determine the government that would lead
              Nigeria into independence
            </li>
            <li>
              <strong>January 1960:</strong> The British government announced that Nigeria would become independent on
              October 1, 1960
            </li>
            <li>
              <strong>October 1, 1960:</strong> Nigeria formally gained independence from British colonial rule, with
              Abubakar Tafawa Balewa as the first Prime Minister and Nnamdi Azikiwe as Governor-General
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Legacy and Significance</h2>
          <p className="mb-4">Nigeria's independence movement had several lasting impacts:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Established Nigeria as Africa's most populous independent nation and a leader in the continent's
              decolonization movement
            </li>
            <li>
              Created a federal system that attempted to balance the interests of Nigeria's diverse ethnic and regional
              groups
            </li>
            <li>
              Developed a political class and civil service that would guide Nigeria through its early years of
              independence
            </li>
            <li>
              Inspired other independence movements across Africa and contributed to the wave of decolonization in the
              1960s
            </li>
            <li>
              Established the principle of Nigerian sovereignty and self-determination that continues to guide the
              nation's development
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
