import React from "react";
import CollectionItem from "./collection-item";

const CollectionPreview = ({ title, items }) => (
  <div className="flex flex-col mb-8">
    <h1 className="text-2xl mb-6">{title.toUpperCase()}</h1>
    <div className=" flex flex-wrap justify-evenly">
      {
        items
          .filter((item, i) => i < 4)
          .map(({ id, ...otherItemsProps }) => (
            <CollectionItem key={id} {...otherItemsProps} />
          ))
      }
    </div>
  </div>
)

export default CollectionPreview;