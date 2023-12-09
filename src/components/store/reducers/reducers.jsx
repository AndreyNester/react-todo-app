import add from './reducer.fncs/add';
import clearCompleted from './reducer.fncs/clearCompleted';
import complete from './reducer.fncs/complete';
import deleted from './reducer.fncs/deleted';
import edit from './reducer.fncs/edit';
import filterActive from './reducer.fncs/filterActive';
import filterAll from './reducer.fncs/filterAll';
import filterCompleted from './reducer.fncs/filterCompleted';

const appReducer = (prevState, action) => {
  switch (action.type) {
    case 'ADD':
      return add(prevState, action);

    case 'COMPLETE':
      return complete(prevState, action);

    case 'DELETE':
      return deleted(prevState, action);

    case 'EDIT':
      return edit(prevState, action);

    case 'CLEAR_COMPLETED':
      return clearCompleted(prevState);

    case 'FILTER_ALL':
      return filterAll(prevState);

    case 'FILTER_ACTIVE':
      return filterActive(prevState);

    case 'FILTER_COMPLETED':
      return filterCompleted(prevState);

    default:
      break;
  }
  return prevState;
};

export default appReducer;
