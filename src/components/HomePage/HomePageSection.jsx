import React from "react";
import HomePageContent from "./HomePageContent";
import ResumeLottie from "./ResumeLottie";

function HomePageSection() {
  return (
    <>
      <div className="max-w-7xl md:h-screen flex flex-col justify-center items-center mx-auto mb-16 md:mb-0">
        <div className="flex flex-col-reverse md:flex-row justify-around items-center">
          <HomePageContent />
          <ResumeLottie />
        </div>
      </div>
    </>
  );
}

export default HomePageSection;
