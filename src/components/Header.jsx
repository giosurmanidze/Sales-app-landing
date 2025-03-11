import React from "react";
import SalesAppLogo from "../icons/SalesAppLogo";

const Header = () => {
  return (
    <header className="bg-white flex flex-col items-center md:shadow-sm relative ">
      <div className="text-center bg-[#F0F5F7] w-full !py-2 !px-4">
        <p className="text-base xs:text-lg md:text-[18px] !py-2 font-medium text-[#6A787D]">
          სრულყოფილი პლატფორმა მზადების პროცესშია !
        </p>
      </div>

      <div className="w-[92%] mx-auto header ">
        <div className="flex items-center justify-start">
          <SalesAppLogo />
          <span className="!xs:text-3xl md:text-3xl font-bold !pl-3">
            SalesApp
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
