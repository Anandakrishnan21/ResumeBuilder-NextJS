"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import LoginBtn from "../HomePage/LoginBtn";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div
      className={`w-full font-custom sticky top-0 z-[10] bg-white p-2 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <header className="max-w-7xl flex justify-between items-center p-1 mx-auto">
        <h1 className="text-xl font-bold">reResume</h1>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-10">
            <li>Create Resume</li>
            <li>Resume Template</li>
            <li>
              <LoginBtn />
            </li>
          </ul>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleButton}>
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>
      {isOpen && (
        <motion.div className="md:hidden" animate={isOpen ? "open" : "closed"}>
          <motion.div
            variants={variants}
            className="bg-black text-white p-2 rounded"
          >
            <ul className="flex flex-col space-y-5">
              <li>Create Resume</li>
              <li>Resume Template</li>
              <li>
                <LoginBtn />
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Header;
