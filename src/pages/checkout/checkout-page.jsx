import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

// Reestructure all of this page...

const CheckoutPage = ({cartItems, total}) => (
  <main className="checkout-page w-full mt-24 h-4/5 flex flex-col items-center my-12 mx-auto">
    <div className="checkout-header w-11/12 h-10 flex justify-center border-b border-darkGray">
      <ul className="w-full flex items-center justify-between text-sm text-center font-bold">
        <li className="w-1/5">Product</li>
        <li className="w-1/5">Descr.</li>
        <li className="w-1/5">Quant.</li>
        <li className="w-1/5">Price</li>
        <li className="w-1/12">&#10006;</li>
      </ul>
    </div>
    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      ))
    }
    <div className="w-11/12 flex justify-end gap-3">
      <span className="text-lg font-bold">Total: {total}€</span>
      <StripeCheckoutButton price={total} />
    </div>

    <div className="text-red-700 text-center m-5">* Please use the following test credit card for payments: <br/>
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123</div>
    
  </main>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);