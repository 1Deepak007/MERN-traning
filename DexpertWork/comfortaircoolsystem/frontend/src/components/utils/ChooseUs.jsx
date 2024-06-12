import React from 'react'

const ChooseUs = (props) => {
    return (
        <div className="grid gap-1">
            <h3 className="text-lg font-bold">{props.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                {props.detail}
            </p>
        </div>
    )
}

export default ChooseUs
