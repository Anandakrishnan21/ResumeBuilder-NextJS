import React from "react";

function Footer() {
  const current = new Date().getFullYear();
  return (
    <div className="font-custom">
      <p className="text-sm text-center p-4">
        © {current} All copyright reserved
      </p>
    </div>
  );
}

export default Footer;
