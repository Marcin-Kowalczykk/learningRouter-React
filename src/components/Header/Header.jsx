import React, { Fragment, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeLight } from '../../styles/theme';
import { themeDark } from '../../styles/theme';
import { Wrapper, Text, Button } from '.';

import { Note } from './Note';

export const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const changeThemeHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <Fragment>
      <ThemeProvider theme={isClicked ? themeLight : themeDark}>
        <Wrapper>
          <Button onClick={changeThemeHandler}>change theme</Button>
          <Text>Lets get started</Text>
          <Note />
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );
};
