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
        // var newData = this.state.data.concat({data});
        this.setState({data:data});
        // console.log(this.state.data);
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
    // this.state = {data:""}
		this.loadDataFromServer();
		setInterval(this.loadDataFromServer, this.props.pollInterval);
		// this.state = {data:[{base:"",rates:""}]};
	},
  render: function() {
    console.log(this.state.data);
    	
    // this.state ={data:[]};
    var datas = this.state.data.map(function(element){
      return <p key={element.base}>{element.timestamp}</p>
    });
    // if (this.state.data){
    //   var elements = this.state.data.map(function(element){
    //     return <p key={element}>{element.base}</p>
    //   });
    // }
  
    // var keys = Object.keys(datas);
    // for( var i=0, l=keys.length; i<l; i+=1) {
    //   console.log(keys[i], datas[ keys[i] ]);
    // }
    // console.log(this.state.elements);
    return (
      <div >
						<div>
						{datas}
						
						</div>
      </div>
    );
  }
});
// <DataRates data={this.state} />
// var DataRates = React.createClass({
//   render: function(){
//     var dataStock = this.state.data.map(function(stock){
//       return <p key={stock}>{stock.rates[0]}</p>
//     });
//     return(
//       <div>
//       {dataStock}
//       </div>
//       );
//   }
// });


    

ReactDOM.render(
  <DataBox url="/api/comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
// ReactDOM.render(
//   <DataBox url="https://openexchangerates.org/api/latest.json?app_id=739176aa1cf94845b3aaa9826f06880b" pollInterval={3000000} />,
//   document.getElementById('content')
// );