import React, { useEffect, useState } from 'react';



export default function button() {
    let [lightSwitch, setMode] = useState({
        mode: 'Dark Mode',
    })
    return (
        <button
            onClick={(e) => {
                setMode(e => ({
                    ...e, mode: e.mode === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'
                }))
            }
            }>
            {lightSwitch.mode}
        </button>
    )
}

