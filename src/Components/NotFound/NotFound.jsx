import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="relative w-full max-w-3xl p-10 rounded-2xl shadow-lg overflow-hidden bg-white border border-[#009387]/20">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-0 left-0 w-52 h-52 bg-[#009387] blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#2E2F35] blur-3xl rounded-full"></div>
        </div>

        <div className="relative text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-[#2E2F35]">404</h1>

          <span className="inline-block mt-4 mb-6 text-xs tracking-widest uppercase font-semibold text-white bg-[#009387] py-1 px-3 rounded-full">
            Page Not Found
          </span>

          <p className="text-lg md:text-xl text-[#2E2F35]/70 mb-10">
            Oops! The page you're looking for doesn’t exist — or has been moved.
          </p>

          <a
            href="/"
            className="inline-block px-8 py-3 text-sm font-semibold rounded-full bg-[#009387] text-white hover:bg-[#007e75] transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
}
