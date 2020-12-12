import React from 'react';
import { ClueList } from './components/ClueList'
import { Display } from './components/Display'
import { GlobalProvider } from './components/GlobalContext'
import styled from 'styled-components';
import './App.css';

const Header = styled.header`
  h1{
    font-family: 'Pangolin', cursive;
  }
`

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <Header>
          <h1>
            Phasmophobia Notepad
          </h1>
        </Header>
        <main>
          <ClueList />
          <Display />
        </main>
      </div>
    </GlobalProvider>
  );
}

export default App;
