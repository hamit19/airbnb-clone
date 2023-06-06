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
      await axios.post("api/register", data);

      registerModal.onClose();
    } catch (err) {
      toast.error("Something went wrong!");
      console.log(err);
    }

    setIsLoading(false);
  };

  const bodyContent = () => (
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

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent()}
    />
  );
};

export default RegisterModal;
