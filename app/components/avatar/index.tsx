"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className='rounded-full'
      height={25}
      width={25}
      alt='Users avatar'
      src={"/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
