import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
    <ul>
      <li>
      <Link to="/" >About Me</Link>
      </li>
      <li>
      <Link to="/portfolio" >Portfolio</Link>
      </li>
      <li>
      <Link to="/contact" >Contact</Link>
      </li>
      <li>
      <Link to="/resume">Resume</Link>
      </li>
    </ul>
    <Outlet />
    </div>
  );
};

export default Navigation;
