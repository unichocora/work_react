import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './pages/App/App';
import Dashboard from './pages/Dashboard/Dashboard';
import Note from './pages/Note/Note';
import NoteEdit from './pages/Dashboard/NoteEdit/NoteEdit';
import Starred from './pages/Starred/Starred';

var DataBox = React.createClass({
  loadDataFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(){
		return { data:[] };
	},
  componentDidMount: function(){
		this.loadDataFromServer();
		setInterval(this.loadDataFromServer, this.props.pollInterval);
		// this.setState({data:[{base:"",rates:""}]});
	},
  render: function() {
    var datas = this.state.data.map(function(element){
      return <p key={element}>{element.rates}</p>
    });
   var rates = this.state.element.rates
    Object.keys(rates).forEach(function(key) {
      console.log(key, rates[key]);
    });
    // var keys = Object.keys(datas);
    // for( var i=0, l=keys.length; i<l; i+=1) {
    //   console.log(keys[i], datas[ keys[i] ]);
    // }
    return (
      <div >
						<div>
						{datas}
						</div>
      </div>
    );
  }
});

ReactDOM.render(
  <DataBox url="/api/comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
