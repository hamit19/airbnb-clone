"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavorites from "../hooks/useFavorites";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorite, toggleFavorites } = useFavorites({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorites}
      className='relative transition cursor-pointer hover:opacity-80'
    >
      <AiOutlineHeart
        size={28}
        className='absolute fill-white -top-[2px] -right-[2px]'
      />
      <AiFillHeart
        size={24}
        className={hasFavorite ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
