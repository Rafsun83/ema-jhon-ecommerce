import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    // const Total = cart.reduce((previous, cuurrent) => previous + cuurrent.price, 0)
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const Shipping = 15;
    const tax = (total) * (15 / 100);
    // const Totaltax = tax + total;
    const grandTotal = (tax + Shipping + total);
    return (
        <div>
            <h3>Order Summary </h3>
            <h5>Items Orders: {props.cart.length}</h5>
            <p>Total Price: {total.toFixed(2)}</p>
            <p>Shipping cost: {Shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;

