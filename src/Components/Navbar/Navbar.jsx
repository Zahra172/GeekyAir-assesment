import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50  border-b w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img
            src="/images/postPilot_logo.png"
            className="h-7"
            alt="Logo"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-menu"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded md:hidden hover:bg-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* MENU */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-menu">
          <ul className="flex flex-col md:flex-row md:items-center gap-4 font-medium p-4 md:p-0">

            
            <li className="relative">
              <button
                id="dropdownResourcesBtn"
                data-dropdown-toggle="dropdownResources"
                className="flex items-center gap-1 py-2 px-3 hover:text-orange-500"
              >
                Resources
                <svg className="w-4 h-4" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                </svg>
              </button>

              <div
                id="dropdownResources"
                className="z-20 hidden bg-white border rounded-lg shadow w-44 absolute mt-2"
              >
                <ul className="p-2 text-sm">
                  <li><a className="block p-2 hover:bg-gray-100">Dashboard</a></li>
                  <li><a className="block p-2 hover:bg-gray-100">Settings</a></li>
                  <li><a className="block p-2 hover:bg-gray-100">Earnings</a></li>
                  <li><a className="block p-2 hover:bg-gray-100">Sign out</a></li>
                </ul>
              </div>
            </li>

            
            <li>
              <a
                href="#"
                className="py-2 px-3 hover:text-orange-500"
              >
                Success story
              </a>
            </li>

            {/* Company Dropdown */}
            <li className="relative">
              <button
                id="dropdownCompanyBtn"
                data-dropdown-toggle="dropdownCompany"
                className="flex items-center gap-1 py-2 px-3 hover:text-orange-500"
              >
                Company
                <svg className="w-4 h-4" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                </svg>
              </button>

              <div
                id="dropdownCompany"
                className="z-20 hidden bg-white border rounded-lg shadow w-44 absolute mt-2"
              >
                <ul className="p-2 text-sm">
                  <li><a className="block p-2 hover:bg-gray-100">Dashboard</a></li>
                  <li><a className="block p-2 hover:bg-gray-100">Settings</a></li>
                  <li><a className="block p-2 hover:bg-gray-100">Earnings</a></li>
                  <li><a className="block p-2 hover:bg-gray-100">Sign out</a></li>
                </ul>
              </div>
            </li>

         
            <li>
              <a href="#" className="py-2 px-3 hover:text-orange-500">
                Pricing
              </a>
            </li>

            
            <li>
              <button className="px-5 border-2 border-gray-900 rounded-[15px] py-2 bg-white text-black hover:bg-orange-500 hover:text-white transition">
                Login
              </button>
            </li>

           
            <li>
              <button className="px-5 border-2 border-gray-900 rounded-[15px] py-2 bg-orange-500 text-white hover:bg-white hover:text-black transition">
                Create free account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
