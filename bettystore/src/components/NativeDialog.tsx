"use client";
import React, { useRef } from "react";
import CloseIcon from "./icons/CloseIcon";
// import { Button } from "./UI/Button";

export default function NativeDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  //   const openDialogHandler = () => {
  //     if (dialogRef.current) {
  //       dialogRef.current.showModal()!;
  //     }
  //   };
  //   const closeDialogHandler = () => {
  //     if (dialogRef.current) {
  //       dialogRef.current.close()!;
  //     }
  //   };

  return (
    <div>
      <dialog
        id="favDialog"
        ref={dialogRef}
        style={{ maxHeight: "100vh" }}
        className="mr-0 h-screen  rounded-l-3xl p-8 backdrop:bg-gray-600 backdrop:bg-opacity-40 open:bg-white open:shadow-lg open:ring-2 open:ring-black/5 md:w-2/3"
      >
        <div>
          <h2>Title</h2>
          <button
            // onClick={closeDialogHandler}
            className="absolute top-8 right-8 rounded-md  border-gray-500 bg-gray-400 stroke-[3px] p-2 text-white"
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
        {/* <Button color="blue" id="showDialog" onClick={openDialogHandler}>
          Show the dialog
        </Button> */}
      </p>
      <output></output>
    </div>
  );
}
