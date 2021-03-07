import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/index'

const ProductDetails = (props) => {
    const {productKey} = useParams()
    const product = fakeData.find(selectedProduct => productKey === selectedProduct.key)
    console.log(product);

    return (
        <div style={{textAlign: 'center', width:"80%", margin:"auto",padding:"5rem"}}>
            <img src={product.img} alt=""/>
            <h1>{product.name}</h1>
        </div>
    );
};

export default ProductDetails;