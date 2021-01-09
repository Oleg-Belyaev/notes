import './Note.css';

function Note(props) {

  function handleDeleteClick () {
    props.onNoteDelete(props);
  }

  function convertMs (ms) {
    let second = (ms / 1000).toFixed();
    let min = Math.floor(second / 60);
    let hours = '';
    if (min > 59) {
      hours = Math.floor(min / 60);
      min = min - (hours * 60);  
    }
    second = Math.floor(second % 60);
    if (hours !== '') {
      return hours + ((hours < 5) ? ' часа ' : ' часов ') + min + ((min < 5 ) ? ' минуты ' : ' минут ') + second + ((second < 5 ) ? ' секунды' : ' секунд')
    }
    return min + ' минут ' + second + ' секунд'
  }

  return (
    <li className="note">
      <div className="note__content">
        <h2 className="note__title">{props.name}</h2>
        <p className="note__data">
          {`Заметка создана: 
          ${new Date(props.data).toLocaleDateString()}
          ${new Date(props.data).toLocaleTimeString()}. С момента создания прошло: ${convertMs(Date.now() - Date.parse(props.data))}`}</p>
        <p className="note__description">{props.description}</p>
      </div>
       <button className="note__delete" type="button" onClick={handleDeleteClick}>Удалить</button>
    </li>
  )
}

export default Note;