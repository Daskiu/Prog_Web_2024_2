import React from "react";
import './Header.css';
import logo from "../../assets/logo.png";
import ticket from "../../assets/ticket.png"
import profile from "../../assets/profile.png"
import order from "../../assets/order.png"

export function Header() {
    return (
        <header>
            <img className="logo" src= {logo}/>
            <ul className="words">
                <li><a className="links" href="">MENÚ</a></li>
                <li><a className="links" href="">PROMOCIONES</a></li>
                <li><a className="links" href="">NUESTRAS TIENDAS</a></li>
            </ul>
            <ul className="buttons">
                <li><a href=""><img className="ticket" src={ticket}/></a></li>
                <li><a href=""><img className="profile" src={profile}/></a></li>
                <li><a href=""><img className="order" src={order}/></a></li>
            </ul>
        </header>
    )
}