import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[80px] border-2 flex items-center">
      <h3>MyNotes</h3>
      <div>
        <ul className="flex items-center">
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="/">
            <li>Create</li>
          </Link>

          <Link href="/">
            <li></li>
          </Link>
        </ul>
      </div>
      <div className="flex border-2 justify-between gap-[8px] items-center">
        <div className="bg-red-200 rounded-full w-[40px] h-[40px]"></div>
        <p>Ritesh Kumar</p>
      </div>
    </div>
  );
};

export default Navbar;
