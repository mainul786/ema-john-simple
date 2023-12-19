import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async() =>{

    //get Products
const productData = await fetch('http://localhost:5000/products');
const {products} = await productData.json();



// get from Localstorage
const savedCart= getStoredCart();
const initialCart = [];
for(const key in savedCart){
    const addedProduct = products.find(product => product._id === key);
    if(addedProduct){
        const quantity = savedCart[key];
        addedProduct.quantity = quantity;
        initialCart.push(addedProduct);

    }
    
}
return {products,  initialCart};
}