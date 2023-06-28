import prisma from "@/app/libs/prismadb";

async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings;
  } catch (err: any) {
    throw new Error(err);
  }
}

export default getListings;
