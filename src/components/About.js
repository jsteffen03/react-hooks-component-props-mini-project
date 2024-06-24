import React from "react";

function About({image}){
    return(
        <aside>
            { image ? <img src = {image} alt = "blog logo"></img> : <img src = "https://via.placeholder.com/215Links" alt = "blog logo"></img>}
        <p>About this blog</p>
        </aside>
    )
}

export default About;