import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav from './components/nav';
import { ShopContxtProvider } from './context/shopContext';
function App() {
  return (
    <div className="App">
      <ShopContxtProvider>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </Router>
      </ShopContxtProvider>
    </div>
  );
}

export default App;
