/* eslint-disable import/no-cycle */
import { useContext } from 'react';

import { dataContext } from '../../App';
import TaskFilter from '../TasksFilter/TaskFilter';
import { onClearActive } from '../store/actions/actions';
import './Footer.css';

function Footer(props) {
  const { dispatchData } = useContext(dataContext);
  const { count } = props;
  return (
    <footer className="footer">
      <span className="todo-count">{count} item left</span>
      <TaskFilter />
      <button type="button" className="clear-completed" onClick={() => dispatchData(onClearActive())}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
