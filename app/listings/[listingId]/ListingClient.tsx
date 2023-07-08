"use client";
import React, { useMemo } from "react";
import { categories } from "@/app/components/navbar/Categories";

import { SafeListing, SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import Container from "@/app/components/container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";

interface ListingClientParams {
  reservation?: Reservation[];
  currentUser?: SafeUser | null;
  listing: SafeListing & {
    user: SafeUser;
  };
}

const ListingClient: React.FC<ListingClientParams> = ({
  currentUser,
  listing,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing]);

  return (
    <Container>
      <div className='max-w-screen-lg pt-12 mx-auto'>
        <div className='flex flex-col gap-6'>
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
        </div>
        <div className='grid grid-cols-1 mt-6 md:grid-cols-7 md:gap-10'>
          <ListingInfo
            user={currentUser}
            category={category}
            description={listing.description}
            roomCount={listing.roomCount}
            guestsCount={listing.guestCount}
            bathroomCount={listing.bathroomCount}
            locationValue={listing.locationValue}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
