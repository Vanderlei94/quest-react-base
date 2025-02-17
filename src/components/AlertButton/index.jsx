import React from "react";

const AlertButton = ({ label }) => (
  <button onClick={() => alert(`A label desse botão é ${label || 'Label padrão do botão'}`)}>
    {label || 'Label padrão do botão'}
  </button>
);

export default AlertButton;