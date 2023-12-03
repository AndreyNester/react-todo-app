function TaskFilter() {
  return (
    <ul className="filters">
      <li>
        <button type="button" className="selected">
          All
        </button>
      </li>

      <li>
        <button type="button" className="">
          Active
        </button>
      </li>

      <li>
        <button type="button" className="">
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TaskFilter;
