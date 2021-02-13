import React from 'react';
import './Header.css';

function Header (props) {

  return (
    <header className="header">
      <h1 className="header__title">Мои заметки</h1>
      <div>
        <button type="button" className={`header__button ${props.token && 'header__button_active'}`} onClick={props.onAddNotes}>+</button>
        <button type="button" className={`header__button header__button_type_text ${props.token && 'header__button_active'}`} value="Выйти" onClick={props.onSignOut}>Выйти</button>
      </div>
    </header>
  )
}

export default Header;