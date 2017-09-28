import { dispatch } from '../dispatcher';
import StockApiClient from '../services/StockApiClient';

export default {
  fetchMyNotes() {
    return StockApiClient.fetchMyNotes().then(notes => {
      dispatch({ type: 'note/fetch/my', notes });
    });
  },

  fetchStarred() {
    return StockApiClient.fetchStarredNotes().then(notes => {
      dispatch({ type: 'note/fetch/starred', notes });
    });
  },

  fetch(id) {
    dispatch({ type: 'note/fetch/before' });
    return StockApiClient.fetchNote(id).then(note => {
      dispatch({ type: 'note/fetch', note });
    });
  },

  create() {
    return StockApiClient.createNote().then(note => {
      dispatch({ type: 'note/create', note });
    });
  },

  update(id, { title, body }) {
    return StockApiClient.updateNote(id, { title, body }).then(() => {
      dispatch({ type: 'note/update', id, note: { title, body } });
    });
  },

  delete(id) {
    return StockApiClient.deleteNote(id).then(() => {
      dispatch({ type: 'note/delete', id });
    });
  },
};