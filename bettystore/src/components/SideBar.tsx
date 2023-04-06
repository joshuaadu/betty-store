import React from "react";
import NavLink from "./NavLink";
import UserIcon from "./icons/UserIcon";
import ArrowUpIcon from "./icons/ArrowUpIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import AccountIcon from "./icons/AccountIcon";
import ProductIcon from "./icons/ProductIcon";
import CalendarIcon from "./icons/CalendarIcon";
import DashboardIcon from "./icons/DashboardIcon";

export default function SideBar() {
  return (
    // <!-- Sidebar -->
    <div
      id="application-sidebar"
      className="hs-overlay scrollbar-y dark:scrollbar-y fixed bottom-0 left-0 top-0 z-[60] hidden w-64 -translate-x-full transform overflow-y-auto border-r border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-gray-700 dark:bg-gray-800 lg:bottom-0 lg:right-auto lg:block lg:translate-x-0"
    >
      <div className="px-6">
        <a
          className="flex-none text-xl font-semibold dark:text-white"
          href="#"
          aria-label="Brand"
        >
          <span className="font-extrabold">Betty</span>
          <span className="font-light">Store</span>
        </a>
      </div>

      <nav
        className="hs-accordion-group flex w-full flex-col flex-wrap p-6"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          <li>
            <a
              className="flex items-center gap-x-3.5 rounded-md bg-gray-100 px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
              href="javascript:;"
            >
              <DashboardIcon />
              Dashboard
            </a>
          </li>

          <li className="hs-accordion" id="users-accordion">
            <a
              className="hs-accordion-toggle flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
              href="javascript:;"
            >
              <UserIcon />
              Users
              <ArrowUpIcon />
              <ArrowDownIcon />
            </a>

            <div
              id="users-accordion-child"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            >
              <ul
                className="hs-accordion-group pl-3 pt-2"
                data-hs-accordion-always-open
              >
                <li className="hs-accordion" id="users-accordion-sub-1">
                  <a
                    className="hs-accordion-toggle flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                    href="javascript:;"
                  >
                    Sub Menu 1
                    <svg
                      className="ml-auto hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <svg
                      className="ml-auto block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </a>

                  <div
                    id="users-accordion-sub-1-child"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  >
                    <ul className="pl-2 pt-2">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hs-accordion" id="users-accordion-sub-2">
                  <a
                    className="hs-accordion-toggle flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                    href="javascript:;"
                  >
                    Sub Menu 2
                    <svg
                      className="ml-auto hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <svg
                      className="ml-auto block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </a>

                  <div
                    id="users-accordion-sub-2-child"
                    className="hs-accordion-content hidden w-full overflow-hidden pl-2 transition-[height] duration-300"
                  >
                    <ul className="pl-2 pt-2">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                          href="javascript:;"
                        >
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="hs-accordion" id="account-accordion">
            <a
              className="hs-accordion-toggle flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
              href="javascript:;"
            >
              <AccountIcon />
              Account
              <ArrowUpIcon />
              <ArrowDownIcon />
            </a>

            <div
              id="account-accordion-child"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            >
              <ul className="pl-2 pt-2">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                    href="javascript:;"
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                    href="javascript:;"
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                    href="javascript:;"
                  >
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="hs-accordion" id="projects-accordion">
            <a
              className="hs-accordion-toggle flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
              href="javascript:;"
            >
              <ProductIcon />
              Products
              <ArrowUpIcon />
              <ArrowDownIcon />
            </a>

            <div
              id="projects-accordion-child"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            >
              <ul className="pl-2 pt-2">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                    href="javascript:;"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                    href="javascript:;"
                  >
                    Product Details
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                    href="javascript:;"
                  >
                    Add Product
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <NavLink>
            <CalendarIcon />
            Calendar
          </NavLink>
          <NavLink>
            <svg
              className="h-3.5 w-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
            Documentation
          </NavLink>
        </ul>
      </nav>
    </div>
    // <!-- End Sidebar -->
  );
}
