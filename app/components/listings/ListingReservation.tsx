"use client";

import { Range } from "react-date-range";
import Calender from "../inputs/Calender";

interface ListingReservationProps {
  price: number;
  totalPrice: number;
  dateRange: Range;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className='bg-white border-[1px] rounded-xl border-neutral-200 overflow-hidden'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <span className='text-2xl font-semibold'>$ {price}</span>
        <span className='text-neutral-600 font-light'>night</span>
      </div>
      <hr />
      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onchange={(value) => onChangeDate(value.selection)}
      />
    </div>
  );
};

export default ListingReservation;
