function filterActive(prevState) {
  const newArrV = prevState.globList.filter((el) => !el.completed);
  return {
    ...prevState,
    visList: newArrV,
  };
}

export default filterActive;
