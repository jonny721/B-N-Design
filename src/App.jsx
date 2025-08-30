import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarPrincipal from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import './css/itemDetail.css'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import './css/body.css'

function App() {

  return (
    <BrowserRouter>
    
    <CartProvider>      
    <NavbarPrincipal/>  
      <Routes>
        <Route path='/' element={<ItemListContainer saludo ='Bienvenidos a B&N design!!' />}/>
        <Route path='/categories/:category' element={<ItemListContainer saludo='Estas en la categoria: '/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </CartProvider>
      <Footer/>
      
    </BrowserRouter>
    
  )
}

export default App
