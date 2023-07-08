import { SafeUser } from "@/app/types";
import { IconType } from "react-icons/lib";
import Avatar from "../avatar";
import useCountries from "@/app/hooks/useCountries";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), { ssr: false });

interface ListingInfoProps {
  user?: SafeUser | null;
  description: string;
  roomCount: number;
  guestsCount: number;
  bathroomCount: number;
  locationValue: string;
  category?: {
    icon: IconType;
    label: string;
    description: string;
  } | null;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  roomCount,
  guestsCount,
  bathroomCount,
  locationValue,
  category,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className='flex flex-col col-span-4 gap-8'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row items-center gap-2 text-xl font-semibold text-neutral-800'>
          <span>Hosted by {user?.name}</span>
          <Avatar src={user?.image} />
        </div>
        <div className='flex flex-row gap-4 font-light text-neutral-400'>
          <span>{guestsCount} guests </span>
          <span>{roomCount} rooms </span>
          <span>{bathroomCount} bathrooms </span>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className='font-light text-md text-neutral-500'>
        <p>{description}</p>
      </div>
      <hr />
      {Map ? <Map center={coordinates} /> : <div className='py-[60px]'></div>}
    </div>
  );
};

export default ListingInfo;
