import{dispatch}from '../dispatcher';
// import NoteAPIClient from '../services/NoteAPIClient';
import NoteAPIClient from '/home/ubuntu/workspace/spa-note/src/services/NoteAPIClient';


export default {
    create({title,body}){
        NoteAPIClient.createNote({title,body})
        .then(note =>{
            dispatch({ type: 'note/create',note});
        });
    }
}