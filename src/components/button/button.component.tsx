import React from 'react';

interface Props {
    disabled?: boolean;
    text?: string;
    onClick(): any;
}

const Button = ({ disabled = false, text = '', onClick }: Props): JSX.Element => {
    return <button onClick={onClick} disabled={disabled}>
        { text }
    </button>
};

export default Button;
