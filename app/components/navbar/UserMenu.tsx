"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar";

const UserMenu = () => {
  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div className='hidden px-4 py-2 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100 '>
          <span>Airbnb is your home</span>
        </div>
        <div className='flex items-center justify-center gap-3 p-3 transition border rounded-full cursor-pointer md:px-2 md:py-1 border-neutral-200 hover:shadow-md '>
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
