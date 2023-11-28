import React from 'react';

import Task from '../Task/Task';
import './TaskList.css';

function TaskList({ todoList, onDeleted, onComplited, onEdit, onEditTask, onTick, onPause, onPlay }) {
  return (
    <ul className="todo-list">
      {todoList.map((elem) => {
        return (
          <Task
            key={elem.id}
            propText={elem.text}
            complited={elem.complited}
            id={elem.id}
            createdAt={elem.createdAt}
            editing={elem.editing}
            timerStopped={elem.timer.stopped}
            timerDifference={elem.timer.difference}
            onDeleted={onDeleted}
            onComplited={onComplited}
            onEdit={onEdit}
            onEditTask={onEditTask}
            onTick={onTick}
            onPause={onPause}
            onPlay={onPlay}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
