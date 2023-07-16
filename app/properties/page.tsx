export const dynamic = "force-dynamic";

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title='Unauthorized!' subtitle='Please login' />;
  }

  const properties = await getListings({ userId: currentUser?.id });

  if (properties.length === 0)
    return (
      <EmptyState
        title='No properties found!'
        subtitle='Look like you have no properties'
      />
    );

  return (
    <div className='py-4'>
      <PropertiesClient listings={properties} currentUser={currentUser} />
    </div>
  );
};

export default PropertiesPage;
