import React from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-icon.svg';

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div
    onClick={toggleCartHidden}
    className="w-8 h-8 relative flex items-center justify-center cursor-pointer">
    <ShoppingIcon className="w-8 h-8" />
    <span className="absolute text-xs font-bold bottom-1">{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Selector (just pick a  small portion of our state) for counter into bag icon.
// Memoized with reselect in cart.selectors. It's better for performance reasons, but...
// Redux's mapStateToProps has a shallow equality check for every value in the object; 
// it won't replace values if they pass a shallow equality check which means 
// it won't needlessly re-render, but if we have transformation logic it's still valuable 
// to memoize it with a selector to save us running duplicate logic to get the same output.
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);