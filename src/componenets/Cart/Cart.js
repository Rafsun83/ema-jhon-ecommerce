import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // const Total = cart.reduce((previous, cuurrent) => previous + cuurrent.price, 0)
    let total = 0;
    let Totalquantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price;
        Totalquantity = Totalquantity + product.quantity;
    }
    const Shipping = total > 0 ? 15 : 0;
    const tax = (total) * (15 / 100);
    // const Totaltax = tax + total;
    const grandTotal = (tax + Shipping + total);
    return (
        <div className="Cart__container">
            <h2 className="Order_summary">Order Summary </h2>
            <p>Items Orders: {Totalquantity}</p>
            <p>Total Price: {total.toFixed(2)}</p>
            <p>Shipping cost: {Shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Order Total : {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;

