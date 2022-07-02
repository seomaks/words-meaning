import React from 'react';
import './App.css';
import { DataDisplay } from './components/data-display/DataDisplay';
import {SearchBar} from './components/search-bar/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <DataDisplay/>
    </div>
  );
}

export default App;
