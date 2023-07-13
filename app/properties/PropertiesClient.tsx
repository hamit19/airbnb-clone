"use client";

import { useCallback, useState } from "react";
import Heading from "../components/Heading";
import Container from "../components/container";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface PropertiesClientProps {
  currentUser?: SafeUser | null;
  listings: SafeListing[];
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  currentUser,
  listings,
}) => {
  const [deletingId, setDeletingId] = useState<string>("");
  const router = useRouter();

  const onDelete = useCallback(
    async (id: string) => {
      try {
        await axios.delete(`/api/listing/${id}`);

        toast.success("Property deleted");
        router.refresh();
      } catch (err) {
        toast.error("Something went wrong!");
      }

      setDeletingId("");
    },
    [router]
  );

  return (
    <Container>
      <Heading title='Properties' subtitle='List of your properties' />

      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {listings.map((listing) => (
          <ListingCard
            data={listing}
            key={listing.id}
            currentUser={currentUser}
            onAction={onDelete}
            actionId={listing.id}
            disabled={deletingId === listing.id}
            actionLabel='Delete property'
          />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient;
