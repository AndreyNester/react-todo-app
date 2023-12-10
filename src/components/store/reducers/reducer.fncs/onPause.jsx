function onPause(prevState, action) {
  const idxG = prevState.globList.findIndex((el) => action.payload.id === el.id);
  const idxV = prevState.visList.findIndex((el) => action.payload.id === el.id);

  const newArrG = [...prevState.globList];
  const newArrV = [...prevState.visList];

  const newFixedDif = action.payload.CDTimer;

  newArrG[idxG] = {
    ...prevState.globList[idxG],
    timer: {
      ...prevState.globList[idxG].timer,
      started: false,
      difference: newFixedDif,
    },
  };

  newArrV[idxV] = {
    ...prevState.visList[idxV],
    timer: {
      ...prevState.visList[idxV].timer,
      started: false,
      difference: newFixedDif,
    },
  };

  return {
    ...prevState,
    globList: newArrG,
    visList: newArrV,
  };
}

export default onPause;
