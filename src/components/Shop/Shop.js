import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])

    const handelAddToCart = product =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
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
                <h2>Orders Summary</h2>
                <p>Cart Length: {cart.length}</p>
                
            </div>
        </div>
    );
};

export default Shop;