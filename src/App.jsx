import Button from 'react-bootstrap/Button';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Allproducts from './pages/Allproducts';
import ViewProducts from './pages/ViewProducts';
import PageNotFound from './pages/PageNotFound';
import Whishlist from './pages/Whishlist';
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products' element={<Allproducts />} />
        <Route path='/viewProducts/:id' element={<ViewProducts />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/wishlist' element={<Whishlist />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
