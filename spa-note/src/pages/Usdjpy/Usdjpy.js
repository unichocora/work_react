import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

var Index = React.createClass({
    render:function(){
        return(
            <p>hoge</p>
        );
    }
});

ReactDOM.render(
    <Index />,
    document.getElementById('usdjpy')
);