import Link from "next/link"

export default function VotingProcess() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Voting Process in Nigeria</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="mb-4">
            Voting in Nigeria is a constitutional right for all citizens aged 18 and above. The process is overseen by
            the Independent National Electoral Commission (INEC), which is responsible for conducting free, fair, and
            credible elections.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Step 1: Voter Registration</h2>
          <p className="mb-4">Before you can vote in any Nigerian election, you must register as a voter:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>
              Visit an INEC registration center during a registration period or use the online pre-registration portal
              (when available)
            </li>
            <li>Provide personal information including name, date of birth, address, and fingerprints</li>
            <li>Have your photograph taken</li>
            <li>Receive a temporary voter's slip</li>
          </ol>
          <p className="mb-4">
            After processing, you'll be issued a Permanent Voter's Card (PVC), which you must collect from the
            designated INEC office.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Step 2: Verification of Voter Registration</h2>
          <p className="mb-4">Before Election Day, it's important to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Confirm your registration status on INEC's voter verification portal</li>
            <li>Verify your polling unit location, as polling units can change</li>
            <li>Ensure your PVC is valid and undamaged</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Step 3: Preparation for Election Day</h2>
          <p className="mb-4">On Election Day, be prepared with:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Your Permanent Voter's Card (PVC) - you cannot vote without it</li>
            <li>Knowledge of your polling unit location</li>
            <li>Plan to arrive early - polls typically open at 8:30 AM and close at 2:30 PM</li>
            <li>Comfortable clothing and possibly water, as you might need to queue</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Step 4: Voting on Election Day</h2>
          <p className="mb-4">The actual voting process involves several steps:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>
              <strong>Join the queue:</strong> Line up at your designated polling unit
            </li>
            <li>
              <strong>Verification:</strong> Present your PVC to INEC officials for verification
            </li>
            <li>
              <strong>Biometric verification:</strong> Your fingerprints will be scanned using the Bimodal Voter
              Accreditation System (BVAS) to verify your identity
            </li>
            <li>
              <strong>Ballot paper collection:</strong> Once verified, you'll be given the appropriate ballot paper(s)
              for the election
            </li>
            <li>
              <strong>Mark your ballot:</strong> In the voting booth, mark your ballot paper next to your chosen
              candidate/party
            </li>
            <li>
              <strong>Cast your vote:</strong> Fold your ballot paper and drop it in the designated ballot box
            </li>
            <li>
              <strong>Inking:</strong> Your finger will be marked with indelible ink to prevent multiple voting
            </li>
            <li>
              <strong>Exit the polling unit:</strong> Leave the polling area after casting your vote
            </li>
          </ol>
          <p className="mb-4">
            <strong>Important:</strong> Photography or recording in the voting booth is prohibited, as ballots are cast
            in secret.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Step 5: Vote Counting and Results</h2>
          <p className="mb-4">After polls close:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Votes are counted at the polling unit in the presence of party agents and observers</li>
            <li>Results are recorded on official INEC forms and posted at the polling unit</li>
            <li>Results are transmitted electronically using the INEC Result Viewing (IReV) system</li>
            <li>
              Physical results are collated at ward, local government, state, and national levels (depending on the
              election)
            </li>
            <li>Final results are announced by the designated INEC returning officer</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Types of Elections</h2>
          <p className="mb-4">Nigeria conducts several types of elections:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Presidential Elections:</strong> Held every four years to elect the President
            </li>
            <li>
              <strong>National Assembly Elections:</strong> For Senate and House of Representatives members
            </li>
            <li>
              <strong>Governorship Elections:</strong> To elect state governors
            </li>
            <li>
              <strong>State House of Assembly Elections:</strong> For state legislators
            </li>
            <li>
              <strong>Local Government Elections:</strong> For LGA chairpersons and councilors (conducted by State
              Electoral Commissions)
            </li>
          </ul>
          <p className="mb-4">
            These elections may be held concurrently or on separate dates according to INEC's schedule.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Tips for Voters</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Register early and collect your PVC well before election day</li>
            <li>Verify your polling unit location before election day</li>
            <li>Arrive at your polling unit early</li>
            <li>Remain peaceful and patient throughout the process</li>
            <li>Follow instructions from INEC officials</li>
            <li>Do not sell your vote or engage in electoral malpractice</li>
            <li>Report any irregularities to INEC officials or security personnel</li>
            <li>Respect the secrecy of the ballot</li>
            <li>Stay informed about candidates and their platforms before voting</li>
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
