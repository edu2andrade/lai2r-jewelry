import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register';

function App() {
  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="signin" element={<SignInAndRegisterPage />} />
    </Routes>
  </BrowserRouter>
  )
// Footer
}

export default App;
