import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from './styles/theme';

import NavBar from './components/Header/NavBar';
import Welcome from './components/pages/Welcome';
import Products from './components/pages/Products';
import Product from './components/pages/Product';

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
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Switch>
      </main>
    </ThemeProvider>
  );
}

export default App;
