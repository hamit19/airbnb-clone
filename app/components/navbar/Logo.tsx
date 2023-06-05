"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      className='hidden object-contain transition-all cursor-pointer md:block '
      width={100}
      height={100}
      src={"/images/logo.png"}
      alt='Airbnb Logo'
    />
  );
};

export default Logo;
