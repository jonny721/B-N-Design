import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarPrincipal from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import './css/itemDetail.css'

function App() {

  return (
    <BrowserRouter>
      <NavbarPrincipal/>
      <Routes>
        <Route path='/' element={<ItemListContainer saludo ='Bienvenidos a B&N design!!' />}/>
        <Route path='/categories/:category' element={<ItemListContainer saludo='Estas en la categoria:'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
