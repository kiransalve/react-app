import React from 'react'
import AddProduct from "../AddProduct/AddProduct"
import Cart from '../Cart/Cart'
import ProductList from '../ProductList/ProductList'

const Home = () => {
    return (
        <div>
            <AddProduct />
            <ProductList />
            <Cart />
        </div>
    )
}

export default Home