import React from "react";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item flex flex-col items-center h-80">
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="my-6 w-60 h-80 flex justify-center items-end bg-center bg-cover"
    >
      <div className="collection-footer pt-8 flex justify-between w-full h-8">
        <span className="mb-8">{name}</span>
        <span>{price}</span>
      </div>
    </div>
  </div>
)

export default CollectionItem;