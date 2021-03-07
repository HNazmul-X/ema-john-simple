import React from 'react';
import "./ProductReviewCard.css"

const ProductReviewCard = (props) => {
    console.log(props);
    const {name, quantity, img,key} = props.product
    return (
        <div className="product-review-card">
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <div className="card-desc">
                <h2 className="name"> {name} </h2>
                <p className="quantity">quantity : {quantity}</p>
                <button onClick={() => props.removeProduct(key)} className="remove-button">
                    remove
                </button>
            </div>
        </div>
    );
};

export default ProductReviewCard;