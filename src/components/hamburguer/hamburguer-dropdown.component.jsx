import React from "react";
import { Link } from 'react-router-dom';

// Need to style this...

const HamburguerDropdown = () => (
  <div className="w-full h-auto bg-platinum border border-eerieBlack absolute top-20 left-0">
    <ul className='m-2 text-center text-eerieBlack'>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/collections">Collections</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
);

export default HamburguerDropdown;