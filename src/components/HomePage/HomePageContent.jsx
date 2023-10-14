import React from "react";
import CreateResumeBtn from "./CreateResumeBtn";

function HomePageContent() {
  return (
    <div className="font-custom w-5/6 md:w-1/2 flex flex-col text-base gap-2">
      <h1 className="text-3xl md:text-5xl font-medium leading-normal md:leading-relaxed">
        Create Custom Resume in Minutes
      </h1>
      <p className="text-sm md:text-base leading-normal">
        Unlock the power of effortless resume creation with Resume Wizard - your
        path to a winning career document!
      </p>
      <span className="text-slate-600 text-sm md:text-base leading-normal">
        For better experience{" "}
        <a className="text-blue-600 text-sm md:text-base leading-normal">
          Getting start the guild lines
        </a>
      </span>
      <CreateResumeBtn />
    </div>
  );
}

export default HomePageContent;
