import React from "react";
import Navbar from "./Navbar";
const Button = ({name}) =>{
    return(
        <>
            <h2 style={{textAlign: "center"}}>i am {name} and this is passed via props</h2>
        </>
    );
}

export default Button;