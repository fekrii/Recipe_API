import React from "react";
import "./App.css";

const Recipe = ({title, calories, image}) => {
    return (
        <div className="box">
            <h1>{title}</h1>
            <p>Calories : {calories}</p>
            <img src={image} alt="..." />
        </div>
    );
}




export default Recipe;

