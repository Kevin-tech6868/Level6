import { useReducer } from "react";


const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-container">
      <h1 className="counter-value">Counter: {state.count}</h1>
      <div className="button-group">
        <button className="counter-button" onClick={() => dispatch({ type: "increment" })}>+</button>
        <button className="counter-button" onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button className="reset-button" onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
