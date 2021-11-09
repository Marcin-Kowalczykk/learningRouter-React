import React, { Fragment, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeLight } from '../../styles/theme';
import { themeDark } from '../../styles/theme';
import { Wrapper, Text } from '.';

export const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const changeThemeHandler = () => {
    setIsClicked((prev) => !prev);
  };

  const content = (
    <Wrapper>
      <button onClick={changeThemeHandler}>change theme</button>
      <Text>Lets get started</Text>
    </Wrapper>
  );

  return (
    <Fragment>
      {isClicked ? (
        <ThemeProvider theme={themeLight}>{content}</ThemeProvider>
      ) : (
        <ThemeProvider theme={themeDark}>{content}</ThemeProvider>
      )}
    </Fragment>
  );
};
