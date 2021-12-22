import React from "react";
import Button from '../button/button'
import CartItem from "./cart-item.component";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems, dispatch }) => (
  <div className="cart-dropdown absolute w-56 h-80 flex flex-col items-center p-5 border border-eerieBlack bg-white top-16 right-5 z-10">
    <div className="cart-items h-56 flex flex-col overflow-auto">
      {
        cartItems.length ? 
        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
        :
        <span className="my-20 mx-auto">Your cart is empty...</span>
      }
    </div>
    <Link to="/checkout">
      <Button 
        onClick={() => {dispatch(toggleCartHidden())}} // when we don't connect the 2nd argument in connect function we can pass directly as a prop here
        text="GO TO CHECK-OUT" 
        styles="mt-4 text-platinum bg-darkGray border-darkGray" />
    </Link>
  </div>
);

// Memoizing state with reselect again
// createStructredSelector is for the future in case of we need more states
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);