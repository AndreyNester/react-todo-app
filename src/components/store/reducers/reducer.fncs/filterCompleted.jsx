function filterCompleted(prevState) {
  const newArrV = prevState.globList.filter((el) => el.completed);
  return {
    ...prevState,
    visList: newArrV,
  };
}

export default filterCompleted;
