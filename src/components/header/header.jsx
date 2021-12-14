import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-mini.png';

import { auth } from '../../firebase/firebase.utils';


class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false
    }
  }

  render() {
    const { visible } = this.state;
    const { currentUser } = this.props

    return (
      <nav className="p-2 flex justify-between items-center bg-platinum fixed top-0 left-0 right-0 z-10">

        <Link to="/">
          <img src={logo} alt="lai2r" />
        </Link>

        <div className="p-2 flex items-center">

          {currentUser ? (
            <div
              className='cursor-pointer text-xs pr-2'
              onClick={() => auth.signOut()}
            >
              Sign out
            </div>
          ) : (
            <Link to="/signin">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          )}

          <Link to="/shop">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </Link>

          <div onClick={() => this.setState({ visible: !visible })} className="pl-2 cursor-pointer">
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <div className="w-full h-auto bg-platinum absolute top-20 left-0" style={{ display: (visible ? 'block' : 'none') }}>
              <ul className='m-2 text-center text-eerieBlack'>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/collections">Collections</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default Header;



// ...or as a function:

// const Header = ({ currentUser }) => {
//   return (
//     <header className="p-2 flex justify-between items-center fixed top-0 left-0 right-0 z-10 bg-platinum">

//       <Link to='/'>
//         <img src={logo} alt="lai2r" />
//       </Link>

//       <nav className="p-2 flex items-center">

//         {
//           currentUser ? (
//             <div className="cursor-pointer text-xs pr-2" onClick={() => auth.signOut()}>Sign out</div>
//           )
//             :
//             (
//               <Link to='/signin'>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </Link>
//             )
//         }

//         <Link to='/shop'>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//           </svg>
//         </Link>

//         <div className="pl-2 cursor-pointer">
//           <svg
//             className="block h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//           <svg
//             className="hidden h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </div>
//       </nav>
//     </header>
//   )
// }