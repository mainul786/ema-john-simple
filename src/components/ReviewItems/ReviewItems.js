import React from 'react';
import './ReviewItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItems = ({ product, handleRemoveItem }) => {
    const { key, name, img, quantity, price } = product;

    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-container'>
                    <p>{name.slice(0, 10)}</p>
                  <p>Price: {price}</p>
                  <p>Quantity: {quantity}</p>
                </div>
                <div className='delete-container'>
                        <button onClick={()=>handleRemoveItem(key)} className='btn-delete'>
                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                </div>

            </div>

        </div>
    );
};

export default ReviewItems;