import React, { useState } from 'react';
import ProductCards from '../ProductsCard/ProductCards';
import fakeData from '../../fakeData/index';
import "./Shop.css"
import Cart from '../CART/Cart';

const Shop = () => {
    const fakeDataFirst10 = fakeData.slice(0,10)
    const [displayProducts, setDisplayProducts] = useState(fakeDataFirst10);
    const [cartItem, setCartItem] = useState([]);

    const addProductToCart = (product)=> {
        const newCartItem = [...cartItem, product]
        setCartItem(newCartItem)
    }

    // feature
    return (
        <div className="shop-container" >
            <div className="pd-container">
                {displayProducts.map((item) => (
                    <ProductCards product={item} addProductToCart={addProductToCart} ></ProductCards>
                ))}
            </div>
            <div className="cart-container">
                <Cart cartItem={cartItem}></Cart>
            </div>
        </div>
    );
};

export default Shop;