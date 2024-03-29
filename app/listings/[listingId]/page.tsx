import getCurrentUser from "@/app/actions/getCurrentUser";
export const dynamic = "force-dynamic";

import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import React from "react";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <EmptyState
        showReset
        title='404 Not Found!'
        subtitle="The page that you're looking for is not exist!"
        buttonLabel='Get back to home'
      />
    );
  }

  return (
    <ListingClient
      reservations={reservations}
      currentUser={currentUser}
      listing={listing}
    />
  );
};

export default ListingPage;
