import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {

    return (
      <div>hello , react - lilin</div>
    )
  }
}


ReactDom.render(<App />, document.getElementById('root'));