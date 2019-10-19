// @flow
import React, { Component } from 'react';

function Test() {
  return <div>test</div>;
}

class Home extends Component {
  render() {
    return (
      <div>
        Home <Test />
      </div>
    );
  }
}

export default Home;
