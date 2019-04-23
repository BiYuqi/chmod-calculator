import React from 'react';
import './Header.scss'

const Header = () => {
  return (
    <div className="chmod-header">
      <h1>Chmod Calculator<a href="https://github.com/BiYuqi/chmod-calculator">@BiYuqi</a></h1>
      <p>A fancy calculator convert Linux file permissions between different format </p>
    </div>
  );
};

export default Header;
