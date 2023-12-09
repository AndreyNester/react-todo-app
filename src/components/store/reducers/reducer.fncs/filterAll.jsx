function filterAll(prevState) {
  const newArrV = [...prevState.globList];
  return {
    ...prevState,
    visList: newArrV,
  };
}

export default filterAll;
