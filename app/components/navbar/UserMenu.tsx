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

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<NavbarProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const toggleMenu = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    // if (!currentUser) return loginModal.onOpen();

    //open rent modal
    rentModal.onOpen();
  }, [rentModal]);

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
          onClick={toggleMenu}
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
          <div className='flex flex-col gap-1'>
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label='My trips' />
                <MenuItem onClick={() => {}} label='My favorites' />
                <MenuItem onClick={() => {}} label='My reservations' />
                <MenuItem onClick={() => {}} label='My properties' />
                <MenuItem
                  onClick={() => rentModal.onOpen}
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
