import add from './reducer.fncs/add';
import clearCompleted from './reducer.fncs/clearCompleted';
import complete from './reducer.fncs/complete';
import deleted from './reducer.fncs/deleted';
import edit from './reducer.fncs/edit';
import filterActive from './reducer.fncs/filterActive';
import filterAll from './reducer.fncs/filterAll';
import filterCompleted from './reducer.fncs/filterCompleted';
import onPause from './reducer.fncs/onPause';
import onPlay from './reducer.fncs/onPlay';
import onUpdate from './reducer.fncs/onUpdate';
import updateList from './reducer.fncs/updateList';

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

    case 'ONPLAY':
      return onPlay(prevState, action);

    case 'ONPAUSE':
      return onPause(prevState, action);

    case 'ONUPDATE':
      return onUpdate(prevState, action);

    case 'UPDATELIST':
      return updateList(prevState, action);

    default:
      break;
  }
  return prevState;
};

export default appReducer;
