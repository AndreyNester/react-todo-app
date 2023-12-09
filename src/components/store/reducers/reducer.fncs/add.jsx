function add(prevState, action) {
  const id = prevState.globList.length ? Math.max(...prevState.globList.map((el) => el.id)) + 1 : 0;
  const createdAt = new Date().getTime();
  const presentTime = new Date().getTime();
  const finishAt = Number(presentTime + action.payload.min * 60 * 1000 + action.payload.sec * 1000);
  const difference = finishAt - presentTime;

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
          presentTime,
          finishAt,
          difference,
          started: false,
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
          presentTime,
          finishAt,
          difference,
          started: false,
        },
      },
    ],
  };
}

export default add;
