"use client";
import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "Anywhere";
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);

      let diff = differenceInDays(end, start);

      if (diff === 0) return (diff = 1);

      return `${diff} Days`;
    }

    return "Any Week";
  }, [endDate, startDate]);

  const guestCountLabel = useMemo(() => {
    if (guestCount) {
      return ` ${guestCount} Guests `;
    }

    return "Add guests";
  }, [guestCount]);

  return (
    <div
      onClick={searchModal.onOpen}
      className='w-full p-2 transition border rounded-full shadow-sm cursor-pointer md:w-auto hover:shadow-md'
    >
      <div className='flex flex-row items-center justify-between '>
        <div className='px-2 text-sm font-semibold '>
          <span>{locationLabel}</span>
        </div>
        <div className='flex-1 hidden px-6 text-sm font-semibold text-center border-x sm:block'>
          <span>{durationLabel}</span>
        </div>
        <div className='flex items-center gap-3 pl-6 pr-2 text-sm text-gray-600 '>
          <span className='hidden sm:block'>{guestCountLabel}</span>

          <div className='p-2 text-white rounded-full bg-rose-500'>
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
