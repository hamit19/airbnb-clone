import getCurrentUser from "./getCurrentUser";
import prisma from "@/app/libs/prismadb";

export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return [];

    const favoriteListings = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    const safeFavoriteListings = favoriteListings.map((favoriteListing) => ({
      ...favoriteListing,
      createdAt: favoriteListing.createdAt.toISOString(),
    }));

    return safeFavoriteListings;
  } catch (err: any) {
    throw new Error(err);
  }
}
