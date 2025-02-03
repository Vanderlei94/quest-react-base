import React from "react";

const ParagraphFormatter = ({ color, toUpperCase = true, text = 'Parágrafo de teste que será renderizado com cor e uppercase padrão' }) => {
    return (
        <p style={{ color: color }}>{toUpperCase ? text.toUpperCase() : text}
        </p>
    )
}

export default ParagraphFormatter