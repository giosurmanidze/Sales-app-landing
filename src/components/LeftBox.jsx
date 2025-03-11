import React from "react";
import CompanyLogos from "./CompanyLogos";

const LeftBox = () => {
  return (
    <div className="col-span-8 !lg:p-8 overflow-auto md:!pt-10 flex flex-col sm:justify-around md:justify-between !h-[80vh]">
      <div className="w-full sm:!px-10 md:!px-18 ">
      <h2 className="text-[30px] !pt-10 md:!pt-0 !pl-6 md:text-[48px] w-[80%] md:w-[65%] font-bold text-gray-800">
      ოპტიმიზირებული გაყიდვების მართვა ერთ პლატფორმაზე
        </h2>

        <p className="text-gray-600 !pl-6 md:w-[78%] !mb-8 text-base sm:text-lg w-full !mt-10">
          ჩვენი ინოვაციური SalesApp დაგეხმარებათ გაყიდვების პროცესის მართვაში:
          მართეთ კლიენტების მონაცემები, გარიგებები, კომუნიკაცია და ანალიტიკა
          მარტივად და სწრაფად. გაზარდეთ პროდუქტიულობა, ოპტიმიზირეთ სამუშაო
          პროცესები და გააუმჯობესეთ შედეგები!
        </p>

        <div className="w-full !pl-6 ">
          <button className="sm:w-auto bg-[#02B7FA] text-white !px-8 !py-3 rounded-lg hover:opacity-60 transition-all duration-300 !text-[18px] font-medium shadow-md hover:shadow-lg flex items-center justify-center !mt-10">
            <span>მოითხოვე დემო</span>
          </button>
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-800 !pt-20 w-full">
        <CompanyLogos />
      </div>
    </div>
  );
};

export default LeftBox;
