import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
        <Link className="navbar-brand" to="/"><h3 className="text-white pt-1">Tu-Canchita Admin</h3></Link>
        </div>
      </nav>
    );
  };
  
export default Header;