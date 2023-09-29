import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <NavLink className="head-link" to="/tasks">
        Tasks
      </NavLink>
      <NavLink className="head-link" to="/">
        Projects
      </NavLink>
    </div>
  );
};

export default Header;
