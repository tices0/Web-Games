import React from 'react'

function PauseButton({setOnGameMenu}) {
    return (
        <button className="pause" onClick={() => setOnGameMenu(true)}>
            <i className="fa-solid fa-pause"></i>
        </button>
    )
}

export default PauseButton