"use client";
import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import ResumeTemplate from "./ResumeTemplate";
import ResumeForm1 from "./ResumeForm1";

const Resume = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const resumeTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "pt",
      orientation: "l",
    });

    doc.html(resumeTemplateRef.current, {
      callback: () => {
        doc.save("resume.pdf");
      },
    });
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center">
      <ResumeForm1 formData={formData} onChange={handleChange} />
      <button onClick={handleGeneratePdf}>Generate PDF</button>
    </div>
  );
};

export default Resume;
