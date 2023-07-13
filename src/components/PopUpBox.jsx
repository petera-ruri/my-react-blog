import React, { useState } from 'react';

const PopupBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-wrapper">
      <img
        height='80px'
        src="https://cdn-icons-png.flaticon.com/256/4856/4856386.png"
        alt="Popup Image"
        onClick={togglePopup}
      />
      {isOpen && (
        <div className="popup-content">
          <h2>Popup Content</h2>
          <p>This is the content of the popup box.</p>
          <button onClick={togglePopup} className="popup-close">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default PopupBox;