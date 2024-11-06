import React from "react";
import food from "../assets/main1.png";
import { BsCalendarDate } from "react-icons/bs";

const MainOne = () => {
  return (
    <>
      <div className="bg-secondary font-general">
        <div className="container py-16 sm:py-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            <div className="space-y-7 text-dark order-2 sm:order-1">
              <h1 className="text-5xl">
                Fresh & Healthy Food {""}{" "}
                <span className="text-secondaryDark font-less text-7xl">
                  Delivery
                </span>
                {""} in Toronto
              </h1>
              <ul className="font-less lg:pr-64">
                <li>
                  Experience Seckin's Restaurant & Bar
                  situated in the heart of Toronto.
                </li>
                <li>
                  A neighbourhood gem for casual elegant
                  dining.
                </li>
                <li>
                French Mediterranean inspired menu    complemented by an extensive wine list.
                </li>
              </ul>
              <div className="cursor-pointer hover:text-secondaryDark hover:scale-105 duration-300 " >
                     <button className="btn glass ">Reserve Now   <BsCalendarDate className="text-lg" /> </button>
           </div>
              </div>
              <div className="order-1 sm:order-2" >
                     <img src={food} alt=""  className="w-[400px] sm:scale-125 sm:translate-y-4"/>
              </div>
    
          </div>
      
        </div>
        
      </div>
    </>
  );
};

export default MainOne;
