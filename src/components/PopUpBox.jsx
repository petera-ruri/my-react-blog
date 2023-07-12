import React, { useState } from 'react';

const PopupBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        height='80px'
        src="https://cdn-icons-png.flaticon.com/256/4856/4856386.png"
        alt="Popup Image"
        onClick={togglePopup}
      />
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup Content</h2>
            <p>This is the content of the popup box.</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupBox;


