import filterActive from './filterActive';
import filterAll from './filterAll';
import filterCompleted from './filterCompleted';

function updateList(prevState) {
  const newVisArr = [...prevState.visList];
  switch (prevState.filter) {
    case 'all':
      return filterAll(prevState);

    case 'active':
      return filterActive(prevState);

    case 'completed':
      return filterCompleted(prevState);

    default:
      break;
  }
  return {
    ...prevState,
    visList: newVisArr,
  };
}

export default updateList;
