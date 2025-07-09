import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarPrincipal from './components/Navbar'

function App() {

  return (
    <>
      <NavbarPrincipal/>
      <ItemListContainer saludo ='Bienvenidos a B&N design!!' />
    </>
  )
}

export default App
