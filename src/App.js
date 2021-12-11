import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
    </Routes>
  </BrowserRouter>
  )

  // return (
  //   <Homepage />
  // );
}

export default App;
