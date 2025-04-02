import ThemeProvider from "./components/ThemeProvider";
import ThemedComponent from "./components/ThemedComponent";



const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

export default App;