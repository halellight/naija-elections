export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Presidential Inauguration",
      date: "May 29, 2027",
      description: "The inauguration ceremony for the newly elected President of Nigeria.",
    },
    {
      id: 2,
      title: "General Election",
      date: "February 25, 2027",
      description: "Nigerians vote to elect the President and members of the National Assembly.",
    },
    {
      id: 3,
      title: "Presidential Debates",
      date: "January 2027",
      description: "Candidates debate key issues facing Nigeria.",
    },
    {
      id: 4,
      title: "Party Primaries",
      date: "August-October 2026",
      description: "Political parties select their presidential candidates.",
    },
    {
      id: 5,
      title: "Voter Registration Deadline",
      date: "December 2026",
      description: "Last day to register to vote in the 2027 general election.",
    },
  ]

  return (
    <div className="container py-8">
      <h1 className="section-title">Upcoming Election Events</h1>

      <div className="max-w-3xl mx-auto">
        {events.map((event) => (
          <div key={event.id} className="card">
            <h2 className="text-xl font-bold text-ng-green">{event.title}</h2>
            <p className="text-ng-green font-medium">{event.date}</p>
            <p className="mt-2">{event.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-ng-gray-600 max-w-3xl mx-auto text-center">
        Note: Dates are approximate and subject to change based on INEC (Independent National Electoral Commission)
        announcements.
      </p>
    </div>
  )
}
