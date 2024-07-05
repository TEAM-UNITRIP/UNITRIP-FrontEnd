import { ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "./styles/GlobalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <p css={(theme) => ({ color: theme.colors.purple, fontSize: "10rem" })}>
          App.tsx
        </p>
      </ThemeProvider>
    </>
  );
}

export default App;
