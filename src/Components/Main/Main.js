import React from "react";
import './Main.css';
import Data from "../../Data/Data";
import Card from "./card";

export default function Main(){
    const cards=Data.map(item=>{
        return(
            <Card key={item.id} item={item}/>
        )
    })
    return (
        <div className="container">
            {cards}
        </div>
    )
}