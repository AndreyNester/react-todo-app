export const onAdd = (value) => {
  return {
    type: 'ADD',
    payload: value,
  };
};

export const onDelete = (value) => {
  return {
    type: 'DELETE',
    payload: value,
  };
};

export const onComplete = (value) => {
  return {
    type: 'COMPLETE',
    payload: value,
  };
};

export const onEdit = (value) => {
  return {
    type: 'EDIT',
    payload: value,
  };
};

export const onClearActive = (value) => {
  return {
    type: 'CLEAR_COMPLETED',
    payload: value,
  };
};

export const onFilterAll = (value) => {
  return {
    type: 'FILTER_ALL',
    payload: value,
  };
};

export const onFilterCompleted = (value) => {
  return {
    type: 'FILTER_COMPLETED',
    payload: value,
  };
};

export const onFilterActive = (value) => {
  return {
    type: 'FILTER_ACTIVE',
    payload: value,
  };
};

export const onPlay = (value) => {
  return {
    type: 'ONPLAY',
    payload: value,
  };
};

export const onPause = (value) => {
  return {
    type: 'ONPAUSE',
    payload: value,
  };
};

export const onUpdate = (value) => {
  return {
    type: 'ONUPDATE',
    payload: value,
  };
};
