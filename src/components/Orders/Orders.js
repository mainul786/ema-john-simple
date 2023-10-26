import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { deleteFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = id =>{
       const remaining = cart.filter(product => product.key !== id);
       setCart(remaining);
       deleteFromDb(id);
    }
    
    return (
        <div className='shop-container'>
            <div className='product-container'>
                
                {
                    cart.map(product => <ReviewItems
                    key = {product.key}
                    product = {product}
                    handleRemoveItem = {handleRemoveItem}
                    >  </ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Orders;