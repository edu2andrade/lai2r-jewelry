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
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectHamburguerVisible } from '../../redux/hamburguer/hamburguer.selectors';


const Header = ({ currentUser, hidden, visible }) => {
  return (
    <header className="p-2 flex justify-between items-center bg-platinum fixed top-0 left-0 right-0 z-10">

      <Link to="/">
        <Logo className='w-20 lg:w-24' />
      </Link>

      <nav className="p-2 flex items-end">

        {currentUser ? (
          <div className='cursor-pointer text-xs pr-2' onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link to="/signin">
            <SignInIcon className='w-7 h-7' />
          </Link>
        )}

        <CartIcon />
        {hidden ? null : <CartDropdown />}

        <HamburguerMenu />
        {visible ? <HamburguerDropdown /> : null}

      </nav>
    </header>
  )
}

const mapStateToProps = createStructuredSelector({ 
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  visible: selectHamburguerVisible,
})

export default connect(mapStateToProps)(Header);