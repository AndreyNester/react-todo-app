/* eslint-disable import/no-cycle */
import React, { createContext, useMemo, useReducer } from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import appReducer from './components/store/reducers/reducers';

export const dataContext = createContext();

function App() {
  const initialState = {
    visList: [],
    globList: [],
  };

  const [data, dispatchData] = useReducer(appReducer, initialState);

  const value = useMemo(() => {
    return {
      data,
      dispatchData,
    };
  }, []);

  return (
    <section className="todoapp">
      <dataContext.Provider value={value}>
        <header className="header">
          <NewTaskForm />
        </header>

        <section className="main">
          <TaskList visList={data.visList} />
          <Footer count={data.globList.filter((el) => !el.completed).length} />
        </section>
      </dataContext.Provider>
    </section>
  );
}

export default App;
