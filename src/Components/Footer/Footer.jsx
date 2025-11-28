import React from "react";
import MainBtn from "../Mainbtn/MainBtn";

export default function Footer() {
  return (
    <footer className="border-t py-24 pb-6 px-6 md:px-12 lg:px-20 text-[#2E2F35]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div className="flex flex-col gap-4">
          <img
            src="/src/assets/images/Group.png"
            alt="eco"
            className="w-20 h-20 object-contain"
          />
          <p className="text-sm text-gray-600">
            Our paper is sourced from FSC-certified mills. We plant enough trees
            to more than double our paper usage.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide mb-3">COMPANY</h3>
          <div className="flex gap-10">
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>About us</li>
              <li>Partner program</li>
              <li>Career</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>Pricing</li>
              <li>Reviews</li>
              <li>Direct Mail Academy</li>
              <li>Success stories</li>
              <li>Terms & conditions</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold  mb-3">CONTACT</h3>

          <p className="text-sm flex items-center gap-2 text-gray-700">
            <span className="text-lg">📧</span> support@postpilot.com
          </p>

          <p className="text-sm text-gray-600 mt-3">
            Printed with ❤️ at our facility in South Carolina.
          </p>
        </div>
      </div>
      <hr />
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/images/postpilot_logo.png"
            alt="PostPilot"
            className="h-6 object-contain"
          />
          <p className="text-sm text-gray-600">All rights reserved</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <button className="w-full md:w-auto px-6 shadow-[6px_6px_0px_#2E2F35] border-2 border-[#2E2F35] rounded-[15px] py-3 bg-white text-black hover:bg-[#FF6D2C] hover:text-white transition-all duration-300">
            login
          </button>

          <button className="w-full md:w-auto text-white px-6 shadow-[6px_6px_0px_#2E2F35] border-2 border-[#2E2F35] rounded-[15px] py-3 bg-[#FF6D2C] hover:bg-white hover:text-black transition-all duration-300">
            Try it Risk-free
          </button>
        </div>
      </div>
    </footer>
  );
}
