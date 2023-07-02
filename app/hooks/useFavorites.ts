import { useCallback, useMemo } from "react";
import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface IUseFavorites {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorites = ({ listingId, currentUser }: IUseFavorites) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const hasFavorite = useMemo(() => {
    let list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [listingId, currentUser]);

  const toggleFavorites = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) return loginModal.onOpen();

      try {
        let request;

        if (hasFavorite) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();

        router.refresh();

        hasFavorite ? toast.error("Unliked!") : toast.success("Liked!");
      } catch (err) {
        toast.error("Something went wrong!");
      }
    },
    [currentUser, hasFavorite, loginModal, listingId, router]
  );

  return {
    hasFavorite,
    toggleFavorites,
  };
};

export default useFavorites;
