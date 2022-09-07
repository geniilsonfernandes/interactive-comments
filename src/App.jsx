import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./styles/theme";
import Home from "./pages/Home";
import { UserDataStorageProvider } from "./context/dataContext";

function App() {
  return (
    <UserDataStorageProvider>
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </UserDataStorageProvider>
  );
}

export default App;
