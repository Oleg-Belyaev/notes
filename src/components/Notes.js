import Note from './Note';
import './Notes.css';

function Notes(props) {
  return (
    <ul className="notes main__notes">
      { (props.notes.length === 0) 
        ? <p>Заметок нет</p>
        : props.notes.map((note) => {
          return <Note {...note} key={note.id} onNoteDelete={props.onNoteDelete} token={props.token}/>
        })
      }
    </ul>
  )
}

export default Notes;