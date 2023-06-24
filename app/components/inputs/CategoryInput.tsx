"use client";

import { IconType } from "react-icons/lib";

interface CategoryInputProps {
  onClick: (value: string) => void;
  selected: boolean;
  label: string;
  icon: IconType;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  onClick,
  selected,
  label,
  icon: Icon,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-xl  cursor-pointer transition border-2 hover:border-neutral-500 p-4 ${
        selected ? "border-neutral-500 " : " border-neutral-200 "
      }`}
    >
      <Icon size={30} />
      <span className='text-xs font-bold pt-2  '> {label}</span>
    </div>
  );
};

export default CategoryInput;
