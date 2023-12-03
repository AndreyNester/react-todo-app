/* eslint-disable jsx-a11y/label-has-associated-control */
import './Task.css';

function Task({ id }) {
  return (
    <li className="">
      <div className="view">
        <input id={id} type="checkbox" className="toggle" />
        <label htmlFor={id}>
          <span className="description">Active task</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button type="button" className="icon icon-edit">
          {' '}
        </button>
        <button type="button" className="icon icon-destroy">
          {' '}
        </button>
      </div>
    </li>
  );
}

export default Task;
