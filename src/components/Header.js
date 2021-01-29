import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header (props) {

  const [id, setId] = React.useState('')

  function handleClick () {
    localStorage.removeItem('token');
    setId('');
  }

  React.useEffect(() => {
    if(props.token) {
      setId(props.token)
    }
  }, [props.token])

  return (
    <header className="header">
      <h1 className="header__title">Мои заметки</h1>
      <div>
        <button type="button" className={`header__button ${id && 'header__button_active'}`} onClick={props.onAddNotes}>+</button>
        <Link type="button" className={`header__button header__button_type_text ${id && 'header__button_active'}`} value="Войти" to="/notes" onClick={handleClick}>Выйти</Link>
      </div>
    </header>
  )
}

export default Header;