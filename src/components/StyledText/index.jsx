import React from "react";

const StyledText = ({ color, toUpperCase = true, text = 'Parágrafo de teste que será renderizado com cor e uppercase padrão' }) => (
  <p style={{ color }}>
    {toUpperCase ? text.toUpperCase() : text}
  </p>
);

export default StyledText;