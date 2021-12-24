import { Component } from "react";
// React Router Dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Auth from Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
// Components
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shoppage";
import CheckoutPage from "./pages/checkout/checkout-page";
import SignInPage from "./pages/sign-in/sign-in-page";
import RegisterPage from "./pages/register/register-page";

class App extends Component {
  unsubscribeFromAuth = null;

  // Store the state of user in our app: (open message channel)
  // This is how our app will know if auth changes in firebase
  componentDidMount() {
    const { setCurrentUser } = this.props;

    // onAuthStateChanged is a method from auth wich was imported from firebase...
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  // close the commnication between our app and firebase when unmount
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/signin"
            element={
              <SignInWrapper currentUser={this.props.currentUser}>
                <SignInPage />
              </SignInWrapper>
            }
          />
          <Route
            path="/register"
            element={
              <SignInWrapper currentUser={this.props.currentUser}>
                <RegisterPage />
              </SignInWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    );
    // Footer
  }
}

// Wrapper component for "Redirect" in React Route DOM v6 use of Navigate

const SignInWrapper = ({ children, currentUser }) => {
  return currentUser ? <Navigate to="/" replace /> : children;
};

// createStructredSelector is for the future in case of we need more states
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
