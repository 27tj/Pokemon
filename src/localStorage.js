export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("userData");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userData", serializedState);
  } catch (err) {
    console.error("idk what the error is", err);
  }
};
