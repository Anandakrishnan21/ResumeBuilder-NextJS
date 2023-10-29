import React from "react";

function NextPreviousBtn() {
  return (
    <div className="flex items-center gap-2">
      <button className="bg-slate-900 flex items-center rounded text-white hover:bg-slate-800 duration-500 p-2 gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <p>Previous</p>
      </button>
      <button className="bg-slate-900 flex rounded text-white hover:bg-slate-800 duration-500 p-2 gap-1">
        <p >Next</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}

export default NextPreviousBtn;
