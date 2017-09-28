import React from 'react';
import marked from 'marked';

export default class StockBody extends React.Component {
  render() {
    return <div
      className="StockBody"
      dangerouslySetInnerHTML={{ __html: marked(this.props.body) }}
      />;
  }
}