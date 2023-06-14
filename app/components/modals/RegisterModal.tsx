"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../button";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const registerModal = useRegisterModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      await axios.post("/api/register", data);

      registerModal.onClose();
    } catch (err) {
      toast.error("Something went wrong!");
      console.log(err);
    }

    setIsLoading(false);
  };

  const bodyContent = (
    <form className='flex flex-col gap-4'>
      <Heading title='Welcome to Airbnb' subtitle='Create an account!' />
      <Input
        type='text'
        label='Name'
        id='name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
