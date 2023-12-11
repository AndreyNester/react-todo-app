function filterCompleted(prevState) {
  const newArrV = prevState.globList.filter((el) => el.completed);
  return {
    ...prevState,
    filter: 'completed',
    visList: newArrV,
  };
}

export default filterCompleted;
