import React from "react";
import food from "../assets/main1.png";
import { BsCalendarDate } from "react-icons/bs";

const MainOne = () => {
  return (
    <>
      <div className="bg-secondary font-general">
        <div className="container py-15 sm:py-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[500px]">
            <div className="space-y-7 text-dark order-2 sm:order-1">
              <h1  data-aos="fade-up" className="text-5xl">
                Fresh & Healthy Food {""}{" "}
                <span className="text-secondaryDark font-less text-7xl">
                  Delivery
                </span>
                {""} in Toronto
              </h1>
              <ul  data-aos="fade-up" data-aos-delay="200" className="font-less lg:pr-64">
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
                     <button data-aos="fade-up" data-aos-delay="700"  className="btn glass " onClick={()=>document.getElementById('my_modal_5').showModal()}>Reserve Now   <BsCalendarDate className="text-lg" /> </button>
 <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
  <div className="modal-box mod">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
           <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
           </div>
              </div>
              <div className="order-1 sm:order-2" >
                     <img data-aos="fade-left" src={food} alt=""  className="w-[400px] sm:scale-125 sm:translate-y-4"/>
              </div>
    
          </div>
      
        </div>
        
      </div>
    </>
  );
};

export default MainOne;
