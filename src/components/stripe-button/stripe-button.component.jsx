import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JTjiSG07B5Ct3Geoiwj8bHT1e0I2AGegzWpmdUPmICKbncl3ZHBd1OWM5gyz6gQDN20ID5ASFncsZb59r6ehltW003eMtx8SE';

  const onToken = token => {
    console.log(token);
    alert("Payment Successfull");
  }

  return (
    <StripeCheckout 
      label= "Pay Now"
      name= "Lai2R Jewelry Store"
      billingAddress
      shippingAddress
      image='../../assets/images/logo.svg'
      description= {`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;