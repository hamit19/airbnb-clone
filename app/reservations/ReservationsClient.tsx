"use client";

import { useCallback, useState } from "react";
import Heading from "../components/Heading";
import Container from "../components/container";
import ListingCard from "../components/listings/ListingCard";
import { SafeReservation, SafeUser } from "../types";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string>("");

  const onCancel = useCallback(
    async (id: string) => {
      try {
        await axios.delete(`/api/reservations/${id}`);

        toast.success("Reservation canceled!");

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
      <Heading title='Reservations' subtitle='Bookings on your properties' />

      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            disabled={reservation.id === deletingId}
            reservation={reservation}
            onAction={onCancel}
            actionId={reservation.id}
            actionLabel='Cancel guests reservation'
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationsClient;
