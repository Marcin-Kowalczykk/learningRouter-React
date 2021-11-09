import React, { Fragment, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeLight } from '../../styles/theme';
import { themeDark } from '../../styles/theme';
import { Wrapper, Text, Button } from '.';

export const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const changeThemeHandler = () => {
    setIsClicked((prev) => !prev);
  };

  const content = (
    <Wrapper>
      <Button onClick={changeThemeHandler}>change theme</Button>
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
