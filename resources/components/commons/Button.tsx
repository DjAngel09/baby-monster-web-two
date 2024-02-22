import React from 'react'

interface Props {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    type?: "submit" | "reset" | "button" | undefined 
}

export const Button = ({ children, onClick, type = 'button' }: Props) => {
    return (
        <button
            className='hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
