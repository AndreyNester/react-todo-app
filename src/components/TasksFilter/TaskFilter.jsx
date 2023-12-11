/* eslint-disable import/no-cycle */
import { useContext, useState } from 'react';

// eslint-disable-next-line import/order
import { dataContext } from '../../App';
import './TaskFilter.css';
import filtersList from './filters';

function TaskFilter() {
  const [actIndex, setActIndex] = useState(0);

  const switchSel = (index, cb) => {
    setActIndex(index);
    return cb();
  };

  const { dispatchData } = useContext(dataContext);

  return (
    <ul className="filters">
      {filtersList.map((el, index) => (
        <li key={el.id}>
          <button
            type="button"
            className={index === actIndex ? 'selected' : ''}
            onClick={() => dispatchData(switchSel(index, el.onFilter))}
          >
            {el.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskFilter;
