import React from 'react'

type Props = {
    content: string,
    styleClass: "edit" | "delete",
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ content, styleClass, onClick }: Props) => {

    return (

        <button
            onClick={onClick}
            className={`btn ${styleClass}`}
        >
            {content}
        </button>
    )
}

export default Button