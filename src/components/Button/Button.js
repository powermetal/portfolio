import React from 'react';
import './Button.css';

const Button = ({ url, icon, label }) => {

    return (
        <div>
            <a href={url} target="_blank"><button className="btn">{icon}<span>{label}</span></button></a>
        </div>
    )
}

export default Button
