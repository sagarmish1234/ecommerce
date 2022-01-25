import React,{useState} from 'react';
import './App.css';
import Home from './Common/Pages/Home/Home';

export const Cart = React.createContext();


function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
    <Cart.Provider value={[cart,setCart]}>
     <Home></Home> 
    </Cart.Provider>
    </>
  );
}

export default App;
