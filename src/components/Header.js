import React from "react";

function Header({name, about}){
    return (
        <header>
        <h1>{name}</h1>
        <p>{about}</p>
        </header>
    )
}

export default Header;