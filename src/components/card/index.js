import React from 'react';
import './style.css'

const Card = ({hero}) => {
    return (
        <div className="card">
            <h2> {hero.name} </h2>
            <p> {hero.description} </p>
        </div>
    )
}

export default Card;