import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
     <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
