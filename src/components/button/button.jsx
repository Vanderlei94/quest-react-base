import React from "react";

const Button = ({ label }) => {
    const sayLabel = (label) => {
        alert(`A label desse botão é ${label}`)
    }
    
    return (
        <button onClick={() => sayLabel(label || 'Label padrão do botão')}>
            {label || 'Label padrão do botão'}
        </button>
    )
}

export default Button