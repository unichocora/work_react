import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

var Index = React.createClass({
    render:function(){
        return(
            <div className="nikkei">
            <p>hoge</p>
            <div className="button"><a href="/">ページ遷移</a></div>
            </div>
        );
    }
});

ReactDOM.render(
    <Index />,
    document.getElementById('nikkei')
);