import React from "react";

function TemplatePage() {
  return (
    <div className="w-full flex flex-col items-center gap-2 mx-auto font-custom">
      <h1 className="text-3xl md:text-5xl font-medium leading-normal md:leading-relaxed">
        Select a Template
      </h1>
      <p className="text-slate-600 text-sm md:text-base leading-normal">
        choose a template to get start
      </p>
    </div>
  );
}

export default TemplatePage;
