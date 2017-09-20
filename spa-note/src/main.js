import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>React環境を作ろう!</div>,
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