import React from "react";
import classNames from 'classnames'
import "./Button.scss";

export type ButtonProps = {
    type?: "primary" | "secondary" | "white"
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<ButtonProps> = ({ children, type = 'primary', onClick, }) => (
    <button onClick={onClick} data-testid="Button" className={classNames('qui-Button', `qui-Button--${type}`)} data-type={type}>
        { children }
    </button>
);

export default Button;