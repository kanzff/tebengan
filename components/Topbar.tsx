import Image from "next/image";
import React from "react";
// import { TebenganLogo } from "./TebenganLogo";

const Topbar = () => {
  return (
    <div className="z-50 topbar w-full flex h-[80px] items-center text-white bg-[#1D8AF5] fixed p-2">
      <div className="logo-section w-[240px] text-center ">
        <Image
          className="ml-3"
          src={'/tebengan.png'}
          alt='logo'
          width={147}
          height={24}
        />
        <div className="text-xs">Shuttle Dashboard</div>
      </div>
      <div className="header-section w-full flex justify-between p-4 items-center">
        <div className="font-semibold ml-8">User List</div>
        <div className="flex items-center gap-4">
          <div>Marjinal Kamaludin</div>
          <Image
            src={'/profile-pic.svg'}
            alt='profile'
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar
