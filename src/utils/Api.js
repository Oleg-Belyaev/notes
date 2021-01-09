const handleOriginalResponse = (res) => res.json();

class Api {
  constructor(options) {
    this._headers = options.headers;
    this._url = options.url;
  }

  getNotes(token) {
    return fetch(`${this._url}/notes.json?auth=${token}`, {
      method: 'GET',
      headers: this._headers
    })
    .then(handleOriginalResponse);
  }

  createNote(noteData) {
    return fetch(`${this._url}/notes.json?auth=${noteData.token}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: noteData.name,
        description: noteData.description,
        data: noteData.data
      })
    })  
    .then(handleOriginalResponse)
  }

  deleteNote(noteData) {
    return fetch(`${this._url}/notes/${noteData.id}.json?auth=${noteData.token}`, {
      method: 'DELETE',
      headers:this._headers
    })
    .then(handleOriginalResponse)
  }
}

const api = new Api ({
  headers: {
    'Content-Type': 'application/json'
  },
  url: 'https://my-notes-app-f475f-default-rtdb.firebaseio.com'
});

export default api;