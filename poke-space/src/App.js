import React from 'react';
import { CssBaseline } from '@material-ui/core';
import PokemonHome from './components/PokemonHome';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <CssBaseline />
      <Nav />
      <PokemonHome />
    </>
  );
}

export default App;