import { API_FETCH } from "../constants/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_FETCH.TASKS.LOADING:
      return { ...state, loading: true };
    case API_FETCH.TASKS.ERROR:
      return { ...state, loading: false, error: false };
    case API_FETCH.TASKS.DELETE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case API_FETCH.TASKS.SEARCH:
      return {
        ...state,
        data:
          action.payload === " "
            ? state.data
            : state.data.filter((item) =>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
              ),
      };

    case API_FETCH.TASKS.SORT_DEADLINE:
      return {
        ...state,
        data:
          action.payload === " "
            ? state.data
            : state.data.sort((a, b) => a.deadline - b.deadline),
      };
    case API_FETCH.TASKS.SORT_CREATION:
      return {
        ...state,
        data:
          action.payload === " "
            ? state.data
            : state.data.sort((a, b) => a.created - b.created),
      };

    case API_FETCH.TASKS.SORT_PRIORITY:
      return {
        ...state,
        data:
          action.payload === " "
            ? state.data
            : state.data.sort((a, b) => a.priority - b.priority),
      };
    case API_FETCH.TASKS.SUCCESS:
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_FETCH.USER.LOADING:
      return { ...state, loading: true };
    case API_FETCH.USER.ERROR:
      return { ...state, loading: false, error: false };
    case API_FETCH.USER.DELETE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case API_FETCH.USER.SUCCESS:
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};
