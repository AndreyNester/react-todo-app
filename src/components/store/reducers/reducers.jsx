const appReducer = (prevState, action) => {
  switch (action.type) {
    case 'ADD': {
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

    case 'COMPLETE': {
      const idxG = prevState.globList.findIndex((el) => action.payload.id === el.id);
      const idxV = prevState.visList.findIndex((el) => action.payload.id === el.id);

      const newArrG = [...prevState.globList];
      const newArrV = [...prevState.visList];

      newArrG[idxG] = {
        ...prevState.globList[idxG],
        completed: !prevState.globList[idxG].completed,
      };

      newArrV[idxV] = {
        ...prevState.visList[idxV],
        completed: !prevState.visList[idxV].completed,
      };

      return {
        ...prevState,
        globList: newArrG,
        visList: newArrV,
      };
    }

    case 'DELETE': {
      const newArrG = prevState.globList.filter((el) => el.id !== action.payload.id);
      const newArrV = prevState.visList.filter((el) => el.id !== action.payload.id);
      return {
        ...prevState,
        globList: newArrG,
        visList: newArrV,
      };
    }

    case 'EDIT': {
      const idxG = prevState.globList.findIndex((el) => action.payload.id === el.id);
      const idxV = prevState.visList.findIndex((el) => action.payload.id === el.id);

      const newArrG = [...prevState.globList];
      const newArrV = [...prevState.visList];

      newArrG[idxG] = {
        ...prevState.globList[idxG],
        title: action.payload.title,
      };

      newArrV[idxV] = {
        ...prevState.visList[idxV],
        title: action.payload.title,
      };

      return {
        ...prevState,
        globList: newArrG,
        visList: newArrV,
      };
    }

    case 'CLEAR_ACTIVE': {
      const newArrG = prevState.globList.filter((el) => !el.completed);
      const newArrV = prevState.visList.filter((el) => !el.completed);

      return {
        ...prevState,
        globList: newArrG,
        visList: newArrV,
      };
    }

    case 'FILTER_ALL': {
      const newArrV = [...prevState.globList];
      return {
        ...prevState,
        visList: newArrV,
      };
    }

    case 'FILTER_ACTIVE': {
      const newArrV = prevState.globList.filter((el) => !el.completed);
      return {
        ...prevState,
        visList: newArrV,
      };
    }

    case 'FILTER_COMPLETED': {
      const newArrV = prevState.globList.filter((el) => el.completed);
      return {
        ...prevState,
        visList: newArrV,
      };
    }

    default:
      break;
  }
  return prevState;
};

export default appReducer;
