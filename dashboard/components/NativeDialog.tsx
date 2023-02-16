"use client";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import CloseIcon from "./icons/CloseIcon";

export default function NativeDialog() {
	const [openDialog, setOpenDialog] = useState(false);
	const dialogRef = useRef<HTMLDialogElement>(null);

	const openDialogHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
		if (dialogRef.current) {
			setOpenDialog(true);
			dialogRef.current.showModal()!;
		}
	};

	return (
		<div>
			<dialog
				id="favDialog"
				ref={dialogRef}
				style={{ maxHeight: "100vh" }}
				className="h-screen p-8  md:w-2/3 mr-0 rounded-l-3xl backdrop:bg-red-300 backdrop:bg-opacity-40 open:bg-white open:ring-2 open:ring-black/5 open:shadow-lg"
				open={openDialog}
			>
				<div>
					<h2>Title</h2>
					<button
						onClick={(e) => setOpenDialog(false)}
						className="absolute top-8 right-8 rounded-full border border-gray-300 bg-gray-100 p-1"
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
				<button id="showDialog" onClick={openDialogHandler}>
					Show the dialog
				</button>
			</p>
			<output></output>
		</div>
	);
}
