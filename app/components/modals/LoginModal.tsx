"use client";

import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../button";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    await signIn("credentials", { ...data, redirect: false }).then(
      (callback) => {
        setIsLoading(false);
        console.log(callback);
        if (callback?.ok) {
          toast.success("Logged in");
          router.refresh();
          loginModal.onClose();
        }

        if (callback?.error) {
          setIsLoading(false);
          toast.error(callback.error);
        }
      }
    );
  };

  const bodyContent = (
    <form className='flex flex-col gap-4'>
      <Heading title='Welcome back!' subtitle='Login to your account!' />

      <Input
        type='email'
        label='Email'
        id='email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        type='password'
        label='Password'
        id='password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </form>
  );

  const footerContent = (
    <div className='flex flex-col gap-2 mt-3'>
      <Button
        outline
        icon={AiFillGithub}
        label='Continue with Github'
        onClick={() => signIn("github")}
      />
      <div className='pt-2 text-center'>
        <span>
          Already have an account?{" "}
          <span
            onClick={registerModal.onClose}
            className='cursor-pointer text-neutral-800 hover:underline'
          >
            Log in
          </span>
        </span>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login '
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
