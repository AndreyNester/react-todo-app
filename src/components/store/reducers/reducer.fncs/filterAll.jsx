function filterAll(prevState) {
  const newArrV = [...prevState.globList];
  return {
    ...prevState,
    filter: 'all',
    visList: newArrV,
  };
}

export default filterAll;
