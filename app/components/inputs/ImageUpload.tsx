"use client";
import ImageUploadLoader from "@/app/components/loaders/ImageUploadLoader";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback, useState } from "react";
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
      {({ open, isLoading, results }) => {
        return (
          <div
            onClick={() => (isLoading ? null : open())}
            className={`relative flex flex-col items-center justify-center gap-4  h-[35vh] p-20 overflow-hidden transition  cursor-pointer rounded-xl text-neutral-600 border-neutral-300 hover:opacity-70 ${
              isLoading ? "border-none shadow-md " : "border-2 border-dashed"
            }`}
          >
            {!isLoading && open ? (
              <>
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
              </>
            ) : (
              <ImageUploadLoader />
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
