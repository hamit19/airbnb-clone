"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  formatPrice?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  register,
  required,
  errors,
  formatPrice,
}) => {
  return (
    <div className='relative w-full'>
      {formatPrice && (
        <BiDollar
          size={24}
          className='absolute text-neutral-700 top-2 left-5'
        />
      )}

      <input
        type={type}
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=' '
        className={`
            peer
            w-full
            rounded-lg
            p-4
            outline-none
            border-2
            transition
            duration-150
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${errors[id] ? "border-rose-500" : `border-neutral-300`}
            ${errors[id] ? "focus:border-rose-500" : `focus:border-neutral-700`}
        `}
      />
      <label
        className={`
            absolute
            top-4
            font-semibold 
            -translate-y-3
            z-10
            text-md
            scale-100
            origin-[0]
            transition
            duration-150
            ${formatPrice ? "left-9" : "left-4"}
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${errors[id] ? "text-rose-500" : "text-zinc-400"}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
