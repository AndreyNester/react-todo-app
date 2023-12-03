import Task from '../Task/Task';
import './TaskList.css';

function TaskList() {
  return (
    <ul className="todo-list">
      <Task id={1} />
      <Task id={2} />
      <Task id={3} />
    </ul>
  );
}

export default TaskList;
