const initialState = {};

export default function UserDataReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case "increment":
      if (!newState[action.target]) {
        const newState_2 = {
          ...newState,
          [action.target]: { value: 1, isFavor: false },
        };
        return newState_2;
        //return (newState[action.target].value = 1);
      } else {
        return {
          ...newState,
          [action.target]: {
            ...newState[action.target],
            value: newState[action.target].value + 1,
          },
        };
      }
      break;
    case "setFavor":
      if (!newState[action.target]) {
        const newState_2 = {
          ...newState,
          [action.target]: { value: 0, isFavor: true },
        };
        return newState_2;
      } else {
        return {
          ...newState,
          [action.target]: {
            ...state[action.target],
            isFavor: !newState[action.target].isFavor,
          },
        };
      }
    default:
      break;
  }
  return newState;
}
