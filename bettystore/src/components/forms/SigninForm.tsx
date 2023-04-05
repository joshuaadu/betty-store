"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { registerInputs, signinInputs } from "./defaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, signinSchema } from "./validation-schema";
import { useRouter } from "next/router";

export default function SignInForm() {
  const { status } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm({
    defaultValues: signinInputs,
    resolver: zodResolver(signinSchema),
  });
  const router = useRouter();
  console.log("watch", "\n", "errors", errors);
  console.log("status", status);
  const submitFormhandler = async (data: typeof signinInputs) => {
    console.log(data);
    try {
      const result = await signIn("credentials", data);
      if (result?.error) {
        console.log("sigin in error", result?.error);
      }
    } catch (error: any) {
      // show error toast message
      console.log(error);
    }
  };
  console.log("status", status);

  return (
    // {/* <!-- Form --> */}
    <form onSubmit={handleSubmit(submitFormhandler)}>
      <div className="grid gap-y-4">
        {/* <!-- Form Group --> */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm dark:text-white">
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              className="block w-full rounded-md border  px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              aria-describedby="email-error"
              {...register("email", { required: true })}
            />
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 flex ${
                !errors.email ? "hidden" : ""
              } items-center pr-3`}
            >
              <svg
                className="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
            {errors.email && (
              <p className="mt-2  text-xs text-red-600" id="email-error">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>
        {/* <!-- End Form Group --> */}

        {/* <!-- Form Group --> */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="mb-2 block text-sm dark:text-white"
            >
              Password
            </label>
            <a
              className="text-sm font-medium text-blue-600 decoration-2 hover:underline"
              href="../examples/html/recover-account.html"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="block w-full rounded-md border px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              aria-describedby="password-error"
              {...register("password", { required: true })}
            />
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 flex ${
                !errors.password ? "hidden" : ""
              } items-center pr-3`}
            >
              <svg
                className="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          {errors.password && (
            <p className="mt-2 text-xs text-red-600" id="password-error">
              {" "}
              {errors.password?.message}
            </p>
          )}
        </div>
        {/* <!-- End Form Group --> */}

        {/* <!-- Checkbox --> */}
        <div className="flex items-center">
          <div className="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="remember-me" className="text-sm dark:text-white">
              Remember me
            </label>
          </div>
        </div>
        {/* <!-- End Checkbox --> */}

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Sign in
        </button>
      </div>
    </form>
    //{/* <!-- End Form --> */}
  );
}
