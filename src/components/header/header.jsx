import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const nav = useLocation();

  return (
    <div className="header">
      {nav.pathname === '/tasks' ? (
        <NavLink className="head-link" to="/">
          Projects
        </NavLink>
      ) : (
        <div className="head-link no-effect">Tasks</div>
      )}
    </div>
  );
};

export default Header;
