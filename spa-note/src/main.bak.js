import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './pages/App/App';
import Dashboard from './pages/Dashboard/Dashboard';
import Note from './pages/Note/Note';
import NoteEdit from './pages/Dashboard/NoteEdit/NoteEdit';
import Starred from './pages/Starred/Starred';
// import Nikkei from './pages/Nikkei/Nikkei';
// import Usdjpy from './pages/Usdjpy/Usdjpy';

// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route component={App}>
//       <Route path="/" component={Dashboard}>
//         <Route path="notes/:id/edit" component={NoteEdit} />
//       </Route>
//       <Route path="notes/:id" component={Note} />
//       <Route path="starred" component={Starred} />
//     </Route>
//   </Router>

// ), document.getElementById('app'));

// ReactDOM.render((
//   <Router history={browserHistory}>
//   <Route component={App}>
//     <Route path="/" component={Dashboard}>
//       <Route path="Nikkei" component={Nikkei} />
//       <Route path="Usdjpy" component={Usdjpy} />
//       <Route path="Nikkei" component={NoteEdit} />
//     </Route>
//   </Route>
//   </Router>
  
//   ),document.getElementById('app'));

var DataBox = React.createClass({
  loadCommentsFromServer: function() {
    // var stocks = this.state.data;
    // stock.id = Date.now();
    $.ajax({
      url: this.props.url,
      // url: 'http://apilayer.net/api/live?access_key='+this.props.userName+'&currencies=EUR,GBP,CAD,PLN&source=USD',
      // url: 'https://openexchangerates.org/api/latest.json?app_id='+this.props.userName,
      // url:'https://finance.google.com/finance/getprices?q=6420&p=1Y&f=d,c,v,o,h,l&ei=4rrIWJHoIYya0QS1i4IQ',
      // url:'http://www.gaitameonline.com/rateaj/getrate',
      dataType: 'json',
      // data:stock,
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  // handleCommentSubmit: function(comment) {
  //   var comments = this.state.data;
  //   // Optimistically set an id on the new comment. It will be replaced by an
  //   // id generated by the server. In a production application you would likely
  //   // not use Date.now() for this and would have a more robust system in place.
  //   comment.rates = Date.now();
  //   var newComments = comments.concat([comment]);
  //   this.setState({data: newComments});
  //   $.ajax({
  //     url: this.props.url,
  //     dataType: 'json',
  //     // type: 'POST',
  //     data: comment,
  //     success: function(data) {
  //       this.setState({data: data});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       this.setState({data: comments});
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   });
  // },
  // getInitialState: function() {
  //   return {rates: '', base: ''};
  // },
  // componentDidMount: function() {
  //   this.loadCommentsFromServer();
  //   setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  // },
  // handleAuthorChange: function(e) {
  //   this.setState({rates: e.target.value});
  // },
  // handleTextChange: function(e) {
  //   this.setState({base: e.target.value});
  // },
  // handleSubmit: function(e) {
  //   e.preventDefault();
  //   var rates = this.state.rates.trim();
  //   var base = this.state.base.trim();
  //   if (!base || !rates) {
  //     return;
  //   }
  //   this.props.onCommentSubmit({rates: rates, base: base});
  //   this.setState({rates: '', base: ''});
  // },
  render: function() {
    var datas = this.state.databox.map((databox) => {
      return <Datas base="{data.base} reats={data.reats}" />
    });
    return (
      // <form className="commentForm" onSubmit={this.handleSubmit}>
      //   <input
      //     type="text"
      //     placeholder="Your name"
      //     value={this.state.rates}
      //     onChange={this.handleAuthorChange}
      //   />
      //   <input
      //     type="text"
      //     placeholder="Say something..."
      //     value={this.state.base}
      //     onChange={this.handleTextChange}
      //   />
      //   <input type="submit" value="Post" />
      // </form>
      <div>
          <div>Base: {datas}</div>
      </div>
    );
  }
  // getInitialState: function() {
  //   return {data: []};
  // },
  // componentDidMount: function() {
  //   this.loadCommentsFromServer();
  //   setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  // },
  // render: function() {
  //   var data = this.state.data
  //   return (
  //     <div className="commentBox">
  //       <User data={data} />
  //     </div>
  //   );
  // },
  // render: function() {
  //   return (
  //     <form className="commentForm" onSubmit={this.handleSubmit}>
  //       <input
  //         type="text"
  //         placeholder="Your name"
  //         value={this.state.rates}
  //         onChange={this.handleAuthorChange}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Say something..."
  //         value={this.state.text}
  //         onChange={this.handleTextChange}
  //       />
  //       <input type="submit" value="Post" />
  //     </form>
  //   );
  // }
});

// var CommentForm = React.component({
//   getInitialState: function() {
//     return {rates: '', base: ''};
//   },
//   handleAuthorChange: function(e) {
//     this.setState({rates: e.target.value});
//   },
//   handleTextChange: function(e) {
//     this.setState({base: e.target.value});
//   },
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var rates = this.state.rates.trim();
//     var base = this.state.base.trim();
//     if (!base || !rates) {
//       return;
//     }
//     this.props.onCommentSubmit({rates: rates, base: base});
//     this.setState({rates: '', base: ''});
//   },
//   render: function() {
//     return (
//       // <form className="commentForm" onSubmit={this.handleSubmit}>
//       //   <input
//       //     type="text"
//       //     placeholder="Your name"
//       //     value={this.state.rates}
//       //     onChange={this.handleAuthorChange}
//       //   />
//       //   <input
//       //     type="text"
//       //     placeholder="Say something..."
//       //     value={this.state.base}
//       //     onChange={this.handleTextChange}
//       //   />
//       //   <input type="submit" value="Post" />
//       // </form>
//       <div>
//           <div>Base: {this.state.base}</div>
//           <div>Rates: {this.state.rates}</div>
//       </div>
//     );
//   }
// });

ReactDOM.render(
  <DataBox url="/api/comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
// ReactDOM.render(
//   <DataBox userName="3f05d0edf9ab6efde55314c7d1c78327" pollInterval={20000} />,
//   document.getElementById('content')
// );
// ReactDOM.render(
//   <DataBox userName="739176aa1cf94845b3aaa9826f06880b" pollInterval={3000000} />,
//   document.getElementById('content')
// );
// ReactDOM.render(
//   <DataBox url="https://finance.google.com/finance/getprices?q=6420&p=1Y&f=d,c,v,o,h,l&ei=4rrIWJHoIYya0QS1i4IQ" pollInterval={20000} />,
//   document.getElementById('content')
// );
// ReactDOM.render(
//   <DataBox url="http://www.gaitameonline.com/rateaj/getrate" pollInterval={50000} />,
//   document.getElementById('content')
// );