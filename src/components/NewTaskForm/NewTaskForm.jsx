/* eslint-disable import/no-cycle */
import { useContext, useState } from 'react';

// eslint-disable-next-line import/order
import { dataContext } from '../../App';
// eslint-disable-next-line import/order
import { onAdd } from '../store/actions/actions';
import './NewTaskForm.css';
import isValid from './utils';

function NewTaskForm() {
  const [inputValue, setInputValue] = useState('');

  const { dispatchData } = useContext(dataContext);

  const onSubmit = (value) => {
    dispatchData(onAdd({ title: value }));
    setInputValue('');
  };

  return (
    <form action="" onSubmit={(e) => (isValid(e, inputValue) ? onSubmit(inputValue) : null)}>
      <h1>todos</h1>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

export default NewTaskForm;
