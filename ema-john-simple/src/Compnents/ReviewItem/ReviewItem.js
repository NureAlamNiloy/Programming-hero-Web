import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, quantity, key, price} =props.product;
    return (
        <div className='review-item'>
            <h3 className='product-name'>{name}</h3>
            <h5>Quantity : {quantity}</h5>
            <p>${price}</p>
            <button 
            onClick={() => props.removeProduct(key)}
            className='main-button'>
                Remove</button>
        </div>
    );
};

export default ReviewItem;