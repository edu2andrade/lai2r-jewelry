import React from 'react';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
  <div className='cart-item w-full flex h-20 mb-4'>
    <img src={imageUrl} alt="item_added" className='w-1/3'/>
    <div className='item-details w-2/3 py-3 px-5 flex flex-col flex-start justify-center'>
      <span className='name'>{ name }</span>
      <span className='price'>{ quantity } x €{ price }</span>
    </div>
  </div>
)

export default CartItem;