import { configureStore } from '@reduxjs/toolkit'
import openModelReducer from '../redux/openModelSlice';

export default configureStore({
  reducer: {
    openModel: openModelReducer,
  },
})