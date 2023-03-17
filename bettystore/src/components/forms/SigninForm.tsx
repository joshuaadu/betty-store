"use client";
import React, { FormEvent, FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { Button } from "primereact/button";

export default function SignInForm() {
  const { data: sessionData, status } = useSession();
  console.log("status", status);
  const router = useRouter();
  const submitFormhandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(e.target.elements);
    const { username, password } = e.target.elements;
    // const formData = new FormData();
    // formData.append("username", username.value);
    // formData.append("password", password.value);
    const formData = {
      username: username.value,
      password: password.value,
    };
    console.log(formData);

    // console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:3003/auth/signin",
        {
          username: username.value,
          password: password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Submit form", response);
      // console.log("Submit form", response);
      if (response.status === 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("error", error);
    }

    // router.push("/dashboard");
  };
  return (
    <form className="w-[90%]" onSubmit={submitFormhandler}>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="label valid:label-ok invalid:label-error "
        >
          Your username
        </label>
        <input
          type="text"
          id="username"
          className="input valid:input-ok invalid:input-error"
          placeholder="Bonnie Green"
          required
        />
        {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Alright!</span> Username
            available!
        </p> */}
      </div>
      <div>
        <label
          htmlFor="password"
          className="label valid:label-ok invalid:label-error"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="input valid:input-ok invalid:input-error"
          placeholder=""
          required
        />
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
          Sign In
        </button>
        <Button
          className="p-button min-h-min text-sm"
          // size="large"
          onClick={() =>
            void signIn("github", { callbackUrl: "http://localhost:3000" })
          }
          label="Sign in with GitHub"
          raised
          severity="secondary"
        />
        {status === "loading" && <p>Loading...</p>}
      </div>
    </form>
  );
}
