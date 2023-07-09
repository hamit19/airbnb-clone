"use client";

import { Range, RangeKeyDict } from "react-date-range";

interface CalenderProps {
  value: Range;
  disabledDates: (value: RangeKeyDict) => void;
  onchange: Date[];
}

const Calender: React.FC<CalenderProps> = ({
  value,
  disabledDates,
  onchange,
}) => {
  return <div>Calender</div>;
};

export default Calender;
