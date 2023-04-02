import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../store/Context'
import "./ProductList.css"

const ProductList = () => {
    const { product, addToCart } = useContext(CartContext);

    const handleQty = (item, size) => {
        addToCart(item, size)
    }

    return (
        <ul>
            {product.map((item) => (
                <li key={item.name} className="product-container">
                    <div className="product-name">
                        {item.name}
                    </div>
                    <div className="product-price">
                        Price : {item.price}
                    </div>
                    <button className="product-lqty" onClick={() => handleQty(item, "large")}>
                        Large0 {item.lqty}
                    </button>

                    <button className="product-mqty" onClick={() => handleQty(item, "medium")}>
                        Medium {item.mqty}
                    </button>

                    <button className="product-sqty" onClick={() => handleQty(item, "small")}>
                        Small {item.sqty}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default ProductList