import React from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return <nav className='nav'>
    <a href="/" className='site-title'>Sarahy Moros</a>
    <ul>
      <li className='active'>
        <Link to="/">About Me</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  </nav>
}



//     <nav style={navStyle}>
//       <ul style={ulStyle}>
//         <li style={liStyle}>
//           <Link to="/" style={linkStyle}>About Me</Link>
//         </li>
//         <li style={liStyle}>
//           <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
//         </li>
//         <li style={liStyle}>
//           <Link to="/contact" style={linkStyle}>Contact</Link>
//         </li>
//         <li style={liStyle}>
//           <Link to="/resume" style={linkStyle}>Resume</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// const navStyle = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   backgroundColor: '#333',
//   padding: '1rem',
// };

// const ulStyle = {
//   listStyleType: 'none',
//   margin: 0,
//   padding: 0,
//   display: 'flex',
// };

// const liStyle = {
//   marginRight: '1rem',
// };

// const linkStyle = {
//   color: '#fff',
//   textDecoration: 'none',
// };

export default Navigation;
