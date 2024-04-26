import { useContext } from "react"
import { AiFillStar} from 'react-icons/ai';
import { CartContext } from "./ShoppingCart";


export const Shopper = ({products}) => {
  
  const {cart, setCart} = useContext(CartContext)

  const Addtocart = () => {

     setCart([...cart, products])
    
  }

  const RemoveFromCart = () => {

    setCart(cart.filter((c)=> c.id !== products.id));

  }


  return (
    <div className='Shopping-product'>
      
    <div className='card' style={{width:"300px"}}>
      
     <img src={products.pic}  alt={products.name} className='card-img-top'/>
       
       <div className='card-body'>
       <p>{products.name}</p>
       <p>Price of {products.amt}</p>
             
             <div className="star d-flex">
          
          <span style={{color:"gold"}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
          <p className="mx-3">Ratings</p>

             </div>

           {cart.includes(products)?(
<button className='mt-2 w-75 border-0 p-1 text-white' id="RemoveFrom" onClick={RemoveFromCart}>Remove To Card</button>
           ):(<button className='mt-2 w-75 border-0 p-1 text-white' 
           id="Addto" onClick={Addtocart}>Add to cart</button>)}

       </div>

      </div>
   
   </div>
  )
}
