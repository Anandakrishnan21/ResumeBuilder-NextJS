"use client";
import React from "react";
import Resume from "../../../public/resume.json";
import Lottie from "lottie-react";

function ResumeLottie() {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        className="w-5/6 md:w-96 h-96 shadow-cyan-500/50"
        animationData={Resume}
      />
    </div>
  );
}

export default ResumeLottie;
