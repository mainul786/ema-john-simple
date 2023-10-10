import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handelAddToCart}) => {
    // console.log(product);
    const { name,  img, star, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className="product-name">{name}</p>
                <p>Seller:{seller}</p>
                <p>Ratings:<small>{star} start</small></p>
            </div>
            <button className='btn-cart' onClick={(()=>handelAddToCart(product))}>
                <p className='btn-text'>Add to Cart</p>
                 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;