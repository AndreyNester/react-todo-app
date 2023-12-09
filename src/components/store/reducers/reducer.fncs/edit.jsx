function edit(prevState, action) {
  const idxG = prevState.globList.findIndex((el) => action.payload.id === el.id);
  const idxV = prevState.visList.findIndex((el) => action.payload.id === el.id);

  const newArrG = [...prevState.globList];
  const newArrV = [...prevState.visList];

  newArrG[idxG] = {
    ...prevState.globList[idxG],
    title: action.payload.title,
  };

  newArrV[idxV] = {
    ...prevState.visList[idxV],
    title: action.payload.title,
  };

  return {
    ...prevState,
    globList: newArrG,
    visList: newArrV,
  };
}

export default edit;
