import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

type FactionPageProps = {
    params: Promise<{
        slug: string;
    }>
}

export default async function FactionPage({ params }: FactionPageProps) {
    const { slug } = await params;

    const faction = await prisma.faction.findUnique({
        where: { slug },
    });

    if (!faction) {
        notFound();
    }

    return (
    <main className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
      <Link href="/factions" className="text-sm text-cyan-400 hover:underline">
        ← Back to factions
      </Link>

      <section className="mt-8 max-w-3xl rounded-2xl border border-cyan-900/50 bg-zinc-900 p-8 shadow-lg shadow-cyan-950/30">
        <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 px-3 py-1 text-sm text-cyan-300">
          {faction.type}
        </div>

        <h1 className="text-5xl font-black tracking-tight">{faction.name}</h1>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          {faction.description}
        </p>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-black/30 p-4">
            <dt className="text-sm text-zinc-500">Headquarters</dt>
            <dd className="mt-1 font-semibold">
              {faction.headquarters ?? "Unknown"}
            </dd>
          </div>

          <div className="rounded-xl bg-black/30 p-4">
            <dt className="text-sm text-zinc-500">Influence</dt>
            <dd className="mt-1 font-semibold">{faction.influence}/5</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}