import { useState } from 'react'

import data from '../assets/E-commerceproduct.json'
import { Shopper } from './Shopper'


export const Home = () => {

  const[product] = useState(data)

  return (
    <div className='Product-Container'>

  {product.map((products)=> (

   <Shopper key={products.id} products = {products}/>

  ))}

    </div>
  )
}
