import Image from "next/image";
import React from "react";
// import { TebenganLogo } from "./TebenganLogo";

const Topbar = () => {
  return (
    <div className="topbar w-full flex h-[80px] items-center text-white bg-[#1D8AF5] fixed p-2">
      <div className="logo-section w-[240px] text-center">
        <div className="text-xl">Tebengan</div>
        <div className="text-xs">Shuttle Dashboard</div>
      </div>
      <div className="header-section w-full flex justify-between p-4">
        <div>User List</div>
        <div className="flex">
          <div>Marjinal Kamaludin</div>
          {/* <Image
            src={'../public/profile-pic.svg'}
            alt='profile'
            width={40}
            height={40}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar
