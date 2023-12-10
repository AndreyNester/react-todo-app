function onUpdate(prevState, action) {
  const idxG = prevState.globList.findIndex((el) => action.payload.id === el.id);
  const idxV = prevState.visList.findIndex((el) => action.payload.id === el.id);

  const newArrG = [...prevState.globList];
  const newArrV = [...prevState.visList];

  const newDifferenceG = prevState.globList[idxG].timer.finishAt - new Date().getTime();
  const newDifferenceV = prevState.visList[idxV].timer.finishAt - new Date().getTime();

  newArrG[idxG] = {
    ...prevState.globList[idxG],
    timer: {
      ...prevState.globList[idxG].timer,
      difference: newDifferenceG,
    },
  };

  newArrV[idxV] = {
    ...prevState.visList[idxV],
    timer: {
      ...prevState.visList[idxV].timer,
      difference: newDifferenceV,
    },
  };

  return {
    ...prevState,
    globList: newArrG,
    visList: newArrV,
  };
}

export default onUpdate;
