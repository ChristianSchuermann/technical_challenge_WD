import React from "react";

function Navbar() {
  return (
    <nav>
      <div  className="shadow-md w-full   bg-[v]">
        <div className="md:flex items-center justify-between bg-[#303633] md:px-10 px-7">
        {" "}
          <div className="font-bold text-3xl curser-pointer flex items-center font-[Poppins] text-[#8BE8CB] bg-[#303633]">
            <span className="text-3x1 text-[#8BE8CB] mr-1 pt-2">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </span>
            The Phone Cave
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
