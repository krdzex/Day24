import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Klikni me</button>
        <button onClick={this.getMyStorage}>Klikni i mene</button>
      </div>
    )
  }
  getMyStorage() {
    var myCookieData = document.cookie.split(';')
      .find(row => row.startsWith('Year='))
      .split('=')[1];
    var myLocalStorageData = localStorage.getItem('Paragon');
    var mySessionStorageData = sessionStorage.getItem('frontend');
  }
  setMyStorage() {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }
}
export default App;
