import Image from "next/image";
import React from "react";

export default function Avatar() {
	return (
		<div className="flex flex-col items-center mt-2 -mx-2">
			<Image
				className="object-cover w-14 h-14 mx-2 rounded-full"
				src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
				width={500}
				height={500}
				alt="avatar"
			/>
			<h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
				John Doe
			</h4>
			<p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
				john@example.com
			</p>
		</div>
	);
}