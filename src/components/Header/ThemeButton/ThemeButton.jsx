import React from 'react';
import { Button } from '.';

const Header = ({ changeTheme }) => {
  return (
    <div>
      <Button onClick={changeTheme}>change theme</Button>
    </div>
  );
};

export default Header;
