// "use client";
import Image from "next/image";
import React from "react";
// import useAuthStore from "../../stores/useAuthStore";

export default function Avatar() {
  // console.log("Avatar component", useAuthStore?.getState()?.user);
  return (
    <div className="-mx-2 mt-2 flex flex-col items-center">
      <Image
        className="mx-2 h-12 w-12 rounded-full object-cover"
        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        width={200}
        height={200}
        alt="avatar"
      />
      <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
        {/* {useAuthStore?.getState()?.user?.name} */}
      </h4>
      {/* <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
				john@example.com
			</p> */}
    </div>
  );
}
