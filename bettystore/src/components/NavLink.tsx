import React, { ReactNode } from "react";

export default function NavLink({ children }: { children: ReactNode }) {
  return (
    <li>
      <a
        className="flex items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300"
        href="javascript:;"
      >
        {children}
      </a>
    </li>
  );
}
