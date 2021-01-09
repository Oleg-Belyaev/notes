import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Autorisation from './Autorisation';
import Header from './Header';
import Notes from './Notes';
import Popup from './Popup';
import './App.css';

function App() {

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [notes, setNotes] = React.useState([]);
  const [token, setToken] = React.useState(''); 
  
    function handleAddNotesClick() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }
  
  function handleAuth (token) {
    setToken(token);
    console.log(token);
    return fetch(`https://my-notes-app-f475f-default-rtdb.firebaseio.com/notes.json?auth=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then((res) => {
      if (res !== null) {
      const newNotes = Object.keys(res).map(key => ({...res[key], id: key}));
      setNotes(newNotes);
      } else {
        setNotes([]);
      }
    })
  }

  function handleAddNotesSubmit(newNotesData) {
    return fetch(`https://my-notes-app-f475f-default-rtdb.firebaseio.com/notes.json?auth=${newNotesData.token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newNotesData.name,
        description: newNotesData.description,
        data: newNotesData.data
      })
    })  
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then(() => fetch(`https://my-notes-app-f475f-default-rtdb.firebaseio.com/notes.json?auth=${newNotesData.token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }))
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then((res) => {
      const newNotes = Object.keys(res).map(key => ({...res[key], id: key}));
      setNotes(newNotes);
      closePopup();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleNoteDelete (noteDelete) {
    return fetch(`https://my-notes-app-f475f-default-rtdb.firebaseio.com/notes/${noteDelete.id}.json?auth=${noteDelete.token}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then(() => fetch(`https://my-notes-app-f475f-default-rtdb.firebaseio.com/notes.json?auth=${noteDelete.token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }))
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then((res) => {
      const newNotes = Object.keys(res).map(key => ({...res[key], id: key}));
      setNotes(newNotes);
      closePopup();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="App">
      <Header onAddNotes={handleAddNotesClick} token={token}/>
      <Switch>
        <Route exact path="/">
          <Autorisation onAuth={handleAuth}/>
        </Route>
        <Route exact path="/notes">
          <Notes notes={notes} onNoteDelete={handleNoteDelete} token={token}/>
          <Popup isOpen={isPopupOpen} onClose={closePopup} onAddNotes={handleAddNotesSubmit} token={token}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
