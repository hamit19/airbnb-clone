import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import Container from "../components/container";
import ReservationsClient from "./ReservationsClient";

const ReservationPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return <EmptyState title='Unauthorized' subtitle='Please login ' />;

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0)
    return (
      <EmptyState
        title='No reservations found!'
        subtitle='Looks like you have no reservations on your properties'
      />
    );

  return (
    <Container>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </Container>
  );
};

export default ReservationPage;
