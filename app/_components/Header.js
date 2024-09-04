import React from "react";
import Image from "next/image";
function Header() {
  return (
    <div>
      <header className="bg-gray-800">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 ">
          <Image src="/logo.svg" width={100} height={80} />

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                
                <li>
                  <a
                    className="text-blue-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-blue-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Upload{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-blue-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    About Us{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-blue-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
              <h1 className="flex flex-auto bg-gradient-to-r from-red-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-2xl">
                  MySync
                </h1>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
