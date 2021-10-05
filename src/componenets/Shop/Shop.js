import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'

import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([])
    const [Cart, setCart] = useState([])

    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json()
                .then(data => setProduct(data)))
    }, [])

    const handleAdtoCart = (product) => {
        const NewCart = [...Cart, product]
        setCart(NewCart)

    }


    return (
        <div>
            <div className="Shop-container">
                <div className="product-container">
                    <h3>This is prodct: {products.length} </h3>
                    {
                        products.map(product =>
                            <Product
                                key={product.key}
                                product={product}
                                handleAdtoCart={handleAdtoCart}


                            ></Product>)
                    }

                </div>
                <div className="order-container">
                    <div className="orders-item">
                        <h2>Order Summary</h2>
                        <h3>items Orders: {Cart.length}</h3>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Shop
