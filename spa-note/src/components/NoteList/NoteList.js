import React from 'react';

export default class NoteList extends React.Componet{
    //要素がクリックされたらイベントハンドラを実行する
    handleClickItem(id){
        this.props.onSelect(id);
    }
    
    //子要素のレンダリング
    renderItem(note){
        const classNames = ['NoteList-item'];
        
    //選択中の要素に'is-selected'classを付与する
    if(this.props.selectNoteId === note.id){
        classNames.push('is-selected');
    }
    
    return <li 
     className={classNames.join('')}
     key={note.id}
     onClick={() => this.props.onSelect(note.id)}>
     {note.title}
     </li>;
    }
    
    //notesを親から受け取ってリストを返す
    render(){
        const items = this.props.notes.map(note => {
            return this.renderItem(note);
        });
        return <div className="NoteList">
         <ul>{items}</ul>
        </div>;
    }
}