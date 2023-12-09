function add(prevState, action) {
  const id = prevState.globList.length ? Math.max(...prevState.globList.map((el) => el.id)) + 1 : 0;
  const createdAt = new Date().getTime();
  return {
    ...prevState,
    globList: [
      ...prevState.globList,
      {
        title: action.payload.title,
        id,
        completed: false,
        timer: {
          createdAt,
        },
      },
    ],
    visList: [
      ...prevState.visList,
      {
        title: action.payload.title,
        id,
        completed: false,
        timer: {
          createdAt,
        },
      },
    ],
  };
}

export default add;
