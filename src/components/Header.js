import './Header.css';

function Header (props) {

  return (
    <header className="header">
      <h1 className="header__title">Мои заметки</h1>
      <button type="button" className={`header__button ${props.token && 'header__button_active'}`} onClick={props.onAddNotes}>+</button>
    </header>
  )
}

export default Header;