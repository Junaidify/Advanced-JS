export const logAction = (store) => (next) => (action) => {
  console.log(action.type);

  return next(action);
};

export const logPayload = (store) => (next) => (action) => {
  if (action.payload) {
    console.log("Payload" + action.payload);
  } else {
    console.log("No payload for: " + action.type);
  }
  return next(action);
};
