import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cartItem;
    
    const formatAndFixed2Num = (num) => Number((num).toFixed(2))
   const totalItemPrice = formatAndFixed2Num(cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0));

   let shippingFee = 0;
   if(totalItemPrice < 80 && totalItemPrice > 0){
       shippingFee = 4.99
   }else if (totalItemPrice < 150 && totalItemPrice > 0) {
       shippingFee = 2.99;
   }
   const tax = formatAndFixed2Num(totalItemPrice * 0.1);

    return (
        <div className={"cart"}>
            <h3 className="title" >Order Summary</h3>
            <h3 className="title" >Ordered Items : {props.cartItem.length} </h3>
            <p><small>Itmes :{totalItemPrice}</small></p>
            <p><small>Shopping & Handling {shippingFee}</small></p>
            <p><small>Total Befor Tax : {totalItemPrice + shippingFee} </small></p>
            <p><small>Estimated Tax : {tax} </small></p>
            <h4>Order Total : {tax + totalItemPrice + shippingFee} </h4>
            <button>Review your Order</button>
        </div>
    );
};

export default Cart;