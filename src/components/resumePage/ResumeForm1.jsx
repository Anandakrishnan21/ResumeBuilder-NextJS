"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useLocalStorage from "../localStorage/useLocalStorage";

function ResumeForm1() {
  const [value, setValue] = useState("");
  const [experience, setExperience] = useLocalStorage("experience", [
    {
      companyName: "",
      experienceDetails: "",
    },
  ]);

  const addExperience = (e) => {
    e.preventDefault();
    setExperience([...experience, { companyName: "", experienceDetails: "" }]);
  };

  const removeExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };
  return (
    <form className="font-custom text-sm w-5/12 bg-white p-2 border-2 border-gray-200 flex flex-col gap-6 my-10 py-10 rounded-xl">
      <div className="flex flex-col m-auto gap-2">
        <h1 className="text-lg font-semibold">Personal Details</h1>
        <div className="flex justify-around gap-2">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="First name"
              className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="gitHub">Github</label>
          <input
            type="url"
            placeholder="Github link..."
            className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="url"
            placeholder="LinkedIn link..."
            className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="portfolio">Portfolio</label>
          <input
            type="url"
            placeholder="portfolio link..."
            className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
          />
        </div>
      </div>
      <div className="w-5/6 flex flex-col m-auto gap-2">
        <h1 className="text-lg font-semibold">Education</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="collegeName">College Name</label>
          <input
            type="text"
            placeholder="College name..."
            className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="cgpa">Cgpa</label>
          <input
            type="number"
            placeholder="Cgpa/10"
            className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="schoolName">Higher Secondary School Name</label>
          <input
            type="text"
            placeholder="Higher secondary school name"
            className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="plus2Percentage">Plus two percentage</label>
          <input
            type="text"
            placeholder="Percentage"
            className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
          />
        </div>
      </div>
      <div className="w-5/6 flex flex-col m-auto gap-2">
        <h1 className="text-lg font-semibold">Technical Skills and Interest</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="skills">Skill details</label>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="border-2 border-gray-200 hover:border-gray-500 duration-500 rounded"
          />
        </div>
      </div>
      <div className="w-5/6 flex flex-col m-auto gap-2">
        <h1 className="text-lg font-semibold">Projects</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="schoolName">Project name</label>
          <input
            type="text"
            placeholder="Project name..."
            className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="schoolName">Date</label>
          <input
            type="date"
            placeholder="Project name..."
            className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="projectDetails">Project details</label>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="border-2 border-gray-200 hover:border-gray-500 duration-500 rounded"
          />
        </div>
      </div>
      <div className="w-5/6 flex flex-col m-auto gap-2">
        <h1 className="text-lg font-semibold">Experiences</h1>
        {experience.map((edu, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="experienceName">Company name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Company name..."
                className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="experienceDetails">Experience details</label>
              <textarea
                placeholder="Experience details..."
                rows={2}
                cols={3}
                name="experienceDetails"
                className="h-32 border-2 border-gray-200 hover:border-gray-500 duration-500 resize-none p-1.5 rounded"
              />
            </div>
            <div>
              <button
                onClick={() => removeExperience(index)}
                className="flex items-center gap-2 bg-slate-900 text-white p-1 px-2 rounded md:hover:bg-slate-800 duration-500"
              >
                <p>Delete</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <div className="flex gap-2">
          <button
            onClick={addExperience}
            className="flex items-center gap-2 bg-slate-900 text-white p-1 px-2 rounded md:hover:bg-slate-800 duration-500"
          >
            <p>Add</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-5/6 flex flex-col m-auto gap-2">
        <h1 className="text-lg font-semibold">Achievements</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="certificateName">Certificate name</label>
          <input
            type="text"
            placeholder="Certificate name..."
            className="w-full border-2 border-gray-200 hover:border-gray-500 duration-500 p-1.5 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="experienceDetails">Certificate details</label>
          <textarea
            placeholder="Certificate details..."
            rows={2}
            cols={3}
            className="h-32 border-2 border-gray-200 hover:border-gray-500 duration-500 resize-none p-1.5 rounded"
          />
        </div>
      </div>
      <div className="w-5/6 flex m-auto gap-2">
        <button className="flex items-center gap-2 border-2 border-black p-1 px-2 rounded md:hover:bg-slate-100">
          <p>Preview</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
        <button className="flex items-center gap-2 border-2 border-black p-1 px-2 rounded md:hover:bg-slate-100">
          <p>Generate Pdf</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default ResumeForm1;
