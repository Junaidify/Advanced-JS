import {configureStore} from '@reduxjs/toolkit'
import fetchReducer from './fetchReducer'

export const store = configureStore({
    reducer : {
      fetch : fetchReducer
    }
})
