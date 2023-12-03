function Task() {
  return (
    <li>
      <div className="view">
        <label htmlFor="some">
          <input type="checkbox" className="toggle" />
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
