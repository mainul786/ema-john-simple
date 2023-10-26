import React from 'react';
import './Cart.css';

const Cart = ({cart, clearCart, children}) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart){
        quantity = quantity + product.quantity;
        total = parseFloat(total + product.price * product.quantity);
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1 ).toFixed(2));
    const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>
            <h2>Orders Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:$ {total}</p>
            <p>Shipping:$ {shipping}</p>
            <p>Tax:$ {tax}</p>
            <p>Grand Total:$ {grandTotal.toFixed(2)}</p>
            <button onClick={clearCart} className='clear-cart'>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;