import React from "react";

const ResumeTemplate = React.forwardRef(({ formData }, ref) => {
  return (
    <div className="w-full font-custom  p-2 left-12 " ref={ref}>
      <h1 className="text-center text-2xl h-10 font-medium">
        {formData.name || "Joe Doe"}
      </h1>
      <div>
        <h1 className="border-b-2 border-black p-2 font-bold text-lg">
          Education
        </h1>
        <div className="p-4">
          <div className="flex gap-2">
            <h2 className="text-base font-bold">
              {formData.college ||
                "SCMS School of Engineering and Technology, Ernakulam, Kerala"}
            </h2>
            <span className="text-sm font-light">{formData.start || "20-10-2012"}</span>
            <span className="text-sm font-light">{formData.end || "12-04-2016"}</span>
          </div>
          <div>
            <h2>
              {formData.degree ||
                "Bachelor of Technology in Computer Science and Engineering"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ResumeTemplate;
