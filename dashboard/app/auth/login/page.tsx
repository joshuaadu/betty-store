import React from "react";

export default function LoginPage() {
	return (
		<main className="h-min-full pt-[20rem] w-full flex justify-center items-center flex-1 font-sans">
			<section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-[24rem]">
				<div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
					<div className="px-6 py-6 md:px-8 md:py-0">
						<h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
							Sign Up For{" "}
							<span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
								Project
							</span>{" "}
							Updates
						</h2>

						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Consectetur obcaecati odio
						</p>
					</div>
				</div>

				<div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 text-">
					<form className="w-[90%]">
						<div className="mb-6">
							<label
								htmlFor="username-success"
								className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
							>
								Your name
							</label>
							<input
								type="text"
								id="username-success"
								className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
								placeholder="Bonnie Green"
							/>
							<p className="mt-2 text-sm text-green-600 dark:text-green-500">
								<span className="font-medium">Alright!</span> Username
								available!
							</p>
						</div>
						<div>
							<label
								htmlFor="username-error"
								className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
							>
								Your name
							</label>
							<input
								type="text"
								id="username-error"
								className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
								placeholder="Bonnie Green"
							/>
							<p className="mt-2 text-sm text-red-600 dark:text-red-500">
								<span className="font-medium">Oops!</span> Username already
								taken!
							</p>
						</div>
						<button className="mt-6 px-4 py-3 lg:max-w-max text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
							subscribe
						</button>
					</form>
				</div>
			</section>
		</main>
	);
}
