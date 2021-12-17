import React from "react";

// Redux stuff here..
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import Button from '../button/button';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
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
        onClick={() => addItem(item)}
        text='ADD TO CART'
        styles='mt-2 w-full bg-camel text-platinum hover:bg-platinum border border-camel'
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);