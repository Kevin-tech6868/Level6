import { memo } from "react";

const ChildComponent = memo(({ handleClick }) => {
  console.log("Child re-rendered");

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
});

export default ChildComponent;
