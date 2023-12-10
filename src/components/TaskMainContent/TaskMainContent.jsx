import { useContext } from 'react';

import { dataContext } from '../../App';
import { onPause, onPlay } from '../store/actions/actions';

function TaskMainContent(props) {
  const {
    item: {
      title,
      id,
      completed,
      timer: { started },
    },
    cDTimerFormater,
    createTime,
    CDTimer,
  } = props;
  const { dispatchData } = useContext(dataContext);
  return (
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
  );
}

export default TaskMainContent;
