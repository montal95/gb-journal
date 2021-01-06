import React from 'react';
import { ClueList, Display, GlobalProvider } from './components'
import styled from 'styled-components';

const Header = styled.header`
  h1{
    font-family: 'Pangolin', cursive;
    font-size: 2.5rem;
    min-width: 355px;
    margin: 15px;
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
