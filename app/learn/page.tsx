import { Card } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, Vote, Users, Building, Scale } from "lucide-react"

export default function LearnPage() {
  const guides = [
    {
      id: 1,
      title: "Nigerian Electoral System",
      icon: <Vote className="h-6 w-6" />,
      description:
        "Learn about Nigeria's electoral system, including how elections are conducted, the role of INEC, and electoral reforms.",
      link: "/learn/electoral-system",
    },
    {
      id: 2,
      title: "Political Parties in Nigeria",
      icon: <Users className="h-6 w-6" />,
      description:
        "Explore the major political parties in Nigeria, their ideologies, and their roles in Nigerian politics.",
      link: "/parties",
    },
    {
      id: 3,
      title: "The Nigerian Constitution",
      icon: <Scale className="h-6 w-6" />,
      description: "Understand the Nigerian Constitution, its history, key provisions, and amendments over time.",
      link: "/learn/constitution",
    },
    {
      id: 4,
      title: "Government Structure",
      icon: <Building className="h-6 w-6" />,
      description:
        "Learn about Nigeria's federal system, the three branches of government, and how they work together.",
      link: "/learn/government-structure",
    },
    {
      id: 5,
      title: "Voting Process",
      icon: <BookOpen className="h-6 w-6" />,
      description: "A step-by-step guide to the voting process in Nigeria, from registration to casting your ballot.",
      link: "/learn/voting-process",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Political Guides</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Card key={guide.id} className="p-6">
            <div className="flex items-center gap-3 mb-4">
              {guide.icon}
              <h2 className="text-xl font-bold">{guide.title}</h2>
            </div>
            <p className="mb-4">{guide.description}</p>
            <Link href={guide.link} className="text-green-600 hover:underline block text-right">
              Read More
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

