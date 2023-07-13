import React from "react";
import EmptyState from "../components/EmptyState";
import getFavoriteListings from "../actions/getFavoriteListings";
import Container from "../components/container";
import getCurrentUser from "../actions/getCurrentUser";
import FavoriteClient from "./FavoriteClient";

const FavoritesPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0)
    return (
      <EmptyState
        title='No favorites found!'
        subtitle='Looks like you have no favorite listings'
      />
    );

  if (!currentUser) {
    return <EmptyState title='Unauthorized!' subtitle='Please login' />;
  }

  return <FavoriteClient listings={listings} currentUser={currentUser} />;
};

export default FavoritesPage;
