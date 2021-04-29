import React from 'react';
import './Keywords.css'

const Keywords = ({ keywords }) => {

    const renderKeywords = () => {
        return (
            <ul className="keywords">
                {keywords.map(k => <li>{k}</li>)}
            </ul>
        )
    }

    return (
        renderKeywords()
    )
}

export default Keywords
