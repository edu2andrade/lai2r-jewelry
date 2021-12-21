import React from "react";

// need to style this better: image...

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price} }) => (
  <div className="checkout-item py-4 px-0 w-11/12 flex items-center justify-between h-24 border-b border-darkGray">
    <div className="image-container w-1/5 flex justify-center">
      <img className="bg-cover max-h-20" src={imageUrl} alt="item" />
    </div>
    <span className="name w-1/5 text-center">{name}</span>
    <span className="quantity w-1/5 text-center">{quantity}</span>
    <span className="price w-1/5 text-center">{price}€</span>
    <div className="remove-btn w-1/12 text-center cursor-pointer">&#10006;</div>
  </div>
)

export default CheckoutItem;