function clearCompleted(prevState) {
  const newArrG = prevState.globList.filter((el) => !el.completed);
  const newArrV = prevState.visList.filter((el) => !el.completed);

  return {
    ...prevState,
    globList: newArrG,
    visList: newArrV,
  };
}

export default clearCompleted;
