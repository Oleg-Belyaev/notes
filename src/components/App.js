import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Autorisation from './Autorisation';
import Header from './Header';
import Notes from './Notes';
import Popup from './Popup';
import api from '../utils/Api';
import ProtectedRoute from './ProtectedRout';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [notes, setNotes] = React.useState([]);
  const [token, setToken] = React.useState(localStorage.getItem('token') || ''); 
  const history = useHistory();
  
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
    history.push('/notes')
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

  function signOut () {
    localStorage.removeItem('token');
    setToken('')
    history.push('/notes/login');
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
      <Header onAddNotes={handleAddNotesClick} token={token} onSignOut={signOut}/>
      <Popup isOpen={isPopupOpen} onClose={closePopup} onAddNotes={handleAddNotesSubmit} token={token}/>
      <Switch>
        <Route path="/notes/login">
          <Autorisation onAuth={handleAuth}/>
        </Route>
        <ProtectedRoute path="/notes" component={Notes} token={token} notes={notes} onNoteDelete={handleNoteDelete} />
        <Route path="/notes">
          {token ? <Redirect to="/notes" /> : <Redirect to="/notes/login" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
