import React, {useState} from 'react';

import { FaCartShopping } from "react-icons/fa6";

import Order from "./Order";

const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price));

    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}RUB</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>
                Тут пока пусто, положите сюда что-нибудь
            </h2>
        </div>
    )
}

export default function Header(props) {

    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className='logo'>House Staff</span>
                <ul className='nav'>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <FaCartShopping
                    onClick={() => setCartOpen(cartOpen = !cartOpen)}
                    className={`shop-cart-button ${cartOpen && 'active'}`}
                />
                <p className='order-value'>
                    {props.orders.length < 1 ? '' : '(' + props.orders.length + ')'}
                </p>

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                                showOrders(props) : showNothing()
                        }
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}

