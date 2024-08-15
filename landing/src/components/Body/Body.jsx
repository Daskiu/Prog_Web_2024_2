import React from "react";
import { Cards } from "../Card/Card";
import './Body.css'

export function Body() {
    return (
        <main>
            <h1 className="mainTitle">MENÚ</h1>
            <Cards/>
        </main>
    )
}