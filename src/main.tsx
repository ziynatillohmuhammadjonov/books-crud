import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App.tsx";
import "./index.css";
const GlobalStyle = createGlobalStyle`
  #root {
    padding: 0;
    margin: 0;  /* Также убираем margin, если он есть */
    height: 100vh; /* Если нужно растянуть на весь экран */
  }
`;

const theme = createTheme({
  typography: {
    fontFamily: ["Mulish", ""].join(","),
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
