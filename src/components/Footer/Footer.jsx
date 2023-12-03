import TaskFilter from '../TasksFilter/TaskFilter';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">1 item left</span>
      <TaskFilter />
      <button type="button" className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
