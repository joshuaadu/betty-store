import { useState } from "react";
import Image from "next/image";
import SearchBar from "../../components/UI/SearchBar";
import BellIcon from "../../components/icons/BellIcon";
import ArrowDownIcon from "../../components/icons/ArrowDownIcon";
import UserIcon from "../../components/icons/UserIcon";
import SignoutIcon from "../../components/icons/SignoutIcon";
import HamburgerIcon from "../../components/icons/HamburgerIcon";

export default function NavBar() {
	const [show, setShow] = useState(false);
	const [profile, setProfile] = useState(false);

	return (
		<nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between relative z-10 mb-6">
			<div className="flex w-full justify-between">
				<div className="w-2/3 sm:w-2/5 sm:h-12">
					<SearchBar />
				</div>
				<div className="w-1/2  flex">
					<div className="w-full flex items-center pl-8 justify-end">
						<div
							className="flex items-center relative cursor-pointer shadow-bg"
							onClick={() => setProfile(!profile)}
						>
							<div className="rounded-full">
								{profile ? (
									<ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
										<li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
											<div className="flex items-center">
												<UserIcon />
												<span className="text-sm ml-2">My Profile</span>
											</div>
										</li>
										<li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
											<div className="flex items-center">
												<SignoutIcon />
												<span className="text-sm ml-2">Sign out</span>
											</div>
										</li>
									</ul>
								) : (
									""
								)}
								<div className="relative pl-10 sm:p-0 ">
									<Image
										className="rounded-full h-10 w-10 object-cover"
										src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
										width={500}
										height={500}
										alt="avatar"
									/>
									<div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
								</div>
							</div>
							<p className="hidden sm:block text-gray-800 text-sm mx-3">
								Jane Doe
							</p>
							<div className="cursor-pointer text-gray-600">
								<ArrowDownIcon />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div
				className="text-gray-600 mr-8 visible lg:hidden relative"
				onClick={() => setShow(!show)}
			>
				{show ? " " : <HamburgerIcon />}
			</div> */}
		</nav>
	);
}
