import { configureStore } from '@reduxjs/toolkit'
import openModelReducer from '../redux/openModelSlice';
import getRoomsReducer from '../redux/getRoomsSlice';
import authenticationReducer from '../redux/authenSlice';

export default configureStore({
  reducer: {
    openModel: openModelReducer,
    authentication: authenticationReducer,
    getRooms: getRoomsReducer
  },
})