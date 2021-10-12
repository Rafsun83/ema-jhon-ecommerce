import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import Header from '../Header/Header'
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
    const [SearchProducts, setSearchProduct] = useState([])

    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json()
                .then(data => {
                    setSearchProduct(data);
                    setProduct(data);
                }))
    }, [])

    const handleAdtoCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key)
        let newCart = []
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, product]
        }
        else {
            product.quantity = 1
            newCart = [...cart, product]
        }
        // const NewCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }
    useEffect(() => {


        // console.log(saveddata);
        if (products.length) {
            const saveddata = getStoredCart()
            const StoredCart = [];
            for (const key in saveddata) {
                console.log(key, saveddata[key])

                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = saveddata[key]
                    console.log(quantity)
                    addedProduct.quantity = quantity;
                    console.log(addedProduct)
                    StoredCart.push(addedProduct);
                }


            }
            setCart(StoredCart);

        }

    }, [products])


    const handleSearch = event => {
        const Searchtext = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(Searchtext.toLowerCase()))
        setSearchProduct(matchedProduct)
        console.log(matchedProduct.length)

    }


    return (
        <div>
            <div className="Search-container">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="Search product" />
            </div>

            <div className="Shop-container">
                <div className="product-container">

                    {/* <h3>This is prodct: {products.length} </h3> */}
                    {
                        SearchProducts.map(product =>
                            <Product
                                key={product.key}
                                product={product}
                                handleAdtoCart={handleAdtoCart}


                            ></Product>)
                    }

                </div>
                <div className="order-container">
                    <div className="orders-item">
                        <Cart cart={cart}>
                            <Link to="/order">
                                <button className="purchase-btn">Order Review</button>
                            </Link>
                        </Cart>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Shop
