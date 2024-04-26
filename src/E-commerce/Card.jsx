import { useEffect, useState, useContext } from 'react'

import { CartContext } from "./ShoppingCart"

export const Card = () => {

  const {cart, setCart} = useContext(CartContext)
   const [total , setTotal]= useState(0);

   useEffect(()=>{

  setTotal(cart.reduce((acc, curr)=> acc + parseInt(curr.amt),0))

   },[cart])


  return (

    <>
    <div className='product-card'>
    <h3>Card Products</h3>
   
       {cart.map((product)=>(

<div className='Cart-conatiner' key={product.id}>

<div className='image'>
<img src={product.pic}></img>
</div>

<div className='nameofitem'>
  <p>{product.name}</p>
  <p>prize of Rs.{product.amt}</p>
</div>

</div>

       ))}


    <div className='product-total mt-3 pt-2'>

<h4>Total AMOUNT : {total}</h4>

    </div>
     
        
    </div>
    
    
    </>

  )
}
