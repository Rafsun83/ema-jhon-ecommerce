import React from 'react';
import UseCart from '../Hooks/UseCart';
import UseProducts from '../Hooks/UseProducts';
import Cart from '../Cart/Cart'
import RivewItem from '../RivewItem/RivewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';



const Orderrivew = () => {
    const [products] = UseProducts()
    const [cart, setCart] = UseCart(products)
    const history = useHistory()
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }

    const handlePlaceOrder = () => {
        history.push("/shipping")

        // setCart([])
        // clearTheCart()

    }

    return (
        <div className="Shop-container">
            <div className="product-container">
                {
                    cart.map(product => <RivewItem
                        handleRemove={handleRemove}
                        product={product}></RivewItem>)
                }
            </div>

            <div className="order-container">
                <div className="orders-item">
                    <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className="purchase-btn">Process to shipping</button>
                    </Cart>
                </div>

            </div>
            {/* <h3>Total products: {products.length}</h3>
            <h4>TotalCart: {cart.length}</h4>
            <h3>Order rivew is here</h3> */}




        </div>

    );
};

export default Orderrivew;