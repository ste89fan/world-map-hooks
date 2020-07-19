import React from 'react'

function Button({handleAddToList}) {
    return (
        <span className="addTolist">
           <button onClick={handleAddToList} className="btn" type="button">add to list</button> 
        </span>
    )
}

export default Button
