function complete(prevState, action) {
  const idxG = prevState.globList.findIndex((el) => action.payload.id === el.id);
  const idxV = prevState.visList.findIndex((el) => action.payload.id === el.id);

  const newArrG = [...prevState.globList];
  const newArrV = [...prevState.visList];

  newArrG[idxG] = {
    ...prevState.globList[idxG],
    completed: !prevState.globList[idxG].completed,
  };

  newArrV[idxV] = {
    ...prevState.visList[idxV],
    completed: !prevState.visList[idxV].completed,
  };

  return {
    ...prevState,
    globList: newArrG,
    visList: newArrV,
  };
}

export default complete;
