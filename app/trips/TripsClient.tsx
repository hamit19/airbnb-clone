"use client";

import { useRouter } from "next/navigation";
import Heading from "../components/Heading";
import Container from "../components/container";
import { SafeReservation, SafeUser } from "../types";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";

interface TripsClientProps {
  reservations?: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string>();

  const onCancel = useCallback(
    async (id: string) => {
      try {
        await axios.delete(`/api/reservations/${id}`);
        toast.success("Reservation cancelled!");
        router.refresh();
      } catch (error: any) {
        toast.error(error?.response?.data?.error);
      }

      setDeletingId("");
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title='Trips'
        subtitle="Where you've been and where you're going"
      />
      <div className='grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {reservations?.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel='Cancel reservation'
            currentUser={currentUser}
            reservation={reservation}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
