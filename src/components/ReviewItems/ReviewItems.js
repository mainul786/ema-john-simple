import React from 'react';
import './ReviewItems.css';

const ReviewItems = ({ product }) => {
    const { name, img, quantity, price } = product;
    console.log(product)
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-container'>
                  <p>Price: {price}</p>
                  <p>Quantity: {quantity}</p>
                </div>
                <div className='delete-container'>
                        <button>Delete</button>
                </div>

            </div>

        </div>
    );
};

export default ReviewItems;