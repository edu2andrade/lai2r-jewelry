import { Component } from 'react';
// React Router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Auth form Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// Components
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  
  unsubscribeFromAuth = null;

  // Store the state of user in our app: (open message channel)
  // This is how our app will know if auth changes in firebase
  componentDidMount() {
    // onAuthStateChanged is a method from auth wich was imported from firebase... 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state);
        })
      } else {
        this.setState({ currentUser: userAuth });
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
      <Header currentUser={this.state.currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="signin" element={<SignInAndRegisterPage />} />
      </Routes>
    </BrowserRouter>
    )
  // Footer
  }
}

export default App;
