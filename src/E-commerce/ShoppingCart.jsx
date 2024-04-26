import { BrowserRouter, Route,Routes} from "react-router-dom"
import { Header } from "./Header"
import { Home } from "./Home"
import { Card } from "./Card"
import { createContext, useState } from "react"
import './ShoppingCart.css'

export const CartContext = createContext();


export const ShoppingCart = () => {

  const [cart , setCart] = useState([]);
  
  return (
    <>

   <CartContext.Provider value={{cart , setCart}}>
   
   <BrowserRouter>

<Header cart={cart}/>

<div className="box">

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/Shopping-cart-webiste" element={<Home/>}/>
<Route path="/Card" element={<Card/>}/>

</Routes>

</div>

</BrowserRouter>
   </CartContext.Provider>
    
    
    </>
 
  )
}

