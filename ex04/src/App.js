import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Klikni</button>
        <button onClick={this.getLocalStorage}>Klikni2</button>
      </div>
    )
  }
  setLocalStorage() {
    localStorage.setItem('Arena', 'Selection Month');
  }
  getLocalStorage() {
    var myLocalStorageData = localStorage.getItem('Arena');
    console.log(myLocalStorageData);
  }
}
export default App;