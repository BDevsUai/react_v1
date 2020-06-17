import React from 'react';
import './style.css'

const Card = ({hero}) => {
    const featuredImg = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;

    return (
        <div className="card">
            <div className="card-header">
                <img src={featuredImg} alt={hero.name} />
            </div>
            <div className="card-body">
                <h2> {hero.name} </h2>
                <p> {hero.description} </p>
            </div>
        </div>
    )
}

export default Card;