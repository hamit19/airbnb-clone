import getListings from "./actions/getListings";
import testingImage from "../public/images/modernFranceHouse.jpg";

import EmptyState from "./components/EmptyState";
import Container from "./components/container";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

const isEmpty = false;
export default async function Home() {
  // const listings = await getListings();
  const currentUser = await getCurrentUser();
  const listings: any = [
    {
      id: "kkdjww882!@81kk",
      title: "Modern Villa in France",
      description:
        "this is a Modern and lux villa that can be hostage of 6 people ",
      imageSrc: testingImage,
    },
  ];

  if (isEmpty) {
    return <EmptyState showReset={true} />;
  }

  return (
    <Container>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:gird-cols-6 pt-28'>
        {listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            currentUser={currentUser}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
}
