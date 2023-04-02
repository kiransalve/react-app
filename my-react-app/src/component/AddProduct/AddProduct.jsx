import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../store/Context'
import "./AddProduct.css"

const AddProduct = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        price: "",
        lqty: "",
        mqty: "",
        sqty: "",
    })
    const handleOnchange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setUserInput({ ...userInput, [name]: value })
    }

    const [product, setProduct] = useState([])

    const duplicate = product.some((p) => p.name === userInput.name)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!duplicate) {
            setProduct([...product, userInput])
        } else {
            alert("Duplicate Name Not allowed..!")
        }
        setUserInput({
            name: "",
            price: "",
            lqty: "",
            mqty: "",
            sqty: "",
        })
    }

    const addProduct = useContext(CartContext)

    useEffect(() => {
        addProduct.productList(product)
    }, [product, addProduct])

    return (
        <div>
            <div className='header'>Add Product</div>
            <form className='add_product_container' onSubmit={handleSubmit}>
                <div className="product_name">
                    <label htmlFor="name">Name : </label>
                    <input type="text" name='name' autoComplete='off' value={userInput.name} onChange={handleOnchange} />
                </div>
                <div className="product_price">
                    <label htmlFor="price">Price : </label>
                    <input type="number" name='price' autoComplete='off' value={userInput.price} onChange={handleOnchange} />
                </div>
                <div className="product_size_qty">
                    <label htmlFor="large">Large : </label>
                    <input type="number" name='lqty' autoComplete='off' value={userInput.lqty} onChange={handleOnchange} />
                </div>
                <div className="product_size_qty">
                    <label htmlFor="medium">Medium : </label>
                    <input type="number" name='mqty' autoComplete='off' value={userInput.mqty} onChange={handleOnchange} />
                </div>
                <div className="product_size_qty">
                    <label htmlFor="small">Small : </label>
                    <input type="number" name='sqty' autoComplete='off' value={userInput.sqty} onChange={handleOnchange} />
                </div>
                <input type="submit" value="Add Product" />
            </form>

        </div>
    )
}

export default AddProduct