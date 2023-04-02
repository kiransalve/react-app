import React, { useContext } from 'react';
import { CartContext } from '../../store/Context';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 && <p>Your cart is empty.</p>}
            {cart.map((item, index) => (
                <div key={index} className="cart-item">
                    <h3>{item.item.name}</h3>
                    <p>Size: {item.size}</p>
                    <div className="quantity">
                        <label>Quantity:</label>
                        <input type="number" min="1" value={item.quantity} readOnly />
                    </div>
                    <button className="remove" onClick={() => removeFromCart(item.item, item.size)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
