import React from 'react';
import { Link } from 'react-router-dom';
import './Autorisation.css';

function Autorisation(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [activeButton, setActiveButton] = React.useState(false);
  const [error, setError] = React.useState(false);

  function handleEmailChange (e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function auth(email, password) {
    const apiKey = 'AIzaSyCBQIQgMI_GWopOMbTM3nSmWMmXoy_a1_g';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then(data => data.idToken)
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth(email, password)
    .then(token => {
      props.onAuth(token);
      setEmail('');
      setPassword('');
      setActiveButton(true);
      setError(false);
    })
    .catch(() => {
      setError(true);
    });
  }

  return (
    <main className="main">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Авторизация</h2>
        <h3 className={`form__error ${error && 'form__error_active'}`}>Не верный e-mail или пароль</h3>
        <fieldset className={`form__input-container ${activeButton && 'form__input-container_inactive'}`}>
          <div className="form__field">
            <label htmlFor="email" className="form__label">E-mail</label>
            <input type="email" className="form__input" id="email" placeholder="example@mail.com" 
            value={email} onChange={handleEmailChange} required/>
          </div>
          <div className="form__field">
            <label htmlFor="password" className="form__label">Пароль</label>
            <input type="password" className="form__input" id="password" minLength="8" maxLength="25" placeholder="12345678" 
            value={password} onChange={handlePasswordChange} required/>
          </div>
          <button type="submit" className={`form__submit ${activeButton && 'form__submit_inactive'}`} value="Создать">Создать</button>
          <Link type="button" className={`form__button ${!activeButton && 'form__button_inactive'}`} value="Войти" to="/notes"> Войти </Link>
        </fieldset>
      </form>
    </main>
  );
}

export default Autorisation;