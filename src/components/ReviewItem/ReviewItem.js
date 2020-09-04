import React from 'react';

const ReviewItem = (props) => {
    console.log(props.product);
    const {name,key,price,quantity}=props.product;
    const itemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'8px',
        paddingBottom:'8px',
        marginLeft:'200px'

    }
    return (
        <div style={itemStyle} className="remove">
             <h3 className="product-name">{name}</h3>
                <p>Quantity{quantity}</p>
                <p><small>${price}</small></p>
            <button 
            onClick={()=>props.removeProduct(key)}
            className="main-button">
                Remove</button>
        </div>
    );
};
export default ReviewItem;