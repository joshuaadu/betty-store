import React from "react";
import NavigationToggle from "./NavigationToggle";
import BreadCrumb from "./BreadCrumb";

export default function SideBarToggle() {
  return (
    // <!-- Sidebar Toggle -->
    <div className="sticky inset-x-0 top-0 z-20 border-y bg-white px-4 dark:border-gray-700 dark:bg-gray-800 sm:px-6 md:px-8 lg:hidden">
      <div className="flex items-center py-4">
        {/* <!-- Navigation Toggle --> */}
        <NavigationToggle />

        {/* <!-- End Navigation Toggle --> */}

        {/* <!-- Breadcrumb --> */}
        <BreadCrumb />
        {/* <!-- End Breadcrumb --> */}
      </div>
    </div>
    // <!-- End Sidebar Toggle -->
  );
}
