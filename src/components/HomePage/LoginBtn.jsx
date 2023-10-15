import Link from "next/link";
import React from "react";

function LoginBtn() {
  return (
    <button className="border-2 border-black p-1 px-2 rounded md:hover:bg-slate-100">
      <Link href="/auth/login">Login</Link>
    </button>
  );
}

export default LoginBtn;
