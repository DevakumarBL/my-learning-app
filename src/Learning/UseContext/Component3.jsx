import React from 'react'
import { useContext } from 'react'
import { ProductContext } from './Context'
function Component3() {
  const data = useContext(ProductContext)
  const{product}=data
  return (
    <div>
      <h1>Compontent3</h1>
      <p>Hi i'm receiving the Component1 product {product}</p>
    </div>
  )
}

export default Component3