import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Klikni me</button>
      </div>
    )
  }
  setMyStorage() {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }
}
export default App;
