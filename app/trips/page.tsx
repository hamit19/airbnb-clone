import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import TripsClient from "./TripsClient";
export const dynamic = "force-dynamic";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  const reservations = await getReservations({ userId: currentUser?.id });

  if (!currentUser)
    return (
      <EmptyState
        title='Unauthorized'
        subtitle='Please login '
        showReset={false}
      />
    );

  if (reservations.length === 0)
    return (
      <EmptyState
        title='No trips found!'
        subtitle="Looks like you haven't reserved any trips!"
        showReset={false}
      />
    );

  return (
    <div className='py-4'>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </div>
  );
};

export default TripsPage;
