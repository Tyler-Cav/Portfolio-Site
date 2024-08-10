import React, { useState } from 'react';
import '../../../index.css'


export default function Button(props) {
    let [lightSwitch, setMode] = useState({
        mode: 'Dark Mode',
        active: true
    })

    return (
        <button
            className={props.classNameChange}
            onClick={() => {
                if (props.value === false) {
                    setMode(e => ({
                        mode: 'Light Mode'
                    }))
                    props.setActive(true)
                } else {
                    setMode(e => ({
                        mode: 'Dark Mode'
                    }))
                    props.setActive(false)
                }
            }
            }>
            {lightSwitch.mode}
        </button >
    )
}

