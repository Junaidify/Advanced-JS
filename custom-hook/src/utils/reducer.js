import { API_REQUEST, LOCAL_STORAGE } from "../utils/actionTypes";
import { initialState, localStoreageState } from "../utils/initialState";

export const fetchData = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST.LOADING:
      return { ...state, loading: true };
    case API_REQUEST.SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case API_REQUEST.ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export const localStorageReducer = (state = localStoreageState, action) => {
  switch (action.type) {
    case LOCAL_STORAGE.LOADING:
      return { ...state, loading: true };

    case LOCAL_STORAGE.ERROR:
      return { ...state, loading: false, error: true };

    case LOCAL_STORAGE.SUCCESS: {
      const storedData = { ...state, loading: false, data: action.payload };
      localStorage.setItem("storedData", JSON.stringify(storedData.data));
      return storedData;
    }

    default : 
    return state; 
    
  }
};
