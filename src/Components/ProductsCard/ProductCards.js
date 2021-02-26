import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./productCardStyle.css"

const ProductCards = (props) => {
    const {name,img,seller,features,price,key} = props.product;
    return (
        <div>
            <div>
                <div id={key} className="card-cover">
                    <div className="image">
                        <img src={img} alt="" />
                    </div>
                    <div className="desc">
                        <h2 className="title">{name}</h2>
                        <p className="author">by:{seller} </p>
                        <div className="pricing_feature">
                            <div className="pricing">
                                <h3 className="price">${price}</h3>
                                <p className="stock">avilable Stock : {}</p>
                                <button className="add-to-card" onClick={() => props.addProductToCart(props.product)}>
                                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> add to card
                                </button>
                            </div>
                            <div className="feature">
                                <div className="review">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <ul className="feature-list">
                                    <h3>Feature</h3>
                                    {features.map((item) => (
                                        <li>{item.value}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;