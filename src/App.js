import React, { Component } from 'react';
/*
class App extends Component {
  render() {
    return <React.Fragment>
      <label htmlFor="bar">アアアアア</label>
      <input type="text" id="bar" onChange={() => {console.log("changed")}}/>
    </React.Fragment>
  }
}
*/

const App = () => {
  return (
    <div>
      <ul>
        <Cat />
        <Cat />
        <Cat />
        <Cat />
      </ul>
    </div>
  );
};
const Cat = () => {
  return <li>mew!!</li>;
};

export default App;
