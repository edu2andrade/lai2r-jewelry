import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';

function App() {
  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
    </Routes>
  </BrowserRouter>
  )
// Footer
}

export default App;
