function onUpdate(prevState, action) {
  const idxG = prevState.globList.findIndex((el) => action.payload.id === el.id);
  const idxV = prevState.visList.findIndex((el) => action.payload.id === el.id);

  const newArrG = [...prevState.globList];
  const newArrV = [...prevState.visList];

  const currentDifference = action.payload.CDTimer;

  const presentTime = new Date().getTime();

  newArrG[idxG] = {
    ...prevState.globList[idxG],
    timer: {
      ...prevState.globList[idxG].timer,
      unmountedAt: presentTime,
      difference: currentDifference,
    },
  };
  console.log(prevState);

  newArrV[idxV] = {
    ...prevState.visList[idxV],
    timer: {
      ...prevState.visList[idxV].timer,
      unmountedAt: presentTime,
      difference: currentDifference,
    },
  };

  return {
    ...prevState,
    globList: newArrG,
    visList: newArrV,
  };
}

export default onUpdate;
