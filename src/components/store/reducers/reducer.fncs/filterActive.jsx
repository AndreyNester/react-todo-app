function filterActive(prevState) {
  const newArrV = prevState.globList.filter((el) => !el.completed);
  return {
    ...prevState,
    filter: 'active',
    visList: newArrV,
  };
}

export default filterActive;
