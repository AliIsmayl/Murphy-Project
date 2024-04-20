import React from 'react'
import './ModeBox.scss'

function ModeBox() {
    return (
        <div className='modeBox'>
            <input type="checkbox" id="toggle" />
            <label id="switch" for="toggle">
                <div id="circle"></div>
            </label>
        </div>
    )
}

export default ModeBox