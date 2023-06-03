"use client";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className='w-full p-2 transition border rounded-full shadow-sm cursor-pointer md:w-auto hover:shadow-md'>
      <div className='flex flex-row items-center justify-between '>
        <div className='px-2 text-sm font-semibold '>
          <span>Anywhere</span>
        </div>
        <div className='flex-1 hidden px-6 text-sm font-semibold text-center border-x sm:block'>
          <span>Any Week</span>
        </div>
        <div className='flex items-center gap-3 pl-6 pr-2 text-sm text-gray-600 '>
          <span className='hidden sm:block'>Add guests</span>

          <div className='p-2 text-white rounded-full bg-rose-500'>
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
