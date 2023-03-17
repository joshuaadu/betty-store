"use client";
import { useState } from "react";
import Image from "next/image";
// import SearchBar from "../../components/UI/SearchBar";
// import BellIcon from "../../components/icons/BellIcon";
// import ArrowDownIcon from "../../components/icons/ArrowDownIcon";
// import UserIcon from "../../components/icons/UserIcon";
// import SignoutIcon from "../../components/icons/SignoutIcon";
// import HamburgerIcon from "../../components/icons/HamburgerIcon";
// import useAuthStore from "../../stores/useAuthStore";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <nav className="relative z-10 mb-6 flex h-16 items-center justify-end lg:items-stretch lg:justify-between">
      <div className="flex w-full justify-between">
        <div className="w-2/3 sm:h-12 sm:w-2/5">{/* <SearchBar /> */}</div>
        <div className="flex  w-1/2">
          <div className="flex w-full items-center justify-end pl-8">
            <div
              className="shadow-bg relative flex cursor-pointer items-center"
              onClick={() => setProfile(!profile)}
            >
              <div className="rounded-full">
                {profile ? (
                  <ul className="absolute left-0 mt-12 w-full rounded border-r bg-white p-2 shadow sm:mt-16 ">
                    <li className="flex w-full cursor-pointer items-center justify-between text-gray-600 hover:text-indigo-700">
                      <div className="flex items-center">
                        {/* <UserIcon /> */}
                        <span className="ml-2 text-sm">My Profile</span>
                      </div>
                    </li>
                    <li className="mt-2 flex w-full cursor-pointer items-center justify-between text-gray-600 hover:text-indigo-700">
                      <div className="flex items-center">
                        {/* <SignoutIcon /> */}
                        <span className="ml-2 text-sm">Sign out</span>
                      </div>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
                <div className="relative pl-10 sm:p-0 ">
                  <Image
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    width={500}
                    height={500}
                    alt="avatar"
                  />
                  <div className="absolute inset-0 m-auto mb-0 mr-0 h-2 w-2 rounded-full border border-white bg-green-400" />
                </div>
              </div>
              <p className="mx-3 hidden text-sm text-gray-800 sm:block">
                {/* {useAuthStore.getState().user?.name} */}
              </p>
              <div className="cursor-pointer text-gray-600">
                {/* <ArrowDownIcon /> */}
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
