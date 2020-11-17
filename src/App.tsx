import React from 'react';
import { default as data } from './data.json'
import { ClueList } from './components/ClueList'
import { Display } from './components/Display'
import './App.css';

function App() {
  console.log(data)
  return (
    <div className="App">
      <header>
        <h1>
          Phasmophobia Mobile Journal
        </h1>
      </header>
      <main>
        <ClueList />
        <Display />
      </main>
    </div>
  );
}

export default App;
