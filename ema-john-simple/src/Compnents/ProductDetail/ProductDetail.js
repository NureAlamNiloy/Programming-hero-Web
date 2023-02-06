import React from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const{Productkey}= useParams();
    const product = fakeData.find(pdk => pdk.key===Productkey);
    console.log(product)
    return (
        <div>
            <h1>{Productkey} I am Product</h1>
    <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;