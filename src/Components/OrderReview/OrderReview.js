import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from "../../utilities/databaseManager";
import Cart, { buttonStyle } from '../CART/Cart';
import ProductReviewCard from '../ProductReviewCard/ProductReviewCard';
import "./orderReview.css"
import happyImg from "../../images/giphy.gif"

const OrderReview = () => {
    const [localCartData, setLocalCartData] = useState([])
    const [isImageShow, setIsImageShow] = useState(false)
    
    const orderComplete = () => {
        setLocalCartData([])
        processOrder()
        setIsImageShow(true)
    }

    const removeProduct = (key) => {
        const newCart = localCartData.filter(pd => pd.key !== key )
        setLocalCartData(newCart)
        removeFromDatabaseCart(key)
        console.log(this)
    }

    useEffect(() => {
        const localSavedData = getDatabaseCart();
        const localSavedDataKeys = Object.keys(localSavedData)
        const cartData = localSavedDataKeys.map(key => {
            const product = fakeData.find(pd => pd.key ===key)
            product.quantity = localSavedData[key]
            return product;
        })
        setLocalCartData(cartData)      
    },[])

    const productElement = (
        <div className="products">
            {localCartData.map((product) => (
                <ProductReviewCard key={product.key} product={product} removeProduct={removeProduct}></ProductReviewCard>
            ))}
        </div>
    );
    const HappyImageElement = (
        <div className="products">
            <img style={{display: "inherit", margin:"auto"}} src={happyImg} alt="" />
        </div>
    );

    return (
        <div className="product-container">
            {isImageShow ? HappyImageElement : productElement}
            <div className="cart">
                <Cart cartItem={localCartData}>
                    <button style={buttonStyle} onClick={orderComplete}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;