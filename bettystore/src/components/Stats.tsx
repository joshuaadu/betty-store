import React from "react";

export default function Stats() {
  return (
    // <!-- Card Section -->
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* <!-- Grid --> */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {/* <!-- Card --> */}
        <div className="flex flex-col gap-y-3 rounded-xl border bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-slate-900 md:p-5 lg:gap-y-5">
          <div className="inline-flex items-center justify-center">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-500"></span>
            <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
              Revenue
            </span>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 sm:text-4xl lg:text-5xl">
              150
            </h3>
          </div>

          <dl className="flex items-center justify-center divide-x divide-gray-200 dark:divide-gray-700">
            <dt className="pr-3">
              <span className="text-green-600">
                <svg
                  className="inline-block h-4 w-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                  />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span>
              <span className="block text-sm text-gray-500">change</span>
            </dt>
            <dd className="pl-3 text-left">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                5
              </span>
              <span className="block text-sm text-gray-500">last week</span>
            </dd>
          </dl>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className="flex flex-col gap-y-3 rounded-xl border bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-slate-900 md:p-5 lg:gap-y-5">
          <div className="inline-flex items-center justify-center">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
              Successful conversions
            </span>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 sm:text-4xl lg:text-5xl">
              25
            </h3>
          </div>

          <dl className="flex items-center justify-center divide-x divide-gray-200 dark:divide-gray-700">
            <dt className="pr-3">
              <span className="text-green-600">
                <svg
                  className="inline-block h-4 w-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                  />
                </svg>
                <span className="inline-block text-sm">5.6%</span>
              </span>
              <span className="block text-sm text-gray-500">change</span>
            </dt>
            <dd className="pl-3 text-left">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                7
              </span>
              <span className="block text-sm text-gray-500">last week</span>
            </dd>
          </dl>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className="flex flex-col gap-y-3 rounded-xl border bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-slate-900 md:p-5 lg:gap-y-5">
          <div className="inline-flex items-center justify-center">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-red-500"></span>
            <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
              Failed conversions
            </span>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 sm:text-4xl lg:text-5xl">
              4
            </h3>
          </div>

          <dl className="flex items-center justify-center divide-x divide-gray-200 dark:divide-gray-700">
            <dt className="pr-3">
              <span className="text-red-600">
                <svg
                  className="inline-block h-4 w-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  />
                </svg>
                <span className="inline-block text-sm">5.6%</span>
              </span>
              <span className="block text-sm text-gray-500">change</span>
            </dt>
            <dd className="pl-3 text-left">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                7
              </span>
              <span className="block text-sm text-gray-500">last week</span>
            </dd>
          </dl>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
    // <!-- End Card Section -->
  );
}
