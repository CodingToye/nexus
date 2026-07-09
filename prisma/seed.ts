import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.faction.createMany({
    data: [
      {
        name: "Arasaka",
        slug: "arasaka",
        type: "Corporation",
        description:
          "A powerful Japanese megacorporation known for security, banking, manufacturing and political influence.",
        headquarters: "Tokyo",
        influence: 5,
      },
      {
        name: "Militech",
        slug: "militech",
        type: "Corporation",
        description:
          "A major American arms manufacturer and private military corporation with global reach.",
        headquarters: "Washington, D.C.",
        influence: 5,
      },
      {
        name: "Maelstrom",
        slug: "maelstrom",
        type: "Gang",
        description:
          "A violent gang based in Watson, known for extreme cyberware modification and black-market activity.",
        headquarters: "Watson",
        influence: 3,
      },
      {
        name: "Tyger Claws",
        slug: "tyger-claws",
        type: "Gang",
        description:
          "A powerful Night City gang with strong influence in Japantown and links to corporate interests.",
        headquarters: "Westbrook",
        influence: 4,
      },
      {
        name: "The Mox",
        slug: "the-mox",
        type: "Gang",
        description:
          "A gang formed to protect working girls and marginalised people, based around Lizzie's Bar.",
        headquarters: "Watson",
        influence: 3,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });