import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating'

const Product = (props) => {
    // console.log(props)
    const { name, price, img, seller, stock, star } = props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">

            <div>
                <img className="product_image" src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>Product: {name}</h3>
                <p className="price"> Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Only stock quantity: {stock}</p>
                <Rating
                    className="product__rating"
                    emptySymbol="far fa-star Rating__icon"
                    fullSymbol="fas fa-star Rating__icon"
                    initialRating={star}

                    readonly
                ></Rating> <br />
                <button onClick={() => props.handleAdtoCart(props.product)} className="purchase-btn">{cartIcon} Add to cart</button>

            </div>


        </div>
    )
}

export default Product
