import React from "react";

const MenuItem = ({ title, imageSrc }) => (
  <div
    style={{ backgroundImage: `url(${imageSrc})` }}
    className="m-2 w-60 h-60 flex justify-center items-center bg-center bg-cover hover:scale-125 ">
    <div className="p-4 flex flex-col justify-center items-center font-open bg-white opacity-75 ">
      <h2 className="p-2 text-2xl font-bold ">{title}</h2>
      <span className="px-6 py-2 border-2 border-eerieBlack font-bold hover:bg-eerieBlack hover:text-platinum duration-300 ease-in-out cursor-pointer">SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem;