import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Klikni</button>
      </div>
    )
  }
  setLocalStorage() {
    localStorage.setItem('Arena', 'Selection Month');
  }
}
export default App;

