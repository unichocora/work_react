// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <div className="ListBox">
//     <button className="Button">New Note</button>
//     <ul className="NoteList"></ul>
//     </div>,
//     document.getElementById('app')
// );
// class NoteList{
//     constructor({onSelectItem}){
//         this.onSelectItem = onSelectItem;
//     }
    
//     onClickItem(item){
//         this.onSelectItem(item);
//     }
//     render(){
//         return'<ul>&{items}</ul>';
//     }
// }

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './pages/App/App';
import Dashboard from './pages/Dashboard/Dashboard';
import Note from './pages/Note/Note';
import NoteEdit from './pages/Dashboard/NoteEdit/NoteEdit';
// import Starred from '/home/ubuntu/workspace/spa-note/src/pages/Starred/Starred';
import Starred from './pages/Starred/Starred';

const Hello = (props) => {
    return <div className="Hello">
    Hello{props.name}
    </div>;
};

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Dashboard}>
        <Route path="notes/:id/edit" component={NoteEdit} />
      </Route>
      <Route path="notes/:id" component={Note} />
      <Route path="starred" component={Starred} />
    </Route>
  </Router>

), document.getElementById('app'));

  const CheckBoxItem=({
  name,
  value,
  label,
  checked,
  onChange
}) => (
  <label className="CheckBoxItem">
  <input className="checkbox u-for-at" type="checkbox" name={name} value={value} checked={checked} onChange={onChange} />
  <span className="fake" />{label} 
  </label>
  );
  
  var CommentBox = React.createClass({
          render: function() {
            return (
              <div className="commentBox">
                Hello, world! I am a CommentBox.
              </div>
            );
          }
        });
        
      
  ReactDOM.render(
   <CommentBox />,
   document.getElementById('content')
  );
