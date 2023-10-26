import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, clearTheCart, getStoredCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';


const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () =>{
        setCart([]);
        clearTheCart();
    }

    useEffect(()=>{
       const storedCart =  getStoredCart();
    //    console.log(storedCart);
    const savedCart = [];
       for(const id in storedCart){
        const addedProduct = products.find(product => product.key === id);
        // console.log(addedProduct)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
       }

       setCart(savedCart);
    }, [products])

    const handelAddToCart = selectedProduct =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.key === selectedProduct.key);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];

        }
        else{
            const rest = cart.filter(product => product.key !== selectedProduct.key)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.key);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =><Product
                    key={product.key}
                    product = {product}
                    handelAddToCart ={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
               
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/orders">
                        <button className='clear-cart'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;