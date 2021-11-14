import React from 'react';

import ThemeButton from '../ThemeButton';

import { UlWrapper, Li, StyledLink } from '.';

const NavBar = ({ onChangeTheme }) => {
  return (
    <UlWrapper>
      <Li>
        <StyledLink to="/welcome">Welcome</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/products">Products</StyledLink>
      </Li>
      <Li>
        <ThemeButton changeTheme={onChangeTheme} />
      </Li>
    </UlWrapper>
  );
};

export default NavBar;
