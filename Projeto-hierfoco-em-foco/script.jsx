import React, { useState } from 'react';

const ToggleSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSection = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleSection}>
        {isVisible ? 'Esconder Seção' : 'Mostrar Seção'}
      </button>
      {isVisible && (
        <div id="section">
          <p>Esta é a seção que pode ser alternada.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleSection;   