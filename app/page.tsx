import getListings, { IListingParams } from "./actions/getListings";
import testingImage from "../public/images/modernFranceHouse.jpg";

import EmptyState from "./components/EmptyState";
import Container from "./components/container";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

const isEmpty = false;

interface HomeProps {
  searchParams: IListingParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (isEmpty) {
    return <EmptyState buttonLabel={"Remove all filters"} showReset={true} />;
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
};

export default Home;
