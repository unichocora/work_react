const LATENCY = 200;

let stocks = require('./data');
let starred = [1, 2, 3];

export default {
  request(response) {
    return new Promise(resolve => {
      setTimeout(() => resolve(response), LATENCY);
    });
  },

  wait() {
    return new Promise(resolve => setTimeout(resolve, LATENCY));
  },

  getUpdated() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.toTimeString().split(' ')[0]}`;
  },

  myNotes() {
    return stocks.filter(note => note.user === 'MyUserName');
  },

  fetchMyNotes() {
    return this.request(this.myNotes());
  },

  fetchStarredNotes() {
    return this.request(stocks.filter(note => starred.includes(note.id)));
  },

  fetchNote(id) {
    const note = stocks.find(note => note.id === id);
    return this.request(Object.assign({ starred: starred.includes(note.id) }, note));
  },

  createNote() {
    const id = stocks.length + 1;
    const note = { id, title: 'Untitled', body: '', user: 'MyUserName', updated: this.getUpdated() };
    stocks.unshift(note);
    return this.request(note);
  },

  updateNote(id, { title, body }) {
    stocks = stocks.map(note => {
      if (note.id === id) {
        return Object.assign({}, note, { title, body, updated: this.getUpdated() });
      }
      else {
        return note;
      }
    });
    return this.request(null);
  },

  deleteNote(id) {
    stocks = stocks.filter(note => note.id !== id);
    return this.request(null);
  },

  createStar(id) {
    starred.push(id);
    return this.request(null);
  },

  deleteStar(id) {
    starred = starred.filter(_id => _id !== id);
    return this.request(null);
  },
};