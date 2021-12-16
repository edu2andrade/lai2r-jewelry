import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as SignInIcon } from '../../assets/images/signin-icon.svg';
import HamburguerMenu from '../hamburguer/hamburguer.component';
import HamburguerDropdown from '../hamburguer/hamburguer-dropdown.component';
import CartIcon from '../cart/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';


const Header = ({ currentUser, hidden, visible }) => {
  return (
    <nav className="p-2 flex justify-between items-center bg-platinum fixed top-0 left-0 right-0 z-10">

      <Link to="/">
        <Logo className='w-20 lg:w-24' />
      </Link>

      <div className="p-2 flex items-center">

        {currentUser ? (
          <div className='cursor-pointer text-xs pr-2' onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link to="/signin">
            <SignInIcon />
          </Link>
        )}

        <CartIcon />
        {hidden ? null : <CartDropdown />}

        <HamburguerMenu />
        {visible ? <HamburguerDropdown /> : null}

      </div>
    </nav>
  )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }, hamburguer: { visible } }) => ({ // Advanced destructuring here :)
  currentUser,
  hidden,
  visible
})

export default connect(mapStateToProps)(Header);