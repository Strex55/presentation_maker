import React from 'react';
import './header.css';
type HeaderProps = {
  placeholder: string;
};

const Header: React.FC<HeaderProps> = ({ placeholder }) => (
  <header className="header">
    <div className="instrumental_pannel">
      <i>instrumental_pannel</i>
      <input
        type="text"
        className="presentation_name"
        id="presentation_name"
        name="presentation_name"
        placeholder={placeholder}
      />
    </div>
  </header>
);

export default Header;
