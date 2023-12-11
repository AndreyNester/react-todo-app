import classNames from 'classnames';
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

  const playBtnClassName = {
    cdTimer__button: true,
    icon: true,
    'icon-play': true,
    hidden: started,
    disable: completed,
  };

  const pauseBtnClassName = {
    cdTimer__button: true,
    icon: true,
    'icon-pause': true,
    hidden: !started,
  };

  return (
    <label htmlFor={id}>
      <span className="description">{title}</span>
      <div className="cdTimer">
        <button
          className={classNames(playBtnClassName)}
          type="button"
          onClick={() => (!completed ? dispatchData(onPlay({ id })) : null)}
        >
          {' '}
        </button>
        <button
          className={classNames(pauseBtnClassName)}
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
