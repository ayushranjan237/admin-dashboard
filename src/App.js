import React from 'react';
import BookTable from './components/BookTable';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Dashboard</h1>
      </header>
      <BookTable />
    </div>
  );
};

export default App;
