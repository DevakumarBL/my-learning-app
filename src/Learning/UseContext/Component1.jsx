import React, { useState } from 'react'
import { ProductContext } from './Context'
import Component2 from './Component2'

function Component1() {
    const [product, setProduct] = useState("Apple");

    return (
        <div>
            <h1>Component1</h1>
            <ProductContext.Provider value={{ product, setProduct }}>
                <Component2 />
            </ProductContext.Provider>
        </div>
    )
}

export default Component1
