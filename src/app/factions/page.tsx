import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function FactionsPage() {
  const factions = await prisma.faction.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Cyberpunk Factions</h1>

      <p className="mt-2 text-gray-400">
        Explore the corporations, gangs and groups of Night City.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {factions.map((faction) => (
        <Link href={`/factions/${faction.slug}`} key={faction.id}>
          <article
            key={faction.id}
            className="rounded-lg border border-gray-800 bg-gray-950 p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">{faction.name}</h2>
              <span className="rounded-full bg-cyan-950 px-3 py-1 text-sm text-cyan-300">
                {faction.type}
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-400">
              {faction.description}
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Influence: {faction.influence}/5
            </p>
          </article>
          </Link>
        ))}
      </div>
    </main>
  );
}