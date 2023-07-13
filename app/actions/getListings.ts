import prisma from "@/app/libs/prismadb";

export interface IListingParams {
  userId?: string;
}

async function getListings(params: IListingParams) {
  try {
    let query: any = {};

    const { userId } = params;

    if (userId) {
      query.userId = userId;
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
  } catch (err: any) {
    throw new Error(err);
  }
}

export default getListings;
