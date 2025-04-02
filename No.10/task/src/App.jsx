import ParentComponent from "./components/ParentComponent";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>useCallback Memoization</h1>
      <ParentComponent />
    </div>
  );
};

export default App;
