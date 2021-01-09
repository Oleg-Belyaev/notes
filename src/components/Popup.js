import React from 'react';
import './Popup.css';

function Popup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleNameChenge(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();

    props.onAddNotes({
      name,
      description,
      data: new Date(),
      token: props.token
    })
    setName('');
    setDescription('');
  }
  return (
    <section className={`popup ${props.isOpen && 'popup_opened'}`}>
    <div className="popup__overlay" onClick={props.onClose}></div>
    <form className="popup__container" name="notes" onSubmit={handleSubmit}>
      <button className="popup__close" type="button" onClick={props.onClose}></button>
      <h2 className="popup__title">Добавление заметки</h2>
      <fieldset className="popup__input-container">
        <div className="popup__field">
          <input type="text" className="popup__item" name="name" placeholder="Название" required 
          minLength="2" maxLength="40" value={name} onChange={handleNameChenge}/>
        </div>
        <div className="popup__field">
          <input type="text" className="popup__item" name="description" placeholder="Описание" required 
          minLength="2" maxLength="500" value={description} onChange={handleDescriptionChange}/>
        </div>
        <button type="submit" className="popup__submit" value="Сохранить">Сохранить</button>
      </fieldset>
    </form>
  </section>
  )
}

export default Popup;