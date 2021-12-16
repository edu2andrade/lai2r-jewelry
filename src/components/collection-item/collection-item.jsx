import React from "react";
import Button from '../button/button';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="flex flex-col items-center h-80">
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="my-4 w-56 h-72 flex items-end bg-center bg-cover hover:opacity-70 duration-300 ease-in-out"
    >
      <div className="pt-8 flex justify-between w-full h-2">
        <span className="mb-8">{name}</span>
        <span>{price}</span>
      </div>
    </div>
    <Button
      text='ADD TO CART'
      styles='mt-2 w-full bg-camel text-platinum hover:bg-platinum border border-camel'
    />
  </div>
)

export default CollectionItem;