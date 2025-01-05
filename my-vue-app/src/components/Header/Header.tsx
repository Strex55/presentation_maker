import React from 'react';
import './Header.css';

type HeaderProps = {
  placeholder: string;
};

const Header: React.FC<HeaderProps> = ({ placeholder }) => {
  return (
    <header className="header">
      <div className="instrumental_panel">
        <i>Instrumental Panel</i>
        <input
          type="text"
          className="presentation_name"
          placeholder={placeholder}
        />
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
      </div>
    </header>
  );
};

export default Header;
