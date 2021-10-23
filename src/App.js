import React from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import "@material/react-text-field/dist/text-field.css";

import Home from "./pages/Home";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
