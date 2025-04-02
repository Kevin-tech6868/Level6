import { useState } from "react";


export default function InputField() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="input-box"
      />
      <p className="display-text">You typed: {text}</p>
    </div>
  );
}