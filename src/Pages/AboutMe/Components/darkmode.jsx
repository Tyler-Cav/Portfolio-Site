import React, { useState } from 'react';
import '../../../index.css'

let buttonText = "Dark Mode"

export default function Button(props) {
    return (
        <button
            className={props.classNameChange}
            onClick={() => {
                if (props.value === false) {
                    buttonText = "Light Mode"
                    props.setActive(true)
                } else {
                    buttonText = "Dark Mode"
                    props.setActive(false)
                }
            }
            }>
            {buttonText}
        </button >
    )
}

