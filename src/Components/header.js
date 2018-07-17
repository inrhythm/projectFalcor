import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'

const Header = () => (
   <nav className="nav">
      <Link className="nav-link" to='/'>Home</Link>
      <Link className="nav-link" to='/register'>Register</Link>
      <Link className="nav-link" to='/admin'>Admin</Link>
   </nav>
);

export default Header
