import { createContext, useState } from "react";
import React from 'react'

const CartContext = createContext()

const Context = ({ children }) => {
    const [cart, setCart] = useState([])
    const [product, setProduct] = useState([])

    const addToCart = (item, size) => {
        const existingItemIndex = cart.findIndex((items) => items.item && items.item.name === item.name && items.size === size)

        if (existingItemIndex !== -1) {
            const updatedCart = cart.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            })
            setCart(updatedCart)
        } else {
            const newCartItem = { item, size, quantity: 1 }
            setCart([...cart, newCartItem])
        }
    }

    const removeFromCart = (item, size) => {
        const existingItemIndex = cart.findIndex((items) => items.item && items.item.name === item.name && items.size === size)

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart.splice(existingItemIndex, 1)
            setCart(updatedCart)
        }
    }

    const productList = (products) => {
        setProduct(products)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, productList, product, removeFromCart }} >
            {children}
        </CartContext.Provider>
    )
}

export default Context
export { CartContext };