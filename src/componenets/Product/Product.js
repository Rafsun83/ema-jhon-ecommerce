import React from 'react'
import './Product.css'

const Product = (props) => {
    console.log(props)
    const { name, price, img, seller, stock } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>Product: {name}</h3>
                <p className="price"> Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Only stock quantity: {stock}</p>
                <button onClick={() => props.handleAdtoCart(props.product)} className="purchase-btn">Add to cart</button>
            </div>


        </div>
    )
}

export default Product
