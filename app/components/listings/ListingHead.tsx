import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  id: string;
  imageSrc: string;
  currentUser?: SafeUser | null;
  locationValue: string;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  id,
  imageSrc,
  currentUser,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={` ${location?.region}, ${location?.label} `}
      />
      <div className='w-full h-[60vh] relative rounded-xl overflow-hidden'>
        <Image
          fill
          alt={title}
          src={imageSrc}
          className='object-cover insert-0'
        />
        <div className='absolute right-5 top-5'>
          <HeartButton currentUser={currentUser} listingId={id} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
