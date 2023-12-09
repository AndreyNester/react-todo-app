import Task from '../Task/Task';
import './TaskList.css';

function TaskList(props) {
  const { visList } = props;
  console.log(visList);

  return (
    <ul className="todo-list">
      {visList.map((el) => (
        <Task item={el} key={el.id} />
      ))}
    </ul>
  );
}

export default TaskList;
