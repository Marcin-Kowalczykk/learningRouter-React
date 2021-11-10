import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from './styles/theme';

import NavBar from './components/Header/NavBar';
import Welcome from './components/pages/Welcome';
import Products from './components/pages/Products';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const changeThemeHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isClicked ? themeDark : themeLight}>
      <GlobalStyle />
      <nav>
        <NavBar onChangeTheme={changeThemeHandler} />
      </nav>
      <main>
        <Route path="/Welcome">
          <Welcome />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
      </main>
    </ThemeProvider>
  );
}

export default App;
