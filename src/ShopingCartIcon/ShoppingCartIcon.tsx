import { ShoppingItem, useItems } from "../items-hook/item-context"
import { Icon } from "./shopping-cart"
import './index.css';
import { useState } from "react";


const CartItem = ({ item }: { item: ShoppingItem }) => {
    const { items } = useItems();

    const count = items.filter(i => i.id === item.id).length

    return <li className="cart-item">{item.name} x{count} - ${item.price} = ${count * item.price}</li>
}

const CartItems = () => {
    const { items } = useItems();
    const uniqueItems = [...new Set(items)]

    let sum = 0;

    items.forEach(item => {
        sum += item.price;
    })

    return <ul className="cart-items">
        {uniqueItems.map(item => <CartItem item={item} />)}
        <p className="cart-sum">Total: ${sum}</p>
    </ul>

}

export const ShopingCartIcon = () => {
    const { items } = useItems()
    const [show, setShow] = useState(false);


    return (<>
        <div className="cart-icon" onClick={() => setShow(!show)}>
            <Icon />
            {items.length > 0 ? <div className="counter">{items.length}</div> : <></>}
        </div>
        {show ? <CartItems /> : <></>}
    </>
    )
}

