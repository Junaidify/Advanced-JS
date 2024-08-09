import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetchApi",
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
  },
  reducers : {
    setLoading : state => {
        state.isLoading = true
    }, 
    setError : state => {
        state.isLoading = false, 
        state.isError  = true
    }, 
    setData : (state, action) => {
        state.isLoading = false, 
        state.data = action.payload
    }
  }
});


export const {setData, setError, setLoading} = fetchSlice.actions; 
export default fetchSlice.reducer; 