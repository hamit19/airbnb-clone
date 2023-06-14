"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons/lib";
import qs from "query-string";

interface PropsCategoryBox {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<PropsCategoryBox> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [params, router, label]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-1
        border-b-2
      hover:text-neutral-800
        cursor-pointer
        transition
       ${selected ? "border-b-neutral-800" : "border-b-transparent"}
       ${selected ? "text-neutral-800" : "text-neutral-500"}
    `}
    >
      <Icon size={24} />
      <span className='text-xs font-medium'>{label}</span>
    </div>
  );
};

export default CategoryBox;
