import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, clearTheCart, getStoredCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';





const Shop = () => {
    const {products, count} = useLoaderData();
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const pages = Math.ceil(count / size);

    const clearCart = () =>{
        setCart([]);
        clearTheCart();
    }

    useEffect(()=>{
       const storedCart =  getStoredCart();
    //    console.log(storedCart);
    const savedCart = [];
       for(const id in storedCart){
        const addedProduct = products.find(product => product._id === id);
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
        const exists = cart.find(product => product._id === selectedProduct._id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];

        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =><Product
                    key={product._id}
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
           <div className='pegination'>
            <p>Current Page : {page}</p>
           {
                [...Array(pages).keys()].map(number=><button
                key={number}
                className={page === number && 'selected'}
                onClick={()=>setPage(number)}
                >{number}</button>)
            }
           </div>
        </div>
        
    );
};

export default Shop;