import { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input field
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <br />
      <button
        onClick={handleFocus}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
        }}
      >
        Focus Input
      </button>
    </div>
  );
};

export default InputFocus;
