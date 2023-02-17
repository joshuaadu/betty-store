"use client";
import React, { FormEvent, FormEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
	const router = useRouter();
	const submitFormhandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Submit form");
		router.push("/dashboard");
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
			<button
				className="mt-6 px-4 py-3 w-full  md:w-max text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
				type="submit"
			>
				Sign In
			</button>
		</form>
	);
}
