import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="flex flex-row  justify-around">
        <h1 className=" text-gray-700 text-[10px] font-extrabold mt-5">
          LAKMAL C. BUDDHIMA
        </h1>
        <div className="flex justify-between gap-x-10 text-lg my-2 ml-40 ">
          <nav>Blog</nav>
          <nav>Projects</nav>
          <nav>NewsLetter</nav>
        </div>
      </div>
      <hr />
      <h1 className="text-custom-purple font-extrabold text-[110px]">
        TECH EMPIRE
      </h1>
      <h2 className="ml-5 -mt-6 text-gray-500">Review features in softwares</h2>
      <hr />
    </div>
  );
}

export default Navbar;
