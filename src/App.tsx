import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
