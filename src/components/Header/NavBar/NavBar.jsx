import React from 'react';

import ThemeButton from '../ThemeButton';

import { UlWrapper, Li, StyledLink } from '.';

const NavBar = ({ onChangeTheme }) => {
  return (
    <UlWrapper>
      <Li>
        <StyledLink to="./Welcome">Welcome</StyledLink>
      </Li>
      <Li>
        <StyledLink to="./Products">Products</StyledLink>
      </Li>
      <Li>
        <ThemeButton changeTheme={onChangeTheme} />
      </Li>
    </UlWrapper>
  );
};

export default NavBar;
