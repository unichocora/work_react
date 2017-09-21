import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div className="ListBox">
    <button className="Button">New Note</button>
    <ul className="NoteList"></ul>
    </div>,
    document.getElementById('app')
);
class NoteList{
    constructor({onSelectItem}){
        this.onSelectItem = onSelectItem;
    }
    
    onClickItem(item){
        this.onSelectItem(item);
    }
    render(){
        return'<ul>&{items}</ul>';
    }
}
const Hello = (props) => {
    return <div className="Hello">
    Hello{props.name}
    </div>;
};