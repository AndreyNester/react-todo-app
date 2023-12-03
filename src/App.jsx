import React from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <section className="todoapp">
      <header className="header">
        <NewTaskForm />
      </header>

      <section className="main">
        <TaskList />
        <Footer />
      </section>
    </section>
  );
}

export default App;
