import React from 'react';

const RivewItem = (props) => {
    const { name, quantity, price, img, key } = props.product;
    const { handleRemove } = props;

    return (
        <div className="product">
            <div>
                <img className="product_image" src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p className="price">price: {price}</p>
                <p>Quantity : {quantity}</p>
                <button className="purchase-btn" onClick={() => handleRemove(key)} >Remove</button>
            </div>
        </div>
    );
};

export default RivewItem;