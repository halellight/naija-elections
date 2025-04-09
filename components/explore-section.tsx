import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Calendar, Users, BookOpen, Flag, History } from "lucide-react"

export default function ExploreSection() {
  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold text-center mb-10">Explore Nigerian Politics</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-green-50 border-2 border-[#008751]">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-[#008751]" />
            <h3 className="font-bold text-lg">Upcoming Election Events</h3>
          </div>
          <p className="mb-4">
            Events leading up to the next Nigerian Presidential election. Events are listed in reverse chronological
            order, with the Inauguration being the first event.
          </p>
          <Link href="/events" className="text-[#008751] hover:underline block text-right font-semibold">
            View All Events
          </Link>
        </Card>

        <Card className="p-6 bg-green-50 border-2 border-[#008751]">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-[#008751]" />
            <h3 className="font-bold text-lg">Past Presidents</h3>
          </div>
          <p className="mb-4">
            Explore the history of Nigerian leadership through our comprehensive guides about past Nigerian Presidents
            and their legacies.
          </p>
          <Link href="/presidents" className="text-[#008751] hover:underline block text-right font-semibold">
            View Past Presidents
          </Link>
        </Card>

        <Card className="p-6 bg-green-50 border-2 border-[#008751]">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-[#008751]" />
            <h3 className="font-bold text-lg">Political Guides</h3>
          </div>
          <p className="mb-4">
            Learn about political parties, movements, voting, and how Nigerian democracy works through our clear, simple
            guides.
          </p>
          <Link href="/learn" className="text-[#008751] hover:underline block text-right font-semibold">
            View All Guides
          </Link>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Card className="p-6 bg-green-50 border-2 border-[#008751]">
          <div className="flex items-center gap-2 mb-4">
            <Flag className="h-5 w-5 text-[#008751]" />
            <h3 className="font-bold text-lg">Political Parties</h3>
          </div>
          <p className="mb-4">
            Discover Nigeria's major political parties, their histories, ideologies, and their impact on the nation's
            political landscape.
          </p>
          <Link href="/parties" className="text-[#008751] hover:underline block text-right font-semibold">
            View Political Parties
          </Link>
        </Card>

        <Card className="p-6 bg-green-50 border-2 border-[#008751]">
          <div className="flex items-center gap-2 mb-4">
            <History className="h-5 w-5 text-[#008751]" />
            <h3 className="font-bold text-lg">Democracy Movements</h3>
          </div>
          <p className="mb-4">
            Learn about the key movements that have shaped Nigeria's democratic journey, from independence to present
            day.
          </p>
          <Link href="/movements" className="text-[#008751] hover:underline block text-right font-semibold">
            View Democracy Movements
          </Link>
        </Card>
      </div>
    </div>
  )
}
