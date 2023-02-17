import NativeDialog from "../../../components/NativeDialog";
import Form from "./Form";

export default function LoginPage() {
	return (
		<main className="h-full w-full flex justify-center items-center flex-1 font-sans">
			<section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-[24rem]">
				<div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
					<div className="px-6 py-6 md:px-8 md:py-0">
						<h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
							Sign In To{" "}
							<span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
								Betty Store
							</span>{" "}
							Dashboard
						</h2>

						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Consectetur obcaecati odio
						</p>
					</div>
				</div>

				<div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 text-">
					<Form />
				</div>
			</section>
			
		</main>
	);
}
