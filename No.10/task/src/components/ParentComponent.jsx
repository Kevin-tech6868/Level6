import { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoizing the callback function using useCallback
  const handleClick = useCallback(() => {
    console.log("Button clicked in Child");
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
