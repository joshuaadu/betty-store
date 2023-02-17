"use client";
import React, { SyntheticEvent, useRef } from "react";
import CloseIcon from "../../../components/icons/CloseIcon";
import PlusIcon from "../../../components/icons/PlusIcon";
import { Button } from "../../../components/UI/Button";

import { Button as PRButton } from "primereact/button";

export default function AddProductModal() {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const openDialogHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
		if (dialogRef.current) {
			dialogRef.current.showModal()!;
		}
	};
	const closeDialogHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
		if (dialogRef.current) {
			dialogRef.current.close()!;
		}
	};

	return (
		<div>
			<dialog
				id="favDialog"
				ref={dialogRef}
				style={{ maxHeight: "100vh" }}
				className="h-screen p-8  md:w-2/3 mr-0 rounded-l-3xl backdrop:bg-gray-600 backdrop:bg-opacity-40 open:bg-white open:ring-2 open:ring-black/5 open:shadow-lg"
			>
				<div>
					<h2>Add new product</h2>
					<button
						onClick={closeDialogHandler}
						className="absolute top-8 right-8 rounded-md  text-white stroke-[3px] border-gray-500 bg-gray-400 p-2"
						value="cancel"
					>
						<span className="sr-only">Close</span>
						<CloseIcon />
					</button>
				</div>
				<form method="dialog">
					<p>
						<label>
							Favorite animal:
							<select>
								<option value="default">Choose…</option>
								<option>Brine shrimp</option>
								<option>Red panda</option>
								<option>Spider monkey</option>
							</select>
						</label>
					</p>
					<div>
						<button value="cancel">Cancel</button>

						<button id="confirmBtn" value="default">
							Confirm
						</button>
					</div>
				</form>
			</dialog>
			<p>
				<Button
					color="blue"
					id="showDialog"
					onClick={openDialogHandler}
					className="gap-3 "
				>
					<span className="text-blue-600 bg-white rounded w-8 h-8 stroke-2">
						<PlusIcon />
					</span>
					<span>NEW PRODUCT</span>
				</Button>
			</p>
			<PRButton  icon="pi pi-check" tooltip="Click me" className="flex gap-3">
				<h1>Me</h1>
			</PRButton>

			<output></output>
		</div>
	);
}
