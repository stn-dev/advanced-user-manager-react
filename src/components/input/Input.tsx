import React, { HTMLInputTypeAttribute } from 'react'
import style from './input.module.css'


type Props = {
    type: HTMLInputTypeAttribute,
    placeholder: string,
    name: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void

}

const Input = ({ type, placeholder, name, onChange, onBlur, onKeyUp }: Props) => {
    return (
        <input
            className={style.myInput}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            onKeyUp={onKeyUp}
            required
        />
    )
}

export default Input