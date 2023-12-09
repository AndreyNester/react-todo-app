function deleted(prevState, action) {
  const newArrG = prevState.globList.filter((el) => el.id !== action.payload.id);
  const newArrV = prevState.visList.filter((el) => el.id !== action.payload.id);
  return {
    ...prevState,
    globList: newArrG,
    visList: newArrV,
  };
}

export default deleted;
