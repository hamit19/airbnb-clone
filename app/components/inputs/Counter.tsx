"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  onChange,
  value,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) return;

    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className='flex flex-row justify-between select-none '>
      <div className='flex flex-col'>
        <span className='font-semibold text-md '>{title}</span>
        <span className='text-sm font-bold text-neutral-500 '>{subtitle}</span>
      </div>
      <div className='flex flex-row items-center justify-around gap-3'>
        <div
          onClick={onReduce}
          className='p-1 transition border-2 rounded-full cursor-pointer border-neutral-400 hover:opacity-60 text-neutral-600 '
        >
          <AiOutlineMinus />
        </div>
        <span className='text-xl font-light text-neutral-600 '>{value}</span>
        <div
          onClick={onAdd}
          className='p-1 transition border-2 rounded-full cursor-pointer border-neutral-400 hover:opacity-60 text-neutral-600 '
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
