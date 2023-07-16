const ImageUploadLoader = () => {
  return (
    <div className='rounded-xl bg-neutral-100 absolute p-20 inset-0'>
      <div className='animate-pulse flex flex-col gap-3 items-center justify-center'>
        <div className='w-16 h-16 bg-neutral-200 rounded-lg '></div>
        <div className='w-40 py-[4px] rounded bg-neutral-200'></div>
      </div>
    </div>
  );
};

export default ImageUploadLoader;
