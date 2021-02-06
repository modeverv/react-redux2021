
import React, { Component } from 'react';

class App extends Component {
  render() {
    //const greeting = "Hi Tom";
    //const jsx = <h1>{greeting}</h1>
    //return <div className="hoge" onClick={() => { alert(1) }}>{jsx}</div>
    //return <div className="hoge" onClick={() => { alert(1) }}>{jsx}</div>
    return <React.Fragment>
      <label htmlFor="bar">アアアアア</label>
      <input type="text" id="bar" onChange={() => {console.log("changed")}}/>
    </React.Fragment>
  }
}

export default App;
