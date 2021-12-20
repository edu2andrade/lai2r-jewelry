import React from "react";
import Button from '../button/button'
import CartItem from "./cart-item.component";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown absolute w-56 h-80 flex flex-col items-center p-5 border border-eerieBlack bg-white top-16 right-5 z-10">
    <div className="cart-items h-56 flex flex-col overflow-auto">
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <Button
      text="GO TO CHECK-OUT"
      styles="mt-4 text-platinum bg-darkGray border-darkGray" />
  </div>
);

// Memoising state with reselect again
// createStructredSelector is for the future in case of we need more states
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);