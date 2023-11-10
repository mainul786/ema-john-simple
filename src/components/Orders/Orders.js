import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = id =>{
       const remaining = cart.filter(product => product.key !== id);
       setCart(remaining);
       deleteFromDb(id);
    }

    const clearCart = () =>{
        setCart([]);
        clearTheCart();
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
                {
                    cart.length === 0  &&  <h2>No more product. please  <Link to='/'>Shop more</Link></h2>  
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping'>
                        <button>Shipping</button>
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Orders;