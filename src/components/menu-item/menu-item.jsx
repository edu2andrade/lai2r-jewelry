import React from "react";
import Button from '../button/button';

const MenuItem = ({ title, imageSrc }) => (
  <div
    style={{ backgroundImage: `url(${imageSrc})` }}
    className="w-60 h-60 flex justify-center items-center bg-center bg-cover">
    <div className="p-4 flex flex-col justify-center items-center border border-eerieBlack bg-white opacity-75 ">
      <h2 className="p-2 text-2xl font-bold ">{title.toUpperCase()}</h2>
      <Button
        text='Shop now'
        styles='uppercase font-bold text-platinum bg-eerieBlack border border-eerieBlack'
      />
    </div>
  </div>
)

export default MenuItem;