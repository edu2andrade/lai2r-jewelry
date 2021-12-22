import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

// need to style this better: image...

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem
  return (
  <div className="checkout-item py-4 px-0 w-11/12 flex items-center justify-between h-24 border-b border-darkGray">
    <div className="image-container w-1/5 flex justify-center">
      <img className="bg-cover max-h-20" src={imageUrl} alt="item" />
    </div>
    <span className="name w-1/5 text-center">{name}</span>
    <span className="quantity flex">
      <div onClick={() => removeItem(cartItem)} className="cursor-pointer">&#10094;</div>
       <span className="mx-3">{quantity}</span>
      <div onClick={() => addItem(cartItem)} className="cursor-pointer">&#10095;</div>
    </span>
    <span className="price w-1/5 text-center">{price}€</span>
    <div 
      onClick={() => clearItem(cartItem)}
      className="remove-btn w-1/12 text-center cursor-pointer">&#10006;</div>
  </div>
)}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);