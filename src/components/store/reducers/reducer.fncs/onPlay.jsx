function onPlay(prevState, action) {
  const idxG = prevState.globList.findIndex((el) => action.payload.id === el.id);
  const idxV = prevState.visList.findIndex((el) => action.payload.id === el.id);

  const newArrG = [...prevState.globList];
  const newArrV = [...prevState.visList];

  newArrG[idxG] = {
    ...prevState.globList[idxG],
    timer: {
      ...prevState.globList[idxG].timer,
      started: !prevState.globList[idxG].timer.started,
    },
  };

  newArrV[idxV] = {
    ...prevState.visList[idxV],
    timer: {
      ...prevState.visList[idxV].timer,
      started: !prevState.visList[idxV].timer.started,
    },
  };

  return {
    ...prevState,
    globList: newArrG,
    visList: newArrV,
  };
}

export default onPlay;
