import React from "react";
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import { toggleHambuguerVisible } from "../../redux/hamburguer/hamburguer.actions";

// Need to style this...

const HamburguerDropdown = ({toggleHambuguerVisible}) => (
  <div className="w-full h-auto bg-platinum border border-eerieBlack absolute top-20 left-0">
    <ul className='m-2 text-center text-eerieBlack'>
      <li><Link onClick={toggleHambuguerVisible} to="/shop">Shop</Link></li>
      <li><Link onClick={toggleHambuguerVisible} to="/collections">Collections</Link></li>
      <li><Link onClick={toggleHambuguerVisible} to="/cart">Cart</Link></li>
      <li><Link onClick={toggleHambuguerVisible} to="/about">About</Link></li>
      <li><Link onClick={toggleHambuguerVisible} to="/contact">Contact</Link></li>
    </ul>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleHambuguerVisible: () => dispatch(toggleHambuguerVisible())
})

export default connect(null, mapDispatchToProps)(HamburguerDropdown);