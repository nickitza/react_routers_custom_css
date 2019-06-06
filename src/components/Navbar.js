import React from 'react';
import { Link, } from 'react-router-dom';

const Navbar = () => (
  //link acts like an anchor tag without refreshing browser
  <div className="links">

    <Link to="/" style={{color: 'white', margin: '2em', textDecoration: 'none',}}>
      Home
    </Link>

    <Link to="/about" style={{color: 'white', margin:'2em', textDecoration: 'none'}}>
      About
    </Link>

    <Link to="/blog" style={{color: 'white', margin:'2em', textDecoration: 'none'}}>
      Blog
    </Link>

  </div>
)

export default Navbar;