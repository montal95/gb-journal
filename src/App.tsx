import React from 'react';
// import { default as data } from './data.json'
import { ClueList } from './components/ClueList'
import { Display } from './components/Display'
import { GlobalProvider } from './components/GlobalContext'
import './App.css';

function App() {
  // const {clues, ghosts} = data
  // console.log(clues, ghosts)
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
