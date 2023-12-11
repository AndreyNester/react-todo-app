/* eslint-disable import/no-cycle */
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';

import { dataContext } from '../../App';
import EditingInput from '../EditingInput/EditingInput';
import TaskMainContent from '../TaskMainContent/TaskMainContent';
// eslint-disable-next-line import/order
import { onComplete, onDelete, onPause, updateList } from '../store/actions/actions';
// eslint-disable-next-line import/order
import './Task.css';
import { cDTimerFormater, timeFormater } from './utils';

function Task(props) {
  const { dispatchData } = useContext(dataContext);
  const {
    item,
    item: {
      id,
      title,
      completed,
      timer: { createdAt, started, difference, unmountedAt },
    },
  } = props;

  const [editing, setEditing] = useState(false);
  const [editingValue, setEditingValue] = useState(title);
  const [createTime, setCreateTime] = useState(timeFormater(createdAt));
  // eslint-disable-next-line no-unused-vars
  const [CDTimer, setCDTimer] = useState(difference);

  // == start useEffect's block ==
  useEffect(() => {
    setEditingValue(title);
  }, [editing]);

  useEffect(() => {
    setEditing(false);
  }, [title]);

  useEffect(() => {
    const interval = setInterval(() => setCreateTime(timeFormater(createdAt)), 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (completed && started) dispatchData(onPause({ id, CDTimer }));
    dispatchData(updateList({ id }));
  }, [completed]);

  useEffect(() => {
    if (started) {
      const cdIntervalId = setInterval(() => setCDTimer(difference - (new Date().getTime() - unmountedAt)), 1000);
      return () => clearInterval(cdIntervalId);
    }
    return undefined;
  }, [started]);

  useEffect(() => {
    if (started) setCDTimer(difference - (new Date().getTime() - unmountedAt));
  }, []);

  // == finish useEffect's block ==

  const liClassName = {
    completed,
    editing,
  };

  return (
    <li className={classNames(liClassName)}>
      <div className="view">
        <input
          id={id}
          type="checkbox"
          className="toggle"
          onChange={() => dispatchData(onComplete({ id }))}
          checked={completed}
        />
        <TaskMainContent item={item} cDTimerFormater={cDTimerFormater} createTime={createTime} CDTimer={CDTimer} />
        <button type="button" className="icon icon-edit" onClick={() => setEditing((prevState) => !prevState)}>
          {' '}
        </button>
        <button type="button" className="icon icon-destroy" onClick={() => dispatchData(onDelete({ id }))}>
          {' '}
        </button>
      </div>
      {editing && (
        <EditingInput id={id} editingValue={editingValue} setEditing={setEditing} setEditingValue={setEditingValue} />
      )}
    </li>
  );
}

export default Task;
