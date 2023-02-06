import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
     //const total = cart.reduce((total, prd) => total + prd.price, 0)
     let total = 0;
     for (let i = 0; i < cart.length; i++) {
         const product = cart[i];
         total = total + product.price * product.quantity;
         
     }

     let Shipping = 0;

     if(total>35){
         Shipping =4.88;
     }
     else if (total> 15){
         Shipping=6.00;
     } 
     else if(total >100){
         Shipping =12.46;
     }

     const text = Math.round(total / 10);

     const formatNumber =  num =>{
         const precision = num.toFixed(2);
         return Number(precision);
        
        }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>product Price : {total}</p>
            <p>Shipping Cost : {Shipping}</p>
            <p>Text+Vat : {text}</p>
            <p>Total price : {formatNumber(total + Shipping)}</p>
            <br/>
            {props.children}
        </div>
    );
};

export default Cart;