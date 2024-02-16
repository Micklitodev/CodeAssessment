import React from "react";


export default function Navbar() {
  return (
    <>
      <nav className="bg-white shadow-sm  mb-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center overflow-hidden">
            Code Assessment
          </a>
          <div
            className="hidden w-full md:block md:w-auto"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent">
              <li>
                <a
                  className="text-gray-600 hover:text-blue-500 dark:hover:text-blue-400"
                  href="/"
                >
                  Ticket Submission
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-500 dark:hover:text-blue-400"
                  href="/AdminView"
                >
                  Admin View
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}