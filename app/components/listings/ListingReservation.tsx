"use client";

import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../button";

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
        <span className='font-light text-neutral-600'>night</span>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className='p-4'>
        <Button disable={disabled} label='Reserve' onClick={onSubmit} />
      </div>
      <div className='flex flex-row items-center justify-between p-4 font-semibold'>
        <span>Total</span>
        <span>$ {totalPrice.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ListingReservation;
