"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./button";

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset: boolean;
  buttonLabel?: string;
}

const EmptyState: React.FC<EmptyState> = ({
  title = "No exact matches!",
  subtitle = " Try changing or removing some of your filters ",
  showReset,
  buttonLabel,
}) => {
  const router = useRouter();

  return (
    <div className='h-[60vh] flex flex-col justify-center items-center gap-2 '>
      <Heading title={title} subtitle={subtitle} center />
      {showReset && (
        <div className='w-48 mt-4'>
          <Button
            label={buttonLabel || ""}
            onClick={() => router.push("/")}
            outline
          />
        </div>
      )}
    </div>
  );
};

export default EmptyState;
