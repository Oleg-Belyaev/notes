import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Autorisation from './Autorisation';
import Header from './Header';
import Notes from './Notes';
import Popup from './Popup';
import api from '../utils/Api';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [notes, setNotes] = React.useState([]);
  const [token, setToken] = React.useState(localStorage.getItem('token') || ''); 
  
  function handleAddNotesClick() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  function renderNotes (notes) {
    const newNotes = Object.keys(notes).map(key => ({...notes[key], id: key}));
    setNotes(newNotes);
  }
  
  function handleAuth (token) {
    setToken(token);
  }

  function handleAddNotesSubmit(newNotesData) {
    api.createNote(newNotesData)
    .then(() => {
      api.getNotes(newNotesData.token)
      .then((res) => {
        renderNotes(res);
        closePopup();
      })
      .catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleNoteDelete(noteDelete) {
    api.deleteNote(noteDelete)
    .then(() => {
      api.getNotes(noteDelete.token)
      .then((res) => {
        renderNotes(res);
      })
      .catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  React.useEffect(() => {
    const id = localStorage.getItem('token');
    if (id) {
      api.getNotes(token)
      .then((res) => {
        if (res !== null) {
          renderNotes(res);
        } else {
          setNotes([]);
        }
      })
    }
  }, [token]);

  return (
    <div className="App">
      <Header onAddNotes={handleAddNotesClick} token={token}/>
      <Switch>
        <Route exact path="/notes">
          <Autorisation onAuth={handleAuth}/>
        </Route>
        <Route exact path="/notes/mainPage">
          <Notes notes={notes} onNoteDelete={handleNoteDelete} token={token}/>
          <Popup isOpen={isPopupOpen} onClose={closePopup} onAddNotes={handleAddNotesSubmit} token={token}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
