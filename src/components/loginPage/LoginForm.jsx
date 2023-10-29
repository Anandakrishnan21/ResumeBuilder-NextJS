"use client";
import React, { useState } from "react";
import { LoginInput } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import GoogleLoginBtn from "./GoogleLoginBtn";
import SeparatingLine from "../common/SeparatingLine";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <form className="w-10/12 md:w-4/12 lg:w-3/12 flex flex-col gap-6 relative">
      {LoginInput.map((input) => (
        <div className="relative" key={input.id}>
          <input
            className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-2 rounded"
            placeholder={input.placeholder}
            type={
              input.id === "2"
                ? showPassword
                  ? "text"
                  : "password"
                : input.type
            }
            required
          />
          {input.id === "2" && (
            <button
              className="absolute right-2 top-2 cursor-pointer"
              onClick={toggleVisibility}
            >
              {showPassword ? (
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-gray-500 hover:text-gray-700 duration-500"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="text-gray-500 hover:text-gray-700 duration-500"
                />
              )}
            </button>
          )}
        </div>
      ))}

      <button className="w-full bg-slate-900 rounded text-white hover:bg-slate-800 duration-500 p-2">
        Sign In
      </button>
      <SeparatingLine />
      <GoogleLoginBtn />
    </form>
  );
}

export default LoginForm;
