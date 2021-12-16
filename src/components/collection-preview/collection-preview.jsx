import React from "react";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => (
  <div className="flex flex-col items-center mb-16">
    <h1 className="text-2xl mb-6 uppercase">{title}</h1>
    <div className="flex flex-wrap justify-center gap-6">
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