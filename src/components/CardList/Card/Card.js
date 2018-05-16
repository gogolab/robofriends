import React from "react";
import "./Card.css";

const Card = props => {
    return (
        <div className="card">
            <img
                src={`https://robohash.org/${props.username}`}
                alt={props.username}
            />
            <div>
                <h2 id="name">{props.name}</h2>
                <p id="email">{props.email}</p>
            </div>
        </div>
    );
};

export default Card;
