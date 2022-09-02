import "../src/App.css";
import Navbar from "./components/globalComponents/Navbar";
import Home from "./views/Home";
import Footer from "./components/globalComponents/Footer";
import { createTheme, ThemeProvider } from "@material-ui/core";
function App() {
  const theme = createTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
