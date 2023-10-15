import React from "react";
import RegistrationForm from "./RegistrationForm";
import Link from "next/link";

function RegistrationPageContent() {
  return (
    <div className="font-custom flex flex-col justify-center items-center gap-6 my-10">
      <div className="w-10/12 md:w-4/12 lg:w-3/12">
        <h1 className="text-2xl font-bold leading-normal md:leading-relaxed">
          Welcome to reResume
        </h1>
        <span className="text-sm md:text-base leading-normal">
          Sign Up to continue
        </span>
      </div>
      <RegistrationForm />
      <p className="text-slate-600 text-sm md:text-base leading-normal">
        Already have an account ? {""}
        <Link
          href="/auth/login"
          className="text-blue-600 hover:text-blue-800 duration-500text-sm md:text-base leading-normal"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default RegistrationPageContent;
