export const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const localStoreageState = {
  loading: false,
  error: false,
  data: JSON.parse(localStorage.getItem("storedData")) || [],
};
