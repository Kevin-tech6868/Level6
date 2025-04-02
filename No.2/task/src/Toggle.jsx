import React, { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(true); // Initial state

  const handleClick = () => {
    setShow(!show); // Toggle state
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Conditionally render content */}
      {show && <p>Hello World</p>}

      {/* Corrected onClick handling */}
      <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Toggle
      </button>
    </div>
  );
};

export default Toggle;

