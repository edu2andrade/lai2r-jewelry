import React from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-icon.svg';

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div
    onClick={toggleCartHidden}
    className="w-7 h-7 relative flex items-center justify-center cursor-pointer">
    <ShoppingIcon className="w-6 h-7" />
    <span className="absolute text-xs font-bold bottom-1">{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Selector (just pick a  small portion of our state) for counter into bag icon:
// Memoized with reselect in cart.selectors. It's better for performance reasons...
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);