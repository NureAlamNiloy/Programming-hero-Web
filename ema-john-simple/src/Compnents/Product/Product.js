import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props)
    const {img ,key, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
               <img src={img} alt=""/>
            </div>
            <div className='product-name'>
                <h4 className='name'><Link to={'/product/'+key}>{name}</Link></h4>
                <br/>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order Now</small></p>
                {props.showAddToCart===true &&<button className='main-button' onClick={() =>
                props.handelAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
}
            </div>
        </div>
    );
};

export default Product;