import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         To Dos App
        </h1>
      </header>
    </div>

    <div className="Nav">
      <ul>
        <li>New List</li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div className="Lists">
      <ol>
      <li>blah</li>
      <li>blah blah</li>
      <li>blah blah blah</li>
      </ol>
    </div>
  );
}

export default App;
