import Link from "next/link"

export const metadata = {
  title: "Bring Back Our Girls Campaign | Nigeria Elections",
  description:
    "Learn about Nigeria's Bring Back Our Girls campaign, its global impact, and the ongoing Chibok girls crisis.",
}

export default function BringBackOurGirlsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">The Bring Back Our Girls Campaign</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">The Chibok Abduction</h2>
          <p className="mb-4">
            On the night of April 14-15, 2014, 276 female students were kidnapped from the Government Girls Secondary
            School in Chibok, Borno State, Nigeria, by the terrorist group Boko Haram. The girls, mostly aged between 16
            and 18, were taken from their dormitories during the night as they prepared for their physics examination.
          </p>
          <p className="mb-4">
            The abduction occurred in the context of Boko Haram's insurgency in northeastern Nigeria, which began in
            2009. The group, whose name roughly translates to "Western education is forbidden," had targeted schools
            before, but the scale of the Chibok kidnapping was unprecedented and shocked the nation and the world.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Birth of the Movement</h2>
          <p className="mb-4">
            In the days following the abduction, there was relatively little media coverage or government response. This
            perceived inaction sparked outrage among many Nigerians. The Bring Back Our Girls (BBOG) movement emerged
            from this frustration:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Origins:</strong> The hashtag #BringBackOurGirls was first used on Twitter by Ibrahim M.
              Abdullahi, a lawyer from Abuja, who was inspired by a comment made by former Minister of Education Oby
              Ezekwesili at an event.
            </li>
            <li>
              <strong>Early Protests:</strong> The first BBOG protest was held in Abuja on April 30, 2014, with
              participants demanding more government action to rescue the girls.
            </li>
            <li>
              <strong>Global Spread:</strong> The hashtag quickly went viral, gaining over 4 million tweets within a
              month and attracting support from global figures including Michelle Obama, Malala Yousafzai, and numerous
              celebrities.
            </li>
            <li>
              <strong>Organization:</strong> What began as a hashtag evolved into a structured movement with regular
              sit-ins, marches, and advocacy activities, particularly in Abuja.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Leaders and Organizers</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-1">Oby Ezekwesili</h3>
              <p>
                A former Minister of Education and Vice President of the World Bank's Africa division, Ezekwesili became
                the most prominent face of the movement. Her international profile helped bring global attention to the
                cause.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Aisha Yesufu</h3>
              <p>
                A businesswoman and activist who became known for her passionate advocacy and fearless confrontation of
                authorities. She later became a prominent figure in the #EndSARS protests as well.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Hadiza Bala Usman</h3>
              <p>
                One of the co-founders of the movement who later served as the Managing Director of the Nigerian Ports
                Authority.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-1">Bukky Shonibare</h3>
              <p>
                A strategic team member who maintained the movement's database of the missing girls and coordinated
                various advocacy initiatives.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Activities and Strategies</h2>
          <p className="mb-4">
            The BBOG movement employed various strategies to maintain pressure on the government and keep the Chibok
            girls in public consciousness:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Daily Sit-outs:</strong> For years, BBOG members held daily sit-outs at the Unity Fountain in
              Abuja, creating a consistent physical reminder of the missing girls.
            </li>
            <li>
              <strong>Marches and Protests:</strong> The group organized marches to the Presidential Villa and other
              government offices to deliver petitions and demands.
            </li>
            <li>
              <strong>Media Engagement:</strong> BBOG maintained a strong media presence, giving interviews, holding
              press conferences, and using social media to share updates.
            </li>
            <li>
              <strong>International Advocacy:</strong> Leaders traveled internationally to speak at forums, meet with
              foreign governments, and build global support.
            </li>
            <li>
              <strong>Documentation:</strong> The movement meticulously documented information about each missing girl,
              including names, photos when available, and details of those who were rescued or escaped.
            </li>
            <li>
              <strong>Commemoration:</strong> BBOG held events to mark milestones such as the 100th, 500th, and 1000th
              days of captivity, ensuring the issue remained in public consciousness.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Government Response</h2>
          <p className="mb-4">
            The Nigerian government's response to both the abduction and the BBOG movement evolved over time and across
            two administrations:
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Jonathan Administration (2014-2015)</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Initial Denial:</strong> Some government officials initially questioned whether the abduction
                had actually occurred.
              </li>
              <li>
                <strong>Delayed Response:</strong> President Goodluck Jonathan did not make a public statement about the
                kidnapping until more than two weeks after it occurred.
              </li>
              <li>
                <strong>International Assistance:</strong> Eventually, the government accepted offers of intelligence
                and technical support from countries including the US, UK, France, and China.
              </li>
              <li>
                <strong>Tension with BBOG:</strong> Relations between the movement and the government were often
                strained, with some officials viewing the campaign as politically motivated.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Buhari Administration (2015-2023)</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Campaign Promise:</strong> Muhammadu Buhari made rescuing the Chibok girls a campaign promise
                during the 2015 election.
              </li>
              <li>
                <strong>Initial Engagement:</strong> The new administration initially showed more openness to the BBOG
                movement, with President Buhari meeting with the parents of the missing girls and BBOG leaders.
              </li>
              <li>
                <strong>Negotiations and Releases:</strong> The government negotiated the release of 103 girls in two
                groups—21 in October 2016 and 82 in May 2017—reportedly in exchange for Boko Haram prisoners and
                payment.
              </li>
              <li>
                <strong>Later Tensions:</strong> As time passed, relations between BBOG and the government deteriorated,
                with authorities occasionally restricting the movement's protests and accusing it of being politically
                motivated.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Status of the Chibok Girls</h2>
          <p className="mb-4">
            Over the years, many of the Chibok girls have returned home through various means, though a significant
            number remain missing:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Escaped:</strong> 57 girls escaped shortly after the abduction by jumping from the trucks or
              fleeing from captivity in the early days.
            </li>
            <li>
              <strong>Negotiated Releases:</strong> 103 girls were released through negotiations between the government
              and Boko Haram in 2016 and 2017.
            </li>
            <li>
              <strong>Military Rescues:</strong> Several girls have been rescued during military operations in the
              Sambisa Forest and other Boko Haram strongholds.
            </li>
            <li>
              <strong>Ongoing Escapes:</strong> Girls continue to escape or be found, with several returning between
              2021 and 2023.
            </li>
            <li>
              <strong>Still Missing:</strong> As of 2023, approximately 90 girls remain unaccounted for, more than nine
              years after their abduction.
            </li>
          </ul>
          <p className="mb-4">
            Many of the returned girls have been enrolled in educational programs, including at the American University
            of Nigeria in Yola and other institutions, though their reintegration has presented significant challenges.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Impact and Legacy</h2>
          <p className="mb-4">
            The Bring Back Our Girls movement has had several lasting impacts on Nigerian society and politics:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Global Awareness:</strong> The campaign brought unprecedented international attention to the Boko
              Haram insurgency and its impact on civilians, particularly women and girls.
            </li>
            <li>
              <strong>Civil Society Mobilization:</strong> BBOG demonstrated the potential of sustained, focused
              advocacy to influence government action and public discourse.
            </li>
            <li>
              <strong>Digital Activism:</strong> The movement was one of Nigeria's first major social media campaigns,
              setting a template for later movements like #EndSARS.
            </li>
            <li>
              <strong>Political Impact:</strong> The handling of the Chibok abduction became a significant issue in the
              2015 election, contributing to President Jonathan's defeat.
            </li>
            <li>
              <strong>Policy Changes:</strong> The incident and subsequent advocacy led to increased attention to school
              security and the establishment of the Safe Schools Initiative.
            </li>
            <li>
              <strong>Ongoing Influence:</strong> BBOG leaders have remained influential in Nigerian civil society, with
              many taking on roles in other movements and initiatives.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Broader Context: Mass Abductions in Nigeria</h2>
          <p className="mb-4">
            While the Chibok abduction was the most high-profile case, it was part of a broader pattern of mass
            kidnappings in Nigeria:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Dapchi Abduction (2018):</strong> 110 schoolgirls were kidnapped from Dapchi, Yobe State. Most
              were released a month later, though Leah Sharibu remains in captivity for refusing to renounce her
              Christian faith.
            </li>
            <li>
              <strong>Kankara Kidnapping (2020):</strong> Over 300 boys were abducted from a school in Kankara, Katsina
              State, and later released after negotiations.
            </li>
            <li>
              <strong>Jangebe Abduction (2021):</strong> 279 schoolgirls were kidnapped from Jangebe, Zamfara State, and
              released after several days.
            </li>
            <li>
              <strong>Other Incidents:</strong> Numerous other mass abductions have occurred, with criminal gangs
              increasingly adopting kidnapping for ransom as a tactic.
            </li>
          </ul>
          <p className="mb-4">
            These subsequent abductions have not generated the same level of sustained advocacy as the Chibok case,
            though BBOG has attempted to highlight these incidents as well.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Current Status of the Movement</h2>
          <p className="mb-4">
            While the intensity of the BBOG campaign has diminished over time, the movement continues in various forms:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Reduced Visibility:</strong> The daily sit-outs and regular protests have become less frequent,
              though the movement still organizes events on significant anniversaries.
            </li>
            <li>
              <strong>Continued Advocacy:</strong> BBOG continues to advocate for the remaining missing girls and for
              broader issues of security and education.
            </li>
            <li>
              <strong>Leadership Changes:</strong> Some original leaders have moved on to other roles, though many
              remain committed to the cause.
            </li>
            <li>
              <strong>Expanded Focus:</strong> The movement has broadened its advocacy to include other mass abductions
              and security issues affecting Nigerian children.
            </li>
          </ul>
          <p className="mb-4">
            Despite the passage of time, the Chibok abduction and the BBOG movement remain powerful symbols in Nigerian
            public consciousness, representing both the country's security challenges and the potential of citizen
            advocacy to drive change.
          </p>
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
