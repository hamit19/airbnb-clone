"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset='fml4xj83'
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className='relative flex flex-col items-center justify-center gap-4 p-20 overflow-hidden transition border-2 border-dashed cursor-pointer rounded-xl text-neutral-600 border-neutral-300 hover:opacity-70'
          >
            <TbPhotoPlus size={50} />
            <span className='text-lg font-semibold text-neutral-400 '>
              Click to upload
            </span>
            {value && (
              <div className='absolute inset-0 w-full h-full overflow-hidden'>
                <Image
                  alt='Upload'
                  src={value}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
