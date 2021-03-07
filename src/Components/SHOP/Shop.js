import React, { useEffect, useState } from 'react';
import ProductCards from '../ProductsCard/ProductCards';
import fakeData from '../../fakeData/index';
import "./Shop.css"
import Cart, { buttonStyle } from '../CART/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from "react-router-dom";

const Shop = () => {
    const fakeDataFirst10 = fakeData.slice(0,10)
    const [displayProducts, setDisplayProducts] = useState(fakeDataFirst10);
    const [cartItem, setCartItem] = useState([]);

    const addProductToCart = (product)=> {
        const newCartItem = [...cartItem, product]
        setCartItem(newCartItem)
        const sameProduct = newCartItem.filter(pd => pd.key === product.key)
        addToDatabaseCart(product.key,sameProduct.length)
    }
    useEffect(() =>{
        const localSavedProduct = getDatabaseCart();
        const localSavedProductKeys = Object.keys(localSavedProduct);
        const newCartItem = localSavedProductKeys.map(exitingKey => {
           const previousCartProduct = fakeData.find(pd => pd.key === exitingKey)
            previousCartProduct.quantity = localSavedProductKeys[exitingKey];
            return previousCartProduct
        })
        setCartItem(newCartItem)
        
    },[])

    // feature
    return (
        <div className="shop-container" >
            <div className="pd-container">
                {displayProducts.map((item) => (
                    <ProductCards key={item.key} product={item} addProductToCart={addProductToCart} ></ProductCards>
                ))}
            </div>
            <div className="cart-container">
                <Cart cartItem={cartItem}>
                    <Link to="/review" style={buttonStyle}>Review your Order</Link>{" "}
                </Cart>
            </div>
        </div>
    );
};

export default Shop;