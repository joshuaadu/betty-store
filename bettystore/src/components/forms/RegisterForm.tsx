"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { registerInputs } from "./defaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerType } from "./validation-schema";

import { api } from "~/utils/api";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const { status } = useSession();
  const registerUser = api.credential.create.useMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: registerInputs,
    resolver: zodResolver(registerSchema),
  });
  console.log(errors);
  console.log("status", status);
  const submitFormhandler = (data: typeof registerInputs) => {
    console.log(data);
    try {
      registerUser.mutate(data);
      router.push("/auth/signin");
    } catch (error) {}
  };
  return (
    <form className="w-[90%]" onSubmit={handleSubmit(submitFormhandler)}>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="label valid:label-ok invalid:label-error "
        >
          Your username
        </label>
        <input
          type="text"
          className="input valid:input-ok invalid:input-error"
          placeholder="Bonnie Green"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.name?.message}
          </p>
        )}
        {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Alright!</span> Username
            available!
        </p> */}
      </div>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="label valid:label-ok invalid:label-error "
        >
          Your email
        </label>
        <input
          type="text"
          className="input valid:input-ok invalid:input-error"
          placeholder=""
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.email?.message}
          </p>
        )}
        {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Alright!</span> Username
            available!
        </p> */}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="label valid:label-ok invalid:label-error"
        >
          Your password
        </label>
        <input
          type="password"
          className="input valid:input-ok invalid:input-error"
          placeholder=""
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.password?.message}
          </p>
        )}
        {/* <p className="mt-2 text-sm input-error_message">
            <span className="font-medium">Oops!</span> Username already
            taken!
        </p> */}
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirm_password"
          className="label valid:label-ok invalid:label-error"
        >
          Confirm your password
        </label>
        <input
          type="password"
          className="input valid:input-ok invalid:input-error"
          placeholder=""
          {...register("confirm_password", { required: true })}
        />
        {errors.confirm_password && (
          <p className="mt-2 text-xs italic text-red-500">
            {" "}
            {errors.confirm_password?.message}
          </p>
        )}
        {/* <p className="mt-2 text-sm input-error_message">
            <span className="font-medium">Oops!</span> Username already
            taken!
        </p> */}
      </div>
      <div className="mt-6 flex items-center justify-between gap-2">
        <button
          className=" w-full transform rounded-md  bg-gray-700 px-4 py-3 text-sm font-medium uppercase tracking-wider text-gray-100 transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none md:w-max"
          type="submit"
        >
          Register
        </button>
        {/* <Button
          className="p-button min-h-min text-sm"
          // size="large"
          onClick={() => void signIn("github", { callbackUrl: "/" })}
          label="Sign in with GitHub"
          raised
          severity="secondary"
        /> */}
        {status === "loading" && <p>Loading...</p>}
      </div>
    </form>
  );
}
