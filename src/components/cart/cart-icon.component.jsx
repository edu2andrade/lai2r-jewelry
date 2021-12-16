import React from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-icon.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden }) => (
  <div
    onClick={toggleCartHidden}
    className="w-7 h-7 relative flex items-center justify-center cursor-pointer">
    <ShoppingIcon className="w-6 h-7" />
    <span className="absolute text-xs font-bold bottom-1">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);