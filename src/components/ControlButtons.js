import React from 'react'

function ControlButtons({handleDeleteAll,handleConfirm}) {
    return (
        <div className="controlButtons">
            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={handleDeleteAll}>Delete All</button>
        </div>
    )
}

export default ControlButtons
