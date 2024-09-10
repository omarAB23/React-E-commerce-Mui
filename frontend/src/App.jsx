import { useState } from "react";

import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import IconSections from "../src/components/hero/IconSections";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components//scroll/ScrollToTop";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header1 />
          <Header2 />
          <Header3 />
          <Hero />
          <IconSections />
          <Main />
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
