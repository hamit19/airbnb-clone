"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useRentModal from "@/app/hooks/useRetnModal";
import { useRouter } from "next/navigation";
import useUserMenu from "@/app/hooks/useUserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<NavbarProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useUserMenu();

  const handleClick = useCallback(() => {
    setTimeout(() => {
      onClose();
    }, 3000);
  }, [onClose]);

  const onRent = useCallback(() => {
    if (!currentUser) return loginModal.onOpen();

    //open rent modal
    rentModal.onOpen();
  }, [rentModal, currentUser, loginModal]);

  return (
    <div className='relative select-none'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={onRent}
          className='hidden px-4 py-2 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100 '
        >
          <span>Airbnb is your home</span>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            isOpen ? onClose() : onOpen();
          }}
          className='flex items-center justify-center gap-3 p-3 transition border rounded-full cursor-pointer md:px-2 md:py-1 border-neutral-200 hover:shadow-md '
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className='
          rounded-xl
          shadow-md
          font-semibold
          text-sm
          w-[40vw]
          md:w-3/4
          absolute
          top-12
          right-4
          bg-white
          p-2
          
        '
        >
          <div className='flex flex-col gap-1' onClick={handleClick}>
            {currentUser ? (
              <>
                <MenuItem onClick={() => router.push("/")} label='Home' />
                <MenuItem
                  onClick={() => router.push("/trips")}
                  label='My trips'
                />
                <MenuItem
                  onClick={() => router.push("/favorites")}
                  label='My favorites'
                />
                <MenuItem
                  onClick={() => router.push("/reservations")}
                  label='My reservations'
                />
                <MenuItem
                  onClick={() => router.push("/properties")}
                  label='My properties'
                />
                <MenuItem
                  onClick={() => rentModal.onOpen()}
                  label='Airbnb my home'
                />
                <hr />
                <MenuItem onClick={() => signOut()} label='Logout' />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label='Login' />
                <MenuItem onClick={registerModal.onOpen} label='Sing up' />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
