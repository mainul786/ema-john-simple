import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async() =>{

    //get Products
const productData = await fetch('products.json');
const products = await productData.json();



// get from Localstorage
const savedCart= getStoredCart();
const initialCart = [];
for(const key in savedCart){
    const addedProduct = products.find(product => product.key === key);
    if(addedProduct){
        const quantity = savedCart[key];
        addedProduct.quantity = quantity;
        initialCart.push(addedProduct);

    }
    
}
return {products,  initialCart};
}