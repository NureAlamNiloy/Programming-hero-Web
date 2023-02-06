import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import { useEffect } from 'react';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart , setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productkeys =Object.keys(savedCart);
        const previousCart = productkeys.map(pdkey => {
            const product = fakeData.find(pd => pd.key ===pdkey);
            product.quantity = savedCart[pdkey];
            return product;

        })
        setCart(previousCart);
    },[])

    const handelAddProduct = (product) =>{
        const toBeadded = product.key;
        const sameProduct = cart.find(pd => pd.key=== toBeadded);
        let count =1;
        let newCart;
        if (sameProduct) {
             count = sameProduct.quantity + 1 ;
            sameProduct.quantity = count;
            const others =cart.filter(pd => pd.key !== toBeadded);
            newCart= [...others, sameProduct];
        }
        else{
            product.quantity =1;
            newCart =[...cart, product ]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd =>
                         <Product key={pd.key} showAddToCart={true} handelAddProduct ={handelAddProduct}
                         product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}>
                <Link to='/review'>
                <button className='main-button'> Review Order</button>
                </Link>
            </Cart>
            </div>
        </div>
    );
};

export default Shop;