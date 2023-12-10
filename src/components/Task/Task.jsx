/* eslint-disable import/no-cycle */
import { useContext, useEffect, useState } from 'react';

import { dataContext } from '../../App';
// eslint-disable-next-line import/order
import { onComplete, onDelete, onEdit, onPause, onPlay } from '../store/actions/actions';
import './Task.css';
import { cDTimerFormater, timeFormater } from './utils';

function Task(props) {
  const { dispatchData } = useContext(dataContext);
  const {
    item: {
      id,
      title,
      completed,
      timer: { createdAt, started, difference },
    },
  } = props;

  const [editing, setEditing] = useState(false);
  const [editingValue, setEditingValue] = useState(title);
  const [createTime, setCreateTime] = useState(timeFormater(createdAt));
  // eslint-disable-next-line no-unused-vars
  const [CDTimer, setCDTimer] = useState(difference);

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
  }, [completed]);

  useEffect(() => {
    if (started) {
      const cdIntervalId = setInterval(() => setCDTimer((prevCDTimer) => prevCDTimer - 1000), 1000);
      return () => clearInterval(cdIntervalId);
    }
    return undefined;
  }, [started]);

  return (
    <li className={`${completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
      <div className="view">
        <input
          id={id}
          type="checkbox"
          className="toggle"
          onChange={() => dispatchData(onComplete({ id }))}
          checked={completed}
        />
        <label htmlFor={id}>
          <span className="description">{title}</span>
          <div className="cdTimer">
            <button
              className={`cdTimer__button icon icon-play ${started && 'hidden'} ${completed && 'disable'}`}
              type="button"
              onClick={() => (!completed ? dispatchData(onPlay({ id })) : null)}
            >
              {' '}
            </button>
            <button
              className={`cdTimer__button icon icon-pause ${!started && 'hidden'}`}
              type="button"
              onClick={() => (!completed ? dispatchData(onPause({ id, CDTimer })) : null)}
            >
              {' '}
            </button>
            <time className="cdTimer__time">{cDTimerFormater(CDTimer)}</time>
          </div>
          <span className="created">created {createTime}</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={() => setEditing((prevState) => !prevState)}>
          {' '}
        </button>
        <button type="button" className="icon icon-destroy" onClick={() => dispatchData(onDelete({ id }))}>
          {' '}
        </button>
      </div>
      {editing && (
        <input
          type="text"
          className="edit"
          value={editingValue}
          onKeyUp={(e) =>
            (e.code === 'Escape' && setEditing((prevState) => !prevState)) ||
            (e.code === 'Enter' && dispatchData(onEdit({ title: editingValue, id })))
          }
          onChange={(e) => setEditingValue(e.target.value)}
        />
      )}
    </li>
  );
}

export default Task;
