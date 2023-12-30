"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Navigation from "./ui/Navigation";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="fixed w-full h-20 shadow bg-transparent">
        <div className="flex justify-between items-center h-full px-4 md:px-16 2xl:px-16">
          <Header menuOpen={menuOpen} />
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <Navigation />
            <div className="hidden sm:flex items-center">
              <ModeToggle />
            </div>
          </div>
          <motion.div
            onClick={handleNav}
            whileHover={{ scale: 1.1 }}
            className="sm:hidden cursor-pointer pl-24"
          >
            <AiOutlineMenu size={20} />
          </motion.div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen p-10 ease-in-out duration-500 bg-primary dark:bg-slate-800 rounded-r-md"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <motion.div
              onClick={handleNav}
              whileHover={{ scale: 1.1 }}
              className="text-white cursor-pointer"
            >
              <AiOutlineClose size={20} />
            </motion.div>
          </div>
          <div className="mt-10 flex justify-between items-center">
            <Header menuOpen={menuOpen} />
            <ModeToggle />
          </div>
          <div className="mt-10 text-sm text-white mb-16">
            <Navigation />
          </div>
          <Footer />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
