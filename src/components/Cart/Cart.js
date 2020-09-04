import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice=cart.reduce((total,prd)=>total+ prd.price,0);
    // anather way
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = Math.round(total / 10);
    const grandPrice = (total + shipping + tax).toFixed(2);
    return (
        <div>
            <h4 className='order'>order summery.</h4>
            <p className='order-summery'>Items ordered:{cart.length}</p>
            <p className='order-summery'>product Price:{total}</p>
            <p className='order-summery'><small>shipping cost:{shipping}</small></p>
            <p className='order-summery'><small>Tax and G.S.T Charge:{tax}</small></p>
            <p className='order-summery'>total Price:{grandPrice}</p>
           {
               props.children
           }

        </div>
    );
};

export default Cart;