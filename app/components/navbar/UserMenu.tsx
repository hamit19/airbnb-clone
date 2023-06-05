"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative select-none'>
      <div className='flex flex-row items-center gap-3'>
        <div className='hidden px-4 py-2 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100 '>
          <span>Airbnb is your home</span>
        </div>
        <div
          onClick={toggleMenu}
          className='flex items-center justify-center gap-3 p-3 transition border rounded-full cursor-pointer md:px-2 md:py-1 border-neutral-200 hover:shadow-md '
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
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
          <>
            <div className='flex flex-col gap-1'>
              <MenuItem onClick={() => {}} label='Login' />
              <MenuItem onClick={() => {}} label='Sing up' />
            </div>
          </>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
