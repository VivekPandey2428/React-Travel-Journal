import React from "react";
import './Main.css';
export default function Card(props){
    return(
        <div className="container-card">
            <div className="Image-container">
                <img src={props.item.imageUrl}></img>
            </div>
            <div className="card-desc">
                <div className="to_flex_desc">
                <p className="Country">{props.item.location}</p>
                <small>View on Google Maps</small>
                </div>
                <h2 className="Place">{props.item.title}</h2>
                <strong className="duration">{props.item.startDate +'-' + props.item.endDate}</strong>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}