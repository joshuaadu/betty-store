import React, { ReactNode } from "react";

interface LinkProps {
  title: string;
  href: string;
}
interface IProps {
  title: string;
  links: LinkProps[];
}

export default function NavLinkNested({ links, title }: IProps) {
  return (
    <li className="hs-accordion" id="users-accordion">
      <a
        className="hs-accordion-toggle flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
        href="javascript:;"
      >
        <svg
          className="h-3.5 w-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
        </svg>
        Users
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
  );
}
