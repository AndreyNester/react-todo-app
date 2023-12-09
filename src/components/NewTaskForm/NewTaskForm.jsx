/* eslint-disable import/no-cycle */
import { useContext, useState } from 'react';

// eslint-disable-next-line import/order
import { dataContext } from '../../App';
// eslint-disable-next-line import/order
import { onAdd } from '../store/actions/actions';
import './NewTaskForm.css';
import inputs from './inputs';
import isValid from './utils';

function NewTaskForm() {
  const [inputValue, setInputValue] = useState('');
  const [inputMin, setInputMin] = useState('');
  const [inputSec, setInputSec] = useState('');

  const statesArr = [
    [inputValue, setInputValue],
    [inputMin, setInputMin],
    [inputSec, setInputSec],
  ];

  const { dispatchData } = useContext(dataContext);

  const onSubmit = (value, valueMin, valueSec) => {
    dispatchData(onAdd({ title: value, min: valueMin, sec: valueSec }));
    setInputValue('');
    setInputMin('');
    setInputSec('');
  };

  return (
    <form className="new-todo-form" action="">
      <h1>todos</h1>

      {inputs.map((el, index) => (
        <input
          key={el.id}
          className={el.className}
          type={el.type}
          placeholder={el.placeholder}
          value={statesArr[index][0]}
          onChange={(e) => statesArr[index][1](e.target.value)}
          onKeyUp={(e) =>
            e.code === 'Enter'
              ? isValid(inputValue, inputMin, inputSec) && onSubmit(inputValue, inputMin, inputSec)
              : null
          }
        />
      ))}
    </form>
  );
}

export default NewTaskForm;
